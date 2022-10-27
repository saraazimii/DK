import BookDetailComponent from '../components/BookDetailComponent'
import Navbar from '../components/Navbar';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';

export const getStaticPaths = async () => {
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
      const paths = data.books.map(book =>{
        return {
            params:{id:book.id.toString()}
        }
      })
      return {
        paths: paths,
        fallback: false
      }
}

export const getStaticProps = async (context) => {
    const bookId = context.params.id;
    const res = await fetch('https://api-eu-west-2.graphcms.com/v2/ckzjrvlfv2p8y01xo1igih0pt/master', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query Book {
            book(where: {id: "${bookId}"}) {
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
          `
      }),
    });
    const { data } = await res.json();
      return {
        props: {bookDetails: data.book}
      }
    
  }

const Detail = ({bookDetails}) => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                
      
            <BookDetailComponent book={bookDetails} />

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

export default Detail