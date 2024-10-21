import React from 'react'
import { PriceCard } from './PriceCard/PriceCard'

const PriceCardSection = () => {
  return (
    <div className="bg-[#FFF7E7] w-screen h-auto py-16 flex justify-center items-center gap-28 flex-wrap">
      <PriceCard
        quantityOne={5}
        productOne={'Seeds'}
        quantityTwo={2}
        productTwo={'Fertilizer'}
        priceMain={10}
        priceSuper={95}
        duration="month"
      />
      <PriceCard
        quantityOne={10}
        productOne={'Seeds'}
        quantityTwo={5}
        productTwo={'Fertilizer'}
        priceMain={15}
        priceSuper={95}
        duration="month"
      />
    </div>
  )
}

export default PriceCardSection
