import Head from 'next/head'
import Image from 'next/image'
import BookCard from '../components/BookCard'
import styles from '../../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'

export const getStaticProps = async () => {
  const res = await fetch('https://api-eu-west-2.graphcms.com/v2/ckzjrvlfv2p8y01xo1igih0pt/master', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query Books {
        books {
          id
          title
          isbn
          price
          imageUrl
          description {
            markdown
            html
          }
        }
      }
        `,
    }),
  });
  const { data } = await res.json();
    return {
      props: {books: data}
    }
  
}


const Books = ({books}) => {
 
  const [allProducts, setAllProducts] = useState(books.books);
  const [filteredProducts, setFilteredProducts] = useState(books.books);
  const [filters, setFilters] = useState({
    s: '',
    sort: '',
});

useEffect(() => {
  // filters the array according to the search phrase
let products = allProducts.filter(p => p.title.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0);
setFilteredProducts(products);

// sorts the filtered array
  if (filters.sort === 'asc' || filters.sort === 'desc') {
      products.sort((a, b) => {
          const diff = a.price - b.price;
          if (diff === 0) return 0;
          const sign = Math.abs(diff) / diff; //-1, 1
          return filters.sort === 'asc' ? sign : -sign;
      })
  }
}, [filters]);

  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <Head>
        <title>DK App</title>
        <meta name="description" content="DK Task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <BookCard books={filteredProducts} filters={filters} setFilters={setFilters} />
      

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </>
  )
}

export default Books