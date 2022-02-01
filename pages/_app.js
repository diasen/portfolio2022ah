import '../styles/globals.css';
import GlobalStyleComponent from 'styled-components';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
