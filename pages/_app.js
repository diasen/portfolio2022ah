import '../styles/globals.css';
import GlobalStyle from '../styles/global';
import Heading from '../components/heading/Heading';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Heading>Im a google font</Heading>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
