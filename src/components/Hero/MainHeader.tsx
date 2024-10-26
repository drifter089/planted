import React from 'react'

type MainHeader = {
  heading: string
  subheading: string
}

const MainHeader = (props: MainHeader) => {
  return (
    <div className="flex flex-col justify-center items-start gap-8">
      <p className="text-6xl md:text-8xl font-medium w-full break-words">
        {/* <span className="inline-block">Bring</span>
        <span className="text-[#066f14] inline-block"> Nature</span>
        <span className="inline-block">and life into your </span>
        <span className="text-[#066f14] inline-block">Home</span> */}
        {props.heading}
      </p>
      <p className="w-full text-2xl md:text-4xl text-black/60">{props.subheading}</p>
    </div>
  )
}

export default MainHeader
