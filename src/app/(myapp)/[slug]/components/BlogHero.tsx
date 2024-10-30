import React from 'react'
import { Media } from '@/payload-types'
import Image from 'next/image'

type BlogHeroType = {
  heroImage: Media | any
  mainheading: string
  subheading: string
}

const BlogHero: React.FC<BlogHeroType> = ({ heroImage, mainheading, subheading }) => {
  return (
    <>
      <h1 className="text-[4rem] font-medium">Blog</h1>
      <div className="flex flex-wrap gap-2 lg:flex-nowrap border-t-2 mb-8 ">
        <div className="relative w-[100%] md:w-[80%] lg:w-[50%]  h-full mt-6">
          {heroImage.url && heroImage.alt && heroImage.width && heroImage.height && (
            <Image
              src={heroImage.url}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
            />
          )}
        </div>
        <div className="w-[100%] md:w-[80%] lg:w-[50%]">
          <p className="my-6 text-[2.25rem] font-bold leading-tight">{mainheading}</p>
          <p>{subheading}</p>
        </div>
      </div>
    </>
  )
}

export default BlogHero
