/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Image from 'next/image'
import mainplant from '../../../public/images/main-plant.png'
import OverveiwWiget from './OverveiwWiget'
import MainHeader from './MainHeader'
import { Button } from '../ui/button'
import GreenButton from '../GreenButton/GreenButton'

const Hero = () => {
  return (
    <div className="relative flex justify-between flex-1 flex-wrap items-center w-[90%]">
      <div className="box-border flex flex-col gap-20 w-1/2 min-w-[50%]">
        <MainHeader />
        <GreenButton />
        <OverveiwWiget />
      </div>
      <div className="relative w-1/2 min-w-[50%]">
        <Image
          src={mainplant}
          alt="Picture of the author"
          className="object-cover"
          placeholder="blur"
          quality={100}
          sizes="30vw"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  )
}

export default Hero
