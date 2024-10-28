import React from 'react'
import { AboutCard as AboutCardType } from '@/payload-types'
import Image from 'next/image'
import { Media } from '@/payload-types'

const AboutCard: React.FC<AboutCardType> = ({ cardImage, cardText }) => {
  return (
    <div>
      <p>{cardText}</p>
      <div className="relative w-[50%] h-full">
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
