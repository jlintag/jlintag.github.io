import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { fetchGraphql } from 'react-tinacms-strapi'
import HeroSection from '../components/hero-section'

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
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          {/* {moreSections.length > 0 && <MoreStories posts={morePosts} />} */}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
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

  return {
    props: { allSections: postResults.data.workSections },
  }
}
