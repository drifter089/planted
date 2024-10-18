/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Image from 'next/image'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className="relative w-[90%] h-screen border border-black">
      {/* <div className="absolute left-0 box-border block h-full bg-black">rewhgerhb</div> */}
      <div className="w-[53.8%] h-[90%] absolute right-0">
        <img
          src={'http://localhost:3000/api/media/file/heroo_image.png'}
          alt="Picture of the author"
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default Hero
