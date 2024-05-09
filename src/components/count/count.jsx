import styles from './count.module.css';

function CountItem ({count}){ 
    return(
        <div className={styles.card}>
            <h1 className={styles.card_title}>{count.status}</h1>
            <h3 className={styles.card_Desc}>{count.total}</h3>
        </div>
    );
}

export default CountItem;
