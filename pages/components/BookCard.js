import styles from '../../styles/Card.module.css';
import stylesHome from '../../styles/Home.module.css';

import Link from 'next/link';

const BookCard = (props) => {

    const search = (s) => {
        props.setFilters({
            ...props.filters,
            s,
            page: 1
        });
    }
    
        const sort = (sort) => {
            props.setFilters({
                ...props.filters,
                sort,
            });
        }


    return (
        <main className={stylesHome.main}>
            <div>
        <select className={styles.selectFilter} onChange={e => sort(e.target.value)}>
            <option value="asc" defaultValue>Price Ascending</option>
            <option value="desc">Price Descending</option>
        </select>

        <input className={styles.searchBar} placeholder="Search" onKeyUp={e => search(e.target.value)}/>
        </div>
        
        <div className={styles.grid}>
            {props.books.map(book => (
                <div key={book.id} className={styles.card}>
                <img src={book.imageUrl} />
                <h4>{book.title}</h4>
                <p className={styles.title}>£{book.price}</p>
                <Link href={`books/${book.id}`}>
                <p><button>Details</button></p>
                </Link>
            </div>
            ))
            }
        </div>
        </main>
    )
}

export default BookCard