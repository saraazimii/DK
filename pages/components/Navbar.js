import Link from "next/link"
import styles from "../../styles/Navbar.module.css"
import { useRouter } from "next/router"
const Navbar = () => {
    const router = useRouter();
    return (
        <ul className={styles.nav}>
            <li className={router.pathname === '/' ? styles.current : ""}><Link href="/"><a>Home</a></Link></li>
            <li className={router.pathname === '/books' ? styles.current : ""}><Link href="/books"><a>Books</a></Link></li>
        </ul>
    )
}

export default Navbar