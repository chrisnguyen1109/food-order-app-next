import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { orderCart } from '../api/order';
import OrderPrice from '../components/OrderPrice';
import {
    cartItems,
    cartTotalPrice,
    clearItem,
    decreaseItem,
    increaseItem,
} from '../redux/cartSlice';
import styles from '../styles/Cart.module.css';

const convertSize = size => {
    switch (size) {
        case '1':
            return 'Small';
        case '2':
            return 'Medium';
        case '3':
            return 'Large';
        default:
            return;
    }
};

const Cart = () => {
    const items = useSelector(cartItems);
    const totalPrice = useSelector(cartTotalPrice);
    const dispatch = useDispatch();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const checkoutHandler = async () => {
        if (items.length === 0) return;

        setLoading(true);

        const orderId = await orderCart();

        toast.success('Order successfully!');
        dispatch(clearItem());
        setLoading(false);

        setTimeout(() => {
            router.replace(`/orders/${orderId}`);
        }, 0);
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.trTitle}>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th style={{ whiteSpace: 'nowrap', width: '25%' }}>
                                Quantity
                            </th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length === 0 && (
                            <tr>
                                <td colSpan={6} style={{ height: '200px' }}>
                                    No item in cart
                                </td>
                            </tr>
                        )}
                        {items.map(product => (
                            <tr key={product.uuid} className={styles.tr}>
                                <td>
                                    <div className={styles.imgContainer}>
                                        <Image
                                            src="/img/pizza.png"
                                            layout="fill"
                                            objectFit="cover"
                                            alt=""
                                        />
                                    </div>
                                </td>
                                <td>
                                    <span className={styles.name}>
                                        {product.title} (
                                        {convertSize(product.size)})
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.extras}>
                                        {product.ingredients.join(', ')}
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.price}>
                                        ${product.price.toFixed(2)}
                                    </span>
                                </td>
                                <td>
                                    <button
                                        className={styles.compute}
                                        onClick={() =>
                                            dispatch(decreaseItem(product.uuid))
                                        }
                                    >
                                        -
                                    </button>
                                    {product.count}
                                    <button
                                        className={styles.compute}
                                        onClick={() =>
                                            dispatch(increaseItem(product.uuid))
                                        }
                                    >
                                        +
                                    </button>
                                </td>
                                <td>
                                    <span className={styles.total}>
                                        $
                                        {(
                                            product.price * product.count
                                        ).toFixed(2)}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.right}>
                <OrderPrice
                    title="Cart total"
                    subtotal={totalPrice}
                    discount={0}
                    total={totalPrice}
                    button="Checkout now!"
                    onHandle={checkoutHandler}
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default Cart;
