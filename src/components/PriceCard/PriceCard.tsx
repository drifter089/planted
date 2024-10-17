import React from 'react'
import RateSuperText from './RateSuperText'
import GreenButton from '../GreenButton/GreenButton'
import CardItems from './CardItems'
import PlanHeader from './PlanHeader'

export const PriceCard = () => {
  return (
    <div
      className="flex flex-col gap-4 w-96 h-[40rem]  items-center rounded-[10px]"
      style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
    >
      <PlanHeader heading="Starter Plan" />
      <div className="flex flex-col gap-8 items-start">
        <div className="h-[38px] text-black/60 text-[32px] font-medium font-['Nunito']">
          What You’ll get
        </div>
        <CardItems quantity={5} product={'Seeds'} />
        <CardItems quantity={2} product={'Fertilizer'} />
        <RateSuperText />
      </div>
      <GreenButton />
    </div>
  )
}
