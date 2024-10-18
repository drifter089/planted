import Image from 'next/image'
import React from 'react'
import leafsng from '../../../../public/images/leaf.svg'

interface CardItemsProps {
  quantity: number
  product: string
}

const CardItems: React.FC<CardItemsProps> = ({ quantity, product }) => {
  return (
    <div className="flex items-center gap-9">
      <div className="relative h-6 w-6">
        <Image
          alt="Mountains"
          src={leafsng}
          fill
          //   sizes="23px , 23px"
          style={{
            objectFit: 'cover', // cover, contain, none
          }}
        />
      </div>
      <p className="text-2xl font-medium leading-normal">{`${quantity}x ${product}`}</p>
    </div>
  )
}

export default CardItems
