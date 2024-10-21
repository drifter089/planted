import React from 'react'

const OverveiwWiget = () => {
  return (
    <div className="flex justify-start items-center gap-12">
      <div className="flex flex-col justify-start items-start">
        <p className="text-3xl md:text-5xl font-bold text-left ">2000+</p>
        <p className="text-xl md:text-2xl text-left">orders</p>
      </div>
      <div className="flex flex-col justify-start items-start">
        <p className="text-3xl md:text-5xl font-bold text-left ">1100+</p>
        <p className="text-xl md:text-2xl text-left">customer</p>
      </div>
      <div className="flex flex-col justify-start items-start">
        <p className="text-3xl md:text-5xl font-bold text-left ">40+</p>
        <p className="text-xl md:text-2xl text-left">seeds</p>
      </div>
    </div>
  )
}

export default OverveiwWiget
