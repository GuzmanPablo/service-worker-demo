import React, { useEffect } from 'react';
import '../styles/globals.css';
import { register, unregister } from 'next-offline/runtime';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        register('/service-worker.js', { scope: '/' });
        return () => unregister();
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;
