import type { BasicCard as BasicCardProps } from '@/payload-types'

import { cn } from 'src/utilities/cn'
import React from 'react'

import Image from 'next/image'
import mainplant from '../../../public/images/basic-card.png'

const BasicCard: React.FC<BasicCardProps> = ({ heading, subheading, reverse, cardImage }) => {
  // make image work and adjust css
  return (
    <div
      className={`flex flex-1 flex-wrap rounded-[10px] w-[95%] md:w-[67%] lg:w-[80%] 2xl:w-[70%] items-stretch ${
        reverse ? 'flex-row-reverse' : ''
      }`}
      style={{ boxShadow: '0px 4px 4px 0 rgba(0,0,0,0.25)' }}
    >
      <div className="box-border flex-1 min-h-96 flex items-center justify-center lg:w-1/2">
        <div className="box-border px-9 md:p-20 text-left">
          <p className="text-4xl md:text-5xl font-bold text-left mb-5  md:mb-12">{heading}</p>
          <p className="text-2xl md:text-4xl text-left text-black/60">{subheading}</p>
        </div>
      </div>
      <div className="relative md:w-full  lg:w-1/2">
        {typeof cardImage !== 'string' && cardImage.url && (
          <Image
            src={mainplant}
            // src={cardImage.url || mainplant}
            alt="Picture of the author"
            className="object-contain md:w-full"
            placeholder="blur"
            quality={100}
            sizes="80vw"
          />
        )}
      </div>
    </div>
  )
}

export default BasicCard
