import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Date from '../../components/date'
import Image from 'next/image'
import Head from 'next/head'

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
            <Head>
                <title>{projectData.title}</title>
            </Head>
            {projectData.title}
            <Image
                src={projectData.img}
                alt="Placeholder"
                width={250}
                height={250}
            />
            <br />
            {projectData.id}
            <br />
            <Date dateString={projectData.date} />
            <br />
            <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </Layout>
    )
}