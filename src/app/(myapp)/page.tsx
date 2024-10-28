import BasicCard from '@/blocks/BasicCard/BasicCard'
import Hero from '@/components/Hero/Hero'
import { PlantCarousel } from '@/components/PlantCarousel/PlantCarousel'
import TextBanner from '@/components/TextBanner/TextBanner'
import React from 'react'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { PriceCard } from '@/blocks/PriceCard/PriceCard'

async function Page(): Promise<React.ReactElement> {
  const payload = await getPayloadHMR({ config: configPromise })
  const pageData = await payload.findGlobal({
    slug: 'homepage',
    depth: 5,
  })

  console.log('pageData', pageData)

  return (
    <div className="w-[screen] overflow-hidden flex flex-col justify-center items-center align-middle box-border mt-4 gap-11 md:gap-20 2xl:gap-24">
      <Hero {...pageData} />
      {/* update basic card to ame image work  */}
      {pageData.basicCardSection &&
        pageData.basicCardSection.map((card) => {
          return <BasicCard key={card.id} {...card} />
        })}
      <TextBanner
        subgreenText={pageData.firstTextBanner.subgreenText}
        mainText={pageData.firstTextBanner?.mainText}
      />
      <div className="bg-[#FFF7E7] w-screen h-auto py-16 flex justify-center items-center gap-28 flex-wrap">
        {pageData.priceCard &&
          pageData.priceCard.map((card) => {
            return <PriceCard key={card.id} {...card} />
          })}
      </div>
      <TextBanner
        subgreenText={pageData.secondTextBanner.subgreenText}
        mainText={pageData.secondTextBanner?.mainText}
      />
      <PlantCarousel />
    </div>
  )
}

export default Page
