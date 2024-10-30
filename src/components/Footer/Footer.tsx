import React from 'react'
import Image from 'next/image'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Media } from '@/payload-types'

async function Footer() {
  const payload = await getPayloadHMR({ config: configPromise })
  const pageData = await payload.find({
    collection: 'media',
    depth: 5,
    where: {
      filename: {
        equals: 'logo.png',
      },
    },
  })

  console.log('pageData', pageData.docs[0])

  const cardImage = pageData.docs[0] as Media | any

  return (
    <div className="flex flex-col gap-3 justify-center items-center  box-border">
      <div className={'relative h-[20vh]'}>
        <Image
          src={cardImage.url}
          alt={cardImage.alt}
          width={cardImage.width}
          height={cardImage.height}
        />
      </div>
      <p className="text-[2rem] font-medium">Subs to our news yo !!!</p>
    </div>
  )
}

export default Footer
