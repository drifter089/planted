import React from 'react'

type type = {
  text: string
}

const GreenBanner: React.FC<type> = ({ text }) => {
  return <div className="bg-green-800 p-10">{text}</div>
}

export default GreenBanner
