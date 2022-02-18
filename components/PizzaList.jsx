import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzas }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The Best Pizza In World</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                blandit arcu in pretium molestie. Interdum et malesuada fames
                acme. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.wrapper}>
                {pizzas.map(el => (
                    <PizzaCard key={el.id} pizza={el} />
                ))}
            </div>
        </div>
    );
};

export default PizzaList;
