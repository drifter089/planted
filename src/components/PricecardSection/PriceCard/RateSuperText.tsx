import React from 'react'

interface RateSuperTextType {
  priceMain: number
  priceSuper: number
  duration: string
}

const RateSuperText: React.FC<RateSuperTextType> = ({ priceMain, priceSuper, duration }) => {
  return (
    <div className="flex-grow-0 flex-shrink-0 w-[10rem] h-[8rem] relative">
      <p className="w-[7rem] h-[4rem] absolute left-0 top-[1rem] text-[4rem] font-bold text-left">
        ${priceMain}
      </p>
      <p className="w-[3.5rem] h-[3.5rem] absolute left-[7rem] top-0 text-[2.5rem] font-bold text-left">
        {priceSuper}
      </p>
      <p className="w-[10rem] h-[3rem] absolute left-[3.5rem] top-[5.5rem] text-[1.5rem] font-medium text-left text-black/60">
        /{duration}
      </p>
    </div>
  )
}

export default RateSuperText
