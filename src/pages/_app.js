import { Provider } from "react-redux";
// import Store from "../../RTK/store/store";
import store from "../../RTK/store/store"
import '../app/globals.css';
// ... other necessary CSS imports
import Head from "next/head";
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Fatayeralaaltayer</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
                <Footer />
            </Provider>
        </>
    );
}

export default MyApp;