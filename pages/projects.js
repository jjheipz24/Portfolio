import React, { useState, useRef } from 'react'
import classNames from 'classnames'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import styles from '../styles/projects.module.scss'
import Layout from '../components/layout.js'
import { motion } from 'framer-motion'
import { getSortedProjectsData } from '../lib/projects'

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}
export default function Projects({ allProjectsData }) {

  //Variables for controlling which projects to show
  const [web, setWeb] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [design, setDesign] = useState(false);

  const webRef = useRef();
  const mobileRef = useRef();
  const designRef = useRef();
  webRef.current = true;
  mobileRef.current = false;
  designRef.current = false;

  const webClass = classNames(
    [styles.title],
    {
      [styles.webActive]: web,
    });

  const mobileClass = classNames(
    [styles.title],
    {
      [styles.mobileActive]: mobile
    })

  const designClass = classNames(
    [styles.title],
    {
      [styles.designActive]: design
    })

  //Switches the current project type to show
  const handleActive = (selected) => {
    switch (selected) {
      case 'web':
        webRef.current = true;
        mobileRef.current = false;
        designRef.current = false;
        setWeb(webRef.current);
        setMobile(mobileRef.current);
        setDesign(designRef.current);
        break;
      case 'mobile':
        webRef.current = false;
        mobileRef.current = true;
        designRef.current = false;
        setWeb(webRef.current);
        setMobile(mobileRef.current);
        setDesign(designRef.current);
        break;
      case 'design':
        webRef.current = false;
        mobileRef.current = false;
        designRef.current = true;
        setWeb(webRef.current);
        setMobile(mobileRef.current);
        setDesign(designRef.current);
        break;
      default:
        webRef.current = true;
        mobileRef.current = false;
        designRef.current = false;
        setWeb(webRef.current);
        setMobile(mobileRef.current);
        setDesign(designRef.current);
        break;
    }
  }
  return (
    <Layout>
      <div className={styles.projectLayout}>
        <motion.div className={styles.titles}
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{duration: .5}}>
          <h1 className={webClass} onClick={() => handleActive('web')}>Web</h1>
          <h1 className={mobileClass} onClick={() => handleActive('mobile')}>Mobile</h1>
          <h1 className={designClass} onClick={() => handleActive('design')}>Design</h1>
        </motion.div>
        <motion.ul className={styles.projectList}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .2, duration: 2 }}>
          {allProjectsData.map(({ id, date, img, title, blurb }) => (
            <Link href={`/projects/${id}`} key={id}>
              <li className={styles.project}>
                <Image src={img}
                  className={styles.projectImg}
                  alt="Placeholder"
                  width={150}
                  height={150}>
                </Image>
                <div className={styles.info}>
                  <h4>{title}</h4>
                  <br />
                  <p>{blurb}</p>
                  {/* <Date dateString={date} /> */}
                </div>
                <Link href={`/projects/${id}`}>
                  <a className={styles.projectLink}>LEARN MORE</a>
                </Link>
              </li>
            </Link>
          ))}
        </motion.ul>
      </div>
    </Layout>
  )
}