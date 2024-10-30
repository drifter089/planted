import React from 'react'

// define a typr value number and achivement string and pass it to the OverveiwWiget component

type OverveiwWigetProps = {
  value: number
  achivement: string
  id: string
}

export default function OverveiwWiget(props: [OverveiwWigetProps] | any) {
  return (
    <div className="flex justify-center items-center gap-12">
      {props.overVeiwData.map((item: OverveiwWigetProps) => (
        <>
          <div className="flex flex-col justify-start items-start" key={item.id}>
            <p className="text-2xl md:text-5xl font-bold text-left ">{item.value}+</p>
            <p className="text-[0.8rem] md:text-2xl text-left">{item.achivement}</p>
          </div>
        </>
      ))}
    </div>
  )
}
