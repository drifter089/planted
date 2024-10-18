import React from 'react'
import GreenButton from '@/components/GreenButton/GreenButton'
import RateSuperText from './RateSuperText'
import CardItems from './CardItems'
import PlanHeader from './PlanHeader'

type PriceCardType = {
  quantityOne: number
  productOne: string
  quantityTwo: number
  productTwo: string
  priceMain: number
  priceSuper: number
  duration: string
}

export const PriceCard: React.FC<PriceCardType> = ({
  quantityOne,
  productOne,
  quantityTwo,
  productTwo,
  priceMain,
  priceSuper,
  duration,
}) => {
  return (
    <div
      className="flex flex-col gap-4 w-96 h-[40rem]  items-center rounded-[10px] bg-white"
      style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
    >
      <PlanHeader heading="Starter Plan" />
      <div className="flex flex-col gap-8 items-start">
        <div className="h-[38px] text-black/60 text-[32px] font-medium font-['Nunito']">
          What You’ll get
        </div>
        <CardItems quantity={quantityOne} product={productOne} />
        <CardItems quantity={quantityTwo} product={productTwo} />
        <RateSuperText priceMain={priceMain} priceSuper={priceSuper} duration={duration} />
      </div>
      <GreenButton className="ml-4" />
    </div>
  )
}
