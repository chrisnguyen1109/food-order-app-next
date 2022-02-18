import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { getDetailProduct, getProductsIndex } from '../../api/product';
import PizzaForm from '../../components/PizzaForm';
import { addItem } from '../../redux/cartSlice';
import styles from '../../styles/ProductDetail.module.css';

const ProductDetail = ({ pizza }) => {
    const dispatch = useDispatch();

    const addToCartHandler = (data, cb) => {
        dispatch(
            addItem({
                ...pizza,
                ...data,
                price: pizza.price * data.size,
                uuid: uuidv4(),
            })
        );

        cb();
        toast.success('Add cart successfully!');
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/img/pizza.png"
                        objectFit="contain"
                        layout="fill"
                        alt=""
                        priority
                    />
                </div>
            </div>
            <div className={styles.right}>
                <PizzaForm pizza={pizza} onAddToCart={addToCartHandler} />
            </div>
        </div>
    );
};

export default ProductDetail;

export const getStaticPaths = async () => {
    const paths = await getProductsIndex();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const pizza = await getDetailProduct(params.productId);

    return {
        props: {
            pizza,
        },
        revalidate: 3600,
    };
};
