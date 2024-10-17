import BasicCard from '@/components/BasicCard/BasicCard'
import Hero from '@/components/Hero/Hero'
import { PriceCard } from '@/components/PriceCard/PriceCard'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center align-middle box-border mt-20 gap-20  border border-black mb-36 pb-80">
      <Hero />
      <BasicCard />
      <BasicCard reverse={true} />
      <PriceCard />
    </div>
  )
}

export default page
