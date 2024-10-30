import React from 'react'

type type = {
  text: string
}

const GreenBanner: React.FC<type> = ({ text }) => {
  return <p className="bg-[#066F14] text-white p-5 md:p-10 lg:p-20 text-center">{text}</p>
}

export default GreenBanner
