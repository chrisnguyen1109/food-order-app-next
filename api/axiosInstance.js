import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3004',
    headers: {
        'content-type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(async config => {
    return config;
});

axiosInstance.interceptors.response.use(
    response => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    error => {
        throw error;
    }
);

export default axiosInstance;
