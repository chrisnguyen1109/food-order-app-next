import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { cartTotal } from '../redux/cartSlice';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const router = useRouter();
    const totalCart = useSelector(cartTotal);

    return (
        <div className={styles.container}>
            <div className={styles['container__item--contact']}>
                <div className={styles.contact__logo}>
                    <Image
                        src="/img/telephone.png"
                        alt=""
                        width="32"
                        height="32"
                        priority
                    />
                </div>
                <div>
                    <div className={styles.contact__title}>Order Now!</div>
                    <div className={styles.contact__tel}>037 503 2407</div>
                </div>
            </div>
            <ul className={styles['container__item--list']}>
                <li>
                    <Link href="/" passHref>
                        Homepage
                    </Link>
                </li>
                <li>Products</li>
                <li>Menu</li>
                <li>
                    <Image
                        src="/img/logo.png"
                        alt=""
                        width="160px"
                        height="69px"
                        priority
                    />
                </li>
                <li>Events</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <div
                className={styles['container__item--cart']}
                onClick={() => router.push('/cart')}
            >
                <Image
                    src="/img/cart.png"
                    alt=""
                    width="30px"
                    height="30px"
                    priority
                />
                <span className={styles['container__item--cart-icon']}>
                    {totalCart}
                </span>
            </div>
        </div>
    );
};

export default Navbar;
