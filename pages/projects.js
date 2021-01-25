import Head from 'next/head'
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
      <h1>Projects</h1>
      <ul className={styles.projectList}>
        {allProjectsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </Layout>
  )
}