import BasicCard from '@/components/BasicCard/BasicCard'
import Hero from '@/components/Hero/Hero'
import { PlantCarousel } from '@/components/PlantCarousel/PlantCarousel'
import PriceCardSection from '@/components/PricecardSection/PriceCardSection'
import TextBanner from '@/components/TextBanner/TextBanner'
import React from 'react'

const page = () => {
  return (
    <div className="w-[screen] overflow-hidden flex flex-col justify-center items-center align-middle box-border mt-4 gap-11 md:gap-20 2xl:gap-24">
      <Hero />
      <BasicCard />
      <BasicCard reverse={true} />
      <TextBanner subGreenText={'our plants'} mainText={'plants that survive'} />
      <PriceCardSection />
      <TextBanner subGreenText={'our seeds'} mainText={'choose from 40+ seeds'} />
      <PlantCarousel />
    </div>
  )
}

export default page
