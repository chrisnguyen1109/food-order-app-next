import Image from 'next/image';
import { useRouter } from 'next/router';
import OrderPrice from '../../components/OrderPrice';
import styles from '../../styles/Order.module.css';

const statusClass = index => {
    if (index - 0 < 1) return styles.done;
    if (index - 0 === 1) return styles.inProgress;
    if (index - 0 > 1) return styles.undone;
};

const Order = () => {
    const router = useRouter();

    const { orderId } = router.query;

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.trTitle}>
                                <th
                                    style={{
                                        whiteSpace: 'nowrap',
                                        width: '40%',
                                    }}
                                >
                                    Order ID
                                </th>
                                <th>Customer</th>
                                <th>Address</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.tr}>
                                <td>
                                    <span className={styles.id}>{orderId}</span>
                                </td>
                                <td>
                                    <span className={styles.name}>
                                        Chris Nguyen
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.address}>
                                        Elton st. 212-33 LA
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.total}>$79.80</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image
                            src="/img/paid.png"
                            width={30}
                            height={30}
                            alt=""
                        />
                        <span>Payment</span>
                        <div className={styles.checkedIcon}>
                            <Image
                                className={styles.checkedIcon}
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image
                            src="/img/bake.png"
                            width={30}
                            height={30}
                            alt=""
                        />
                        <span>Preparing</span>
                        <div className={styles.checkedIcon}>
                            <Image
                                className={styles.checkedIcon}
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image
                            src="/img/bike.png"
                            width={30}
                            height={30}
                            alt=""
                        />
                        <span>On the way</span>
                        <div className={styles.checkedIcon}>
                            <Image
                                className={styles.checkedIcon}
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image
                            src="/img/delivered.png"
                            width={30}
                            height={30}
                            alt=""
                        />
                        <span>Delivered</span>
                        <div className={styles.checkedIcon}>
                            <Image
                                className={styles.checkedIcon}
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <OrderPrice
                    title="Cart total"
                    subtotal={79.8}
                    discount={0}
                    total={79.8}
                    button="Paid"
                />
            </div>
        </div>
    );
};

export default Order;
