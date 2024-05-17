// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

import React from 'react';
import App from 'next/app';
import Layout from '../components/Layout'; // Corrected path
import '../styles/globals.css'; // Import global CSS

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Layout> {/* Use the Layout component */}
                <Component {...pageProps} />
            </Layout>
        );
    }
}

export default MyApp;
