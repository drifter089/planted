import React from 'react'
import { AboutCard as AboutCardType } from '@/payload-types'
import Image from 'next/image'
import { Media } from '@/payload-types'

const AboutCard: React.FC<AboutCardType> = ({ cardImage, cardText, reverse }) => {
  return (
    <div
      className={`border-t-2 pt-2 md:pt-4 lg:pt-8 flex flex-wrap lg:flex-nowrap w-[90%] md:w-[85%] xl:w-[70%] gap-5`}
    >
      <p className={`w-full lg:w-[50%] ${reverse ? 'lg:order-2' : 'order-1'}`}>{cardText}</p>
      <div
        className={`relative w-full lg:w-[50%] h-full ${reverse ? 'order-1 lg:order-1' : 'order-2'}`}
      >
        <Image
          src={cardImage.url}
          alt={cardImage.alt}
          width={cardImage.width}
          height={cardImage.height}
        />
      </div>
    </div>
  )
}

export default AboutCard
