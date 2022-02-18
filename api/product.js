import axiosInstance from './axiosInstance';

export const getTopProducts = () => {
    const url = '/products?_limit=7';

    return axiosInstance.get(url);
};

export const getProductsIndex = async () => {
    const url = '/products?_limit=7';

    const products = await axiosInstance.get(url);

    return products.map(el => ({
        params: {
            productId: `${el.id}`,
        },
    }));
};

export const getDetailProduct = productId => {
    const url = `/products/${productId}`;

    return axiosInstance.get(url);
};
