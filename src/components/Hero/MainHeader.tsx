import React from 'react'

const MainHeader = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-8">
      <p className="text-6xl md:text-8xl font-medium w-full break-words">
        {/* <span className="inline-block">Bring</span>
        <span className="text-[#066f14] inline-block"> Nature</span>
        <span className="inline-block">and life into your </span>
        <span className="text-[#066f14] inline-block">Home</span> */}
        Bring Nature and Life Into Your Home
      </p>
      <p className="w-full text-2xl md:text-4xl text-black/60">
        Discover beautiful, low-maintenance house plant seeds that breathe life into your space —
        delivered straight to your door.
      </p>
    </div>
  )
}

export default MainHeader
