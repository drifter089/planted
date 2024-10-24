import React from 'react'

type textBannerType = {
  subGreenText: string
  mainText: string
}

const TextBanner: React.FC<textBannerType> = ({ subGreenText, mainText }) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen gap-6">
      <p className="text-[1.5rem] md:text-[2rem] font-medium text-center text-[#066f14]">
        {subGreenText}
      </p>
      <p className="w-[90%] text-[3rem] md:w-[50%] md:text-[4rem] font-bold text-center text-[#1c1b1f] leading-tight">
        {mainText}
      </p>
    </div>
  )
}

export default TextBanner
