import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import styles from '../styles/projects.module.scss'
import Layout from '../components/layout.js'
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
  return (
    <Layout>
      <div className={styles.projectLayout}>
        <h1>Web</h1>
        <ul className={styles.projectList}>
          {allProjectsData.map(({ id, date, img, title, blurb }) => (
            <Link href={`/projects/${id}`} key={id}>
              <li className={styles.project}>
                <Image src={img}
                className={styles.projectImg}
                  alt="Placeholder"
                  width={130}
                  height={130}>
                </Image>
                <div className={styles.info}>
                  <h4>{title}</h4>
                  <br />
                  <p>{blurb}</p>
                  {/* <Date dateString={date} /> */}
                  <Link href={`/projects/${id}`}>
                    <a className={styles.projectLink}>LEARN MORE</a>
                  </Link>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Layout>
  )
}