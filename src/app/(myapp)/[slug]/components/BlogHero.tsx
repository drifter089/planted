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
      <div>Blog</div>
      <div>{mainheading}</div>
      <div>{subheading}</div>
      <div className="relative w-[50%] h-full">
        {heroImage.url && heroImage.alt && heroImage.width && heroImage.height && (
          <Image
            src={heroImage.url}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
          />
        )}
      </div>
    </>
  )
}

export default BlogHero
