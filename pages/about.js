import Head from 'next/head'
import styles from '../styles/about.module.scss'
import Layout from '../components/layout.js'
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Jin Jin Heipler - About</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image
            src="/images/me.JPG"
            alt="Picture of Jin Jin"
            width={250}
            height={333}
          />
          <p><b>Hobbies: </b> CrossFit, Running, Rugby, Drumming, Singing, Gaming, Playing with my cat</p>
        </div>
        <div className={styles.right}>
          <p>Hi! My name is Jin Jin Heipler, and I’m from Shrewsbury, Massachusetts but am now living in Concord, Massachusetts. I recently graduated from the Rochester Institute of Technology with a Bachelor of Science in New Media Interactive Development and minors in Mobile Development and Communication.
            <br></br>
            <br></br>
            Ever since I was young, I knew I wanted to work with computers and code. My creative side, however, knew that I didn’t want to just type meaningless code. I wanted my projects to come alive. I was fascinated with and inspired by the games and other electronic devices I interacted with and how they were created, and I was constantly thinking of new things I could one day make.
            <br></br>
            <br></br>
            During my time at RIT, I fell in love with all things UI/UX and front-end development. Watching ideas in my head become fully-functional, interactive applications on my screen made me realize that this was something I wanted to do for the rest of my life.
            <br></br>
            <br></br>
            I have worked at both MassMutual and Constant Contact as a software engineer intern, and I currently work full-time as a Junior Front-End Developer at Booz Allen Hamilton. With my experience in full-stack and front-end development, I’m always ready for opportunities that will entice my curiosity and problem-solving skills to produce beautiful, clean, interactive user-experiences.
          </p>
        </div>
      </div>
    </Layout>
  )
}