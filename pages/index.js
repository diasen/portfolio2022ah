import Head from 'next/head';
import Body from '../components/body/Body';
import Main from '../components/main/Main';
import Header from '../components/header/Header';
import Projects from '../components/projects/Projects';
import Philosophy from '../components/philosophy/Philosophy';
import Skill from '../components/skill/Skill';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexander Hansen Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Body>
        <Main>
          <Header />
          <Hero />
          <Projects />
          <Philosophy />
          <Skill />
          <About />
          <Contact />
          <Footer />
        </Main>
      </Body>
    </>
  );
}
