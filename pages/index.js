import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Ipsum Blog</title>
        <meta name="description" content="An Ipsum Blog" />
      </Head>
    </div>
  )
}
