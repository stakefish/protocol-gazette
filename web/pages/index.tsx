import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Text, Container } from '@nextui-org/react';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Protocol Gazette</title>
        <meta name="description" content="Your favorite protocol news aggregator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Text h2>Hello, World!</Text>
      </Container>
    </div>
  )
}

export default Home
