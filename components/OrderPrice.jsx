import styles from '../styles/OrderPrice.module.css';

const OrderPrice = ({
    title,
    subtotal,
    discount,
    total,
    button,
    onHandle,
    loading = false,
}) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>$
                {subtotal.toFixed(2)}
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>$
                {discount.toFixed(2)}
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>$
                {total.toFixed(2)}
            </div>
            <button className={styles.button} onClick={onHandle}>
                {loading ? 'Loading...' : button}
            </button>
        </div>
    );
};

export default OrderPrice;
