import styles from '../../styles/DetailPage.module.css';

const BookDetailComponent = ({book}) => {
    return (
        <main className={styles.container}>
            <div className={styles.leftColumn}>
                <img src={book?.imageUrl} alt={book?.title} />
            </div>
 
            <div className={styles.rightColumn}>
            <div className={styles.productPrice}>
                <span>£{book?.price}</span>
                <a href="#" className={styles.cartBtn}>Add to cart</a>
            </div>
                <div className={styles.productDescription}>
                    <h1>{book?.title}</h1>
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: book?.description.html }}></div>
                </div>
            </div>
 
        </main>
    )
}

export default BookDetailComponent