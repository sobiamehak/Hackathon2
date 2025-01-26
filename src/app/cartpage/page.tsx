


"use client"
import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/product'
import { getItem } from '../action/action'
import Image from 'next/image'
const Cartpage = () => {
  const [cartitems, setCartitems] = useState<Product[]>([])

  useEffect(() => {
    setCartitems(getItem())
  }, [])

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      {cartitems.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartitems.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={item.imageUrl } // Assuming you have an image field in the product
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg mb-4" width={300} height={400}
              />
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>

              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">
                  ${item.price}
                </span>
                <button className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-200">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Cartpage


