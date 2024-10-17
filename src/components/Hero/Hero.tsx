/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative w-[90%] h-screen/3 border border-black">
      {/* <div className="absolute left-0 box-border block h-full bg-black">rewhgerhb</div> */}
      <div className="w-[53.8%] h-[90%] relative right-0">
        <img
          src={'http://localhost:3000/api/media/file/hero_image.png'}
          alt="Picture of the author"
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default Hero
