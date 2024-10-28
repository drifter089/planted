import React from 'react'

import { Aboutpage } from '@/payload-types'
import Image from 'next/image'

const AboutMain: React.FC<Aboutpage> = ({ mainHeading, subHeading, aboutImage }) => {
  return (
    <>
      <p className="border w-[50%] font-medium text-[6rem] leading-none">{mainHeading}</p>
      <div className="flex flex-1 flex-wrap">
        <div className="relative w-[50%] h-full">
          <Image
            src={aboutImage.url}
            alt={aboutImage.alt}
            width={aboutImage.width}
            height={aboutImage.height}
          />
        </div>
        <p className="w-[50%]">{subHeading}</p>
      </div>
    </>
  )
}

export default AboutMain
