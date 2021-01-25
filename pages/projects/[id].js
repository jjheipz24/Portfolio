import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Date from '../../components/date'
import Image from 'next/image'

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
            {projectData.title}
            <Image
                src={projectData.img}
                alt="Picture of Jin Jin"
                width={250}
                height={333}
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