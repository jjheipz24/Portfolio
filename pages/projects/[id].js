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
    const mediaArr = projectData.media
    const isMobile = projectData.mobile;
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
                {isMobile ?
                    <div className={styles.isMobile}>
                        <div className={styles.mobileCarousel}>
                            {mediaArr.map((pic, index) => {
                                return (
                                    <div key={index} className={styles.mobileImgContainer}>
                                        <img src={pic[0]} alt={pic[1]} className={styles.mobileImg}></img>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles.mainContent}>
                            <div className={styles.description} dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
                        </div>
                    </div> :
                    <div>
                        <div className={styles.carouselSection}>
                            <div className="carousel-wrapper">
                                <Carousel
                                    infiniteLoop
                                    useKeyboardArrows
                                    autoPlay
                                    showThumbs={false}
                                    showStatus={false}
                                    transitionTime={600}>
                                    {mediaArr.map((pic, index) => {
                                        return (
                                            <div key={index}>
                                                <img src={pic[0]} alt={pic[1]}></img>
                                            </div>
                                        )
                                    })}
                                </Carousel>
                            </div>
                        </div>
                        <div className={styles.mainContent}>
                            <div className={styles.description} dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
                        </div></div>}
            </motion.div>
        </Layout>
    )
}