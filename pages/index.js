import Head from 'next/head'

import styles from '../styles/Home.module.scss';

import Header from '../components/Header';
import Intro from '../components/Intro';
import AllBlogPosts from '../components/AllBlogPosts';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Ipsum Blog</title>
        <meta name="description" content="An Ipsum Blog" />
      </Head>
      <section className={styles.firstSection}>
        <Header />
        <Intro />
      </section>
      <section className={styles.secondSection}>
        <AllBlogPosts />
      </section>
      <section className={styles.footer}>
        <Footer/>
      </section>
    </div>
  )
}
