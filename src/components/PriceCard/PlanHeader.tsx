import React from 'react'

interface PlanHeaderType {
  heading: string
}

const PlanHeader: React.FC<PlanHeaderType> = ({ heading }) => {
  return (
    <div className="inline-flex h-32 w-full justify-center align-middle items-center border-b-[1px] border-black text-5xl font-bold">
      {heading}
    </div>
  )
}

export default PlanHeader
