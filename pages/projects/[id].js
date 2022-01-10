import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Date from '../../components/date'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

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
            <Link href="/projects">
                <a>Back</a>
            </Link>
            <Head>
                <title>{projectData.title} - Jin Jin Heipler</title>
            </Head>
            {projectData.title}
            <Image
                src={projectData.mainImg}
                alt="Placeholder"
                width={800}
                height={600}
            />
            <br />
            {projectData.id}
            <br />
            <Date dateString={projectData.date} />
            <br />
            <a href={projectData.link}>Link</a>
            <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </Layout>
    )
}