import Head from 'next/head'
import styles from '../styles/home.module.scss'
import Layout from '../components/layout.js'
import Button from '../components/button.js'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
          <div className={styles.left}>
            <h1>Hi, I'm Jin Jin</h1>
            <p>I'm a <span>front-end developer</span> with a passion for combining <span>code</span> and <span>creativity</span> to solve problems.</p>
          </div>
          <div className={styles.right}>
            <Button link="/projects" title="VIEW MY WORK"></Button>
            <Button link="/about" title="ABOUT ME"></Button>
          </div>
      </div>
    </Layout>
  )
}
