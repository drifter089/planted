import BasicCard from '@/components/BasicCard/BasicCard'
import Hero from '@/components/Hero/Hero'
import PriceCardSection from '@/components/PricecardSection/PriceCardSection'
import TextBanner from '@/components/TextBanner/TextBanner'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col w-screen justify-center items-center align-middle box-border mt-20 gap-20  mb-36 pb-80 overflow-hidden">
      <Hero />
      <BasicCard />
      <BasicCard reverse={true} />
      <TextBanner subGreenText={'our plans'} mainText={'plants that survive'} />
      <PriceCardSection />
      <TextBanner subGreenText={'our seeds'} mainText={'choose from 40+ seeds'} />
    </div>
  )
}

export default page
