/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Image from 'next/image'
// import OverveiwWiget from './OverveiwWiget'
import MainHeader from './MainHeader'
import { Button } from '../ui/button'
import GreenButton from '../GreenButton/GreenButton'

import { Media } from 'src/payload-types'

import type { Homepage as HomePageProps } from '@/payload-types'

// type Global = keyof Config['globals']

async function Hero(props: HomePageProps): Promise<React.ReactElement> {
  const imgData: Media | any = props.heroImage

  return (
    <div className="relative flex flex-col items-center justify-center w-[95%] gap-10 md:w-[80%] lg:gap-0 lg:flex-row lg:justify-between lg:items-stretch lg:w-[80%] xl:justify-center 2xl:w-[70%]">
      <div className="box-border flex flex-col gap-10 w-full justify-center items-center lg:gap-20 lg:w-[50%] lg:items-start z-10">
        <MainHeader heading={props.mainHeading} subheading={props.subHeading} />
        {/* <Button variant={'green'} size={'lg'}>
          get seeds
        </Button> */}
        <GreenButton />
        {/* <OverveiwWiget overVeiwData={props.overveiwWidget} /> */}
      </div>
      <div className="relative w-[80vw] h-[20rem] md:h-[50rem] lg:w-[50%] lg:h-[60rem] ">
        <Image
          src={imgData.url || ''}
          alt={imgData.alt || 'my alt data'}
          className="object-contain m:w-full h-[100%]"
          // placeholder="blur"
          quality={100}
          fill
          sizes="80vw"
        />
      </div>
    </div>
  )
}

export default Hero
