import Head from 'next/head'
import styles from '../styles/home.module.scss'
import Layout from '../components/layout'
import Button from '../components/button'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout type="clear">
      <motion.div className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}>
        <div className={styles.left}>
          <h1>Hi, I'm Jin Jin</h1>
          <p>I'm a <span>front-end developer</span> with a passion for combining <span>code</span> and <span>creativity</span> to solve problems.</p>
        </div>
        <div className={styles.right}>
          <Button link="/projects" title="VIEW MY WORK"></Button>
          <Button link="/about" title="ABOUT ME"></Button>
        </div>
      </motion.div>
    </Layout>
  )
}
