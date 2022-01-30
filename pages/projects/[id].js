import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Date from '../../components/date'
import Image from 'next/image'
import Button from '../../components/button'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/project.module.scss'
import { motion } from 'framer-motion'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id)
    return {
        props: {
            projectData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllProjectIds()
    return {
        paths,
        fallback: false
    }
}

export default function Project({ projectData }) {
    return (
        <Layout>
            {/* <Link href="/projects">
                <a>Back</a>
            </Link> */}
            <Head>
                <title>{projectData.title} - Jin Jin Heipler</title>
            </Head>
            <motion.div className={styles.projectContainer}>
                <div className={styles.header}>
                    <div className={styles.headerText}>
                        <h1 className={styles.title}>{projectData.title}</h1>
                        <h3 className={styles.subtitle}>{projectData.blurb}</h3>
                        <p className={styles.tools}>Tools: {projectData.technology}</p>
                    </div>
                    <Button link={projectData.link} title="VIEW WEBSITE"></Button>
                </div>
                {/* <Image
                    src={projectData.mainImg}
                    alt="Placeholder"
                    width={800}
                    height={600}
                    className={styles.projImg}
                /> */}
                <div className={styles.carouselSection}>
                    <div className="carousel-wrapper">
                        <Carousel
                            infiniteLoop
                            useKeyboardArrows
                            autoPlay
                            showThumbs={false}
                            showStatus={false}>
                            <div>
                                <img src={projectData.media1}></img>
                            </div>
                            <div>
                                <img src={projectData.media2}></img>
                            </div>
                            <div>
                                <img src={projectData.media3}></img>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className={styles.mainContent}>
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />

                </div>

            </motion.div>
        </Layout>
    )
}