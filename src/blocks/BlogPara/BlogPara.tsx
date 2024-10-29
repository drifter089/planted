import React from 'react'
import { BlogPara as BlogParaType } from '@/payload-types'

const BlogPara: React.FC<BlogParaType> = ({ paraHeading, paraText }) => {
  return (
    <>
      <div>{paraHeading}</div>
      <div>{paraText}</div>
    </>
  )
}

export default BlogPara
