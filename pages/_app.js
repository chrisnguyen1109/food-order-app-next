import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout';
import store from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <ToastContainer />
        </Provider>
    );
}

export default MyApp;
