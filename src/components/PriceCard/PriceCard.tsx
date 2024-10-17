import React from 'react'
import RateSuperText from './RateSuperText'
import GreenButton from '../GreenButton/GreenButton'
import CardItems from './CardItems'
import PlanHeader from './PlanHeader'

export const PriceCard = () => {
  return (
    <div className="w-96 h-[40rem] border border-black items-center">
      <PlanHeader heading="Starter Plan" />
      <div className="flex flex-col ">
        <CardItems quantity={5} product={'Seeds'} />
        <CardItems quantity={2} product={'Fertilizer'} />
        <RateSuperText />
      </div>
      <GreenButton />
    </div>
  )
}
