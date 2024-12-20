import React from 'react'
import { Homepage } from '@/payload-types'

type type = {
  subgreenText: string
  mainText: string
}

const TextBanner: React.FC<type | any> = ({ subgreenText, mainText }) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen gap-6">
      <p className="text-[1.5rem] md:text-[2rem] font-medium text-center text-[#066f14]">
        {subgreenText}
      </p>
      <p className="w-[90%] text-[2.75rem] md:w-[80%] md:text-[4rem] xl:w-[70%] font-bold text-center text-[#1c1b1f] leading-tight">
        {mainText}
      </p>
    </div>
  )
}

export default TextBanner
