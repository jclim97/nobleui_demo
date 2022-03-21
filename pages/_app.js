import '../styles/globals.css'
import 'antd/dist/antd.css'
import Layout from '../components/layout';

function MyApp({ Component, pageProps, ...appProps }) {
  
    if ([`/`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  
}

export default MyApp
