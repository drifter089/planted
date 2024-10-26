import React from 'react'
import { Homepage } from '@/payload-types'

const TextBanner: React.FC<Homepage> = ({ firstTextBanner }) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen gap-6">
      <p className="text-[1.5rem] md:text-[2rem] font-medium text-center text-[#066f14]">
        {firstTextBanner?.subgreenText}
      </p>
      <p className="w-[90%] text-[3rem] md:w-[50%] md:text-[4rem] font-bold text-center text-[#1c1b1f] leading-tight">
        {firstTextBanner?.mainText}
      </p>
    </div>
  )
}

export default TextBanner
