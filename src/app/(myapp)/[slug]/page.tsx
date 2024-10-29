import type { Metadata } from 'next'

import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React, { cache } from 'react'

import type { Blogpage as PageType } from '../../../payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import { notFound } from 'next/navigation'
import BlogPara from '@/blocks/BlogPara/BlogPara'
import BlogHero from './components/BlogHero'

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const parsedSlug = decodeURIComponent(slug)

  const payload = await getPayloadHMR({ config })

  const result = await payload.find({
    collection: 'blogpages',
    limit: 1000,
    where: {
      slug: {
        equals: parsedSlug,
      },
    },
  })

  return result.docs?.[0] || null
})

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config })
  const pages = await payload.find({
    collection: 'blogpages',
    draft: false,
    limit: 1000,
  })

  return pages.docs?.map(({ slug }) => slug)
}

export default async function Page({ params: { slug = 'index' } }) {
  let page: PageType | null

  page = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return notFound()
  }

  console.log('page', page)

  return (
    <>
      <BlogHero
        heroImage={page.heroImage}
        mainheading={page.mainHeading}
        subheading={page.subHeading}
      />
      {page.layout &&
        page.layout.map((block) => {
          return <BlogPara key={block.id} {...block} />
        })}
    </>
  )
}
