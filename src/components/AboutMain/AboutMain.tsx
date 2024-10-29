import React from 'react'

import { Aboutpage } from '@/payload-types'
import Image from 'next/image'

const AboutMain: React.FC<Aboutpage> = ({ mainHeading, subHeading, aboutImage }) => {
  return (
    <>
      <p className="w-[90%] md:w-[85%] xl:w-[80%] font-medium  text-[4rem] md:text-[6rem] leading-none">
        {mainHeading}
      </p>
      <div className="flex flex-1 flex-wrap w-[90%] md:w-[85%] xl:w-[80%] lg:flex-nowrap gap-5">
        <p className="w-[100%] lg:w-[50%] lg:order-2">{subHeading}</p>
        <div className="relative w-[100%] lg:w-[50%] h-full md:order-1">
          <Image
            src={aboutImage.url}
            alt={aboutImage.alt}
            width={aboutImage.width}
            height={aboutImage.height}
          />
        </div>
      </div>
    </>
  )
}

export default AboutMain
