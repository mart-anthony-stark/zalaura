"use client"

import React from 'react'
import { products } from '../lib/data'
import Card from './Card'
import { useRouter } from 'next/navigation'

const Cards = () => {
  const router = useRouter()
  return (
    <div className="flex gap-2 justify-center p-2">
        {products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            brand={product.brand}
            description={product.description}
            image={product.image}
            price={product.price}
            rate={product.rate}
            slug={product.slug}
            onClick={()=> router.push(`/products/${product.slug}`)}
          />
        ))}
      </div>
  )
}

export default Cards