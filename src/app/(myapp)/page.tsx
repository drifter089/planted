import BasicCard from '@/blocks/BasicCard/BasicCard'
import Hero from '@/components/Hero/Hero'
import { PlantCarousel } from '@/components/PlantCarousel/PlantCarousel'
import PriceCardSection from '@/components/PricecardSection/PriceCardSection'
import TextBanner from '@/components/TextBanner/TextBanner'
import React from 'react'

import type { Config } from 'src/payload-types'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

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
          console.log('card', card)
          return <BasicCard key={card.id} {...card} />
        })}
      <TextBanner subGreenText={'our plants'} mainText={'plants that survive'} />
      <PriceCardSection />
      <TextBanner subGreenText={'our seeds'} mainText={'choose from 40+ seeds'} />
      <PlantCarousel />
    </div>
  )
}

export default Page
