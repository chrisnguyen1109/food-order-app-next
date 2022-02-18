import Head from 'next/head';
import { getTopProducts } from '../api/product';
import PizzaList from '../components/PizzaList';
import Slider from '../components/Slider';

export default function Home({ pizzas }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content="Best pizza place in world" />
                <link rel="icon" href="/favicon.ico" />
                <title>Pizza Paradise</title>
            </Head>

            <main>
                <Slider />
                <PizzaList pizzas={pizzas} />
            </main>
        </>
    );
}

export const getStaticProps = async () => {
    const pizzas = await getTopProducts();

    return {
        props: {
            pizzas,
        },
        revalidate: 3600,
    };
};
