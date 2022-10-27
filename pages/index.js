import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.css'
import homeStyles from '../styles/Home.module.css'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
    <Navbar />
    <div className={homeStyles.container}>
      <Head>
        <title>DK App</title>
        <meta name="description" content="DK Task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <div className={styles.showcase}>
          <div>
          
          </div>
        </div>
    

      <footer className={homeStyles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={homeStyles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </>
  )
}
