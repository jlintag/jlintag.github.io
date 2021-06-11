import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { fetchGraphql } from 'react-tinacms-strapi'
import HeroSection from '../components/hero-section'
import MoreSections from '../components/more-sections'

export default function Index({ allSections }) {
  const heroSection = allSections[0]
  console.log(heroSection)
  const moreSections = allSections.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroSection && (
            <HeroSection
              title={heroSection.Title}
              workplace={heroSection.Workplace}
              start={heroSection.Start}
              end={heroSection.End}
            />
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
        Title
        Workplace
        Start
        End
        work_bullets {
          Description
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
