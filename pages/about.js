import Head from 'next/head';
import styles from '../styles/about.module.scss';
import Layout from '../components/layout';
import Image from 'next/image';
import { motion } from 'framer-motion';

// function FadeInWhenVisible({ children }) {
//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ duration: 0.3 }}
//       variants={{
//         visible: { opacity: 1, scale: 1 },
//         hidden: { opacity: 0, scale: 0 }
//       }}
//     >
//       {children}
//     </motion.div>
//   )
// }
export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - Jin Jin Heipler</title>
      </Head>
      <div className={styles.container}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src='/images/me.JPG'
            alt='Picture of Jin Jin'
            width={250}
            height={333}
            className={styles.profilePic}
          />
          <p>
            <b>Hobbies: </b> CrossFit, Running, Rugby, Gaming, Drumming, Singing
          </p>
        </motion.div>
        <motion.div
          className={styles.right}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <p>
            Hi! My name is Jin Jin Heipler, and I’m from Shrewsbury,
            Massachusetts but am now living in Concord, Massachusetts. I
            graduated from the Rochester Institute of Technology with a Bachelor
            of Science in New Media Interactive Development and minors in Mobile
            Development and Communication.
          </p>
          <p>
            Ever since I was young, I knew I wanted to work with computers and
            code. My creative side, however, knew that I didn’t want to type
            boring, meaningless code. I wanted my projects to come alive. I was
            fascinated with and inspired by the games and other electronic
            devices I interacted with and how they were created, and I was
            constantly thinking of new things I could one day make.
          </p>
          <p>
            During my time at RIT, I fell in love with all things UI/UX and
            front-end development. Watching ideas in my head become
            fully-functional, interactive applications on my screen made me
            realize that this was something I wanted to do for the rest of my
            life.
          </p>
          <p>
            I have worked at both MassMutual and Constant Contact as a software
            engineer intern, and I was previously a Junior Front-End Developer
            at Booz Allen Hamilton. Currently, I am a Front-End Developer at
            LinkSquares (official title being "Software Engineer II"), where I
            help application teams build out the front end of innovative
            products and use my knowledge base to enforce best practices. With
            my experience in full-stack and front-end development, I’m always
            ready for opportunities that will entice my curiosity and
            problem-solving skills to produce beautiful, clean, interactive
            user-experiences.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
}
