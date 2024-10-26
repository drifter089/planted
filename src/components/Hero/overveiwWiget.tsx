import React from 'react'

// define a typr value number and achivement string and pass it to the OverveiwWiget component

type OverveiwWigetProps = {
  value: number
  achivement: string
  id: string
}

const OverveiwWiget = (props: [OverveiwWigetProps] | any) => {
  ;<div className="flex flex-col justify-start items-start">
    <p className="text-3xl md:text-5xl font-bold text-left ">2000+</p>
    <p className="text-xl md:text-2xl text-left">orders</p>
  </div>

  return (
    <div className="flex justify-start items-center gap-12">
      {props.overVeiwData.map((item: OverveiwWigetProps) => (
        <>
          <div className="flex flex-col justify-start items-start" key={item.id}>
            <p className="text-3xl md:text-5xl font-bold text-left ">{item.value}+</p>
            <p className="text-xl md:text-2xl text-left">{item.achivement}</p>
          </div>
        </>
      ))}
    </div>
  )
}

export default OverveiwWiget
