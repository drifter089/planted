import React from 'react'
import { BlogPara as BlogParaType } from '@/payload-types'

const BlogPara: React.FC<BlogParaType> = ({ paraHeading, paraText }) => {
  return (
    <>
      <h2 className="pb-2 border-b-2 text-[2.25rem] font-bold leading-tight">{paraHeading}</h2>
      <p className="mb-8 text-[1.5rem] font-normal leading-8 text-[rgba(0,0,0,0.6)]">{paraText}</p>
    </>
  )
}

export default BlogPara
