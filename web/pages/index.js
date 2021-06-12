import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { fetchGraphql } from 'react-tinacms-strapi'
import WorkSection from '../components/work-section'
import MoreSections from '../components/more-sections'

export default function Index({ allSections }) {
  const initialSection = allSections[0]
  const moreSections = allSections.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {initialSection && (
            <WorkSection section={initialSection} />
          )}
          {moreSections.length > 0 && <MoreSections sections={moreSections} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params, preview, previewData }) {
  const postResults = await fetchGraphql(
    process.env.STRAPI_URL,
    `
    query{
      workSections {
        id
        title
        workplace
        start
        end
        work_bullets {
          description
        }
      }
    }
  `
  )
  if (preview) {
    return {
      props: { allSections: postResults.data.workSections, preview, ...previewData },
    };
  }
  return {
    props: { allSections: postResults.data.workSections, preview: false },
  }
}
