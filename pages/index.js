import Head from 'next/head'
import styles from '../styles/home.module.scss'
import Layout from '../components/layout.js'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Hi, I'm Jin Jin</h1>
        <p>My site is currently under construction. Check back soon.</p>
      </div>
    </Layout>
  )
}
