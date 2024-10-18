import React from 'react'

interface GreenButtonProps {
  className?: string
}

const GreenButton: React.FC<GreenButtonProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex justify-center items-center w-[13.6rem] h-[5rem] gap-2.5 px-16 py-6 rounded-[10px] bg-[#066f14]">
        <p className="flex-grow-0 flex-shrink-0 text-2xl text-left text-white">get now</p>
      </div>
    </div>
  )
}

export default GreenButton
