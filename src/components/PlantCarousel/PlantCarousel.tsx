import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import GreenButton from '../GreenButton/GreenButton'
import Image from 'next/image'
import plantpot from '../../../public/images/single-pot.png'

export function PlantCarousel() {
  return (
    <Carousel
      opts={{
        align: 'center',
      }}
      className="w-[85vw]"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="flex flex-col aspect-square items-center justify-center gap-12 p-6">
                <Image src={plantpot} width={700} height={800} alt="qwe3efgqwef" />
                <GreenButton />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
