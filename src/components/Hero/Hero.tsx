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
    <div className="relative flex flex-col items-center justify-center w-[95%] gap-10 md:w-[80%] lg:gap-0 lg:flex-row lg:justify-between lg:items-center lg:w-[80%] xl:justify-center 2xl:w-[70%]">
      <div className="box-border flex flex-col gap-10 w-full justify-center items-center lg:gap-20 lg:w-[50%] lg:items-start z-10">
        <MainHeader />
        <GreenButton />
        <OverveiwWiget />
      </div>
      <div className="relative w-[80vw] lg:w-[50%] xl:w-auto lg:translate-x-[-8%]">
        <Image
          src={mainplant}
          alt="Picture of the author"
          className="object-cover"
          placeholder="blur"
          quality={100}
          sizes="25vw"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  )
}

export default Hero
