import React from 'react'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import AboutMain from '@/components/AboutMain/AboutMain'
import AboutCard from '@/blocks/AboutCard/AboutCard'
import GreenBanner from '@/components/GreenBanner/GreenBanner'
import TextBanner from '@/components/TextBanner/TextBanner'
import OverveiwWiget from '@/components/Hero/OverveiwWiget'

async function Page(): Promise<React.ReactElement> {
  const payload = await getPayloadHMR({ config: configPromise })
  const pageData = await payload.findGlobal({
    slug: 'aboutpage',
    depth: 5,
  })

  console.log('pageData', pageData)
  return (
    <div>
      <AboutMain {...pageData} />
      {pageData.aboutCard &&
        pageData.aboutCard.map((card) => {
          return <AboutCard key={card.id} {...card} />
        })}
      <GreenBanner text={pageData.greenTextBanner} />
      <OverveiwWiget overVeiwData={pageData.overveiwWidget} />
      <TextBanner subgreenText={pageData.subgreenText} mainText={pageData.mainBannerText} />
    </div>
  )
}

export default Page
