import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = ({ pizza }) => {
    const { id, title, price, descriptions } = pizza;

    return (
        <Link href={`/products/${id}`} passHref>
            <div className={styles.container}>
                <Image src="/img/pizza.png" alt="" width="500" height="500" />
                <h1 className={styles.title}>{title}</h1>
                <span className={styles.price}>$ {price}</span>
                <p className={styles.desc}>{descriptions}</p>
            </div>
        </Link>
    );
};

export default PizzaCard;
