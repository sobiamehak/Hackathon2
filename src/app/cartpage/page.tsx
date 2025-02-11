
"use client"
import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/product'
import { getItem } from '../action/action'
import Image from 'next/image'
import Link from 'next/link'
import { removefrmcart } from '../action/action'
import { FaTrash } from 'react-icons/fa'

const Cartpage = () => {
  const [cartitems, setCartitems] = useState<Product[]>([])

  const total: number = cartitems.reduce((prev, curre) => prev + curre.price * curre.inventory, 0)

  useEffect(() => {
    setCartitems(getItem())
  }, [])

  const handleRemoveFromCart = (productId: string) => {
    removefrmcart(productId) // Remove item from localStorage
    setCartitems(getItem()) // Update state after removal
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      {cartitems.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty.</p>
      ) : (
        <>
          <div className="hidden md:block shadow-lg rounded-lg overflow-hidden font-sans">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-center">
                  <th className="py-3 px-4 border-b">Name</th>
                  <th className="py-3 px-4 border-b">Price</th>
                  <th className="py-3 px-4 border-b">Quantity</th>
                  <th className="py-3 px-4 border-b text-left">Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {cartitems.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50">
                    <td className="py-3 flex max-w-44 mx-auto item-center gap-5">
                      <Image
                        className="object-cover rounded w-[60px] h-[60px]"
                        src={item.imageUrl} width={60} height={60} alt="product"
                      />
                      <p className="text-start w-[100px]">{item.title}</p>
                    </td>
                    <td className="h-[50px] py-3 px-4">{`$${item.price}`}</td>
                    <td className="py-3 px-4 flex items-center justify-center space-x-2 h-[50px]">
                      <span>{item.inventory}</span>
                    </td>
                    <td className="py-3 px-4 text-left">
                      <button
                        onClick={() => handleRemoveFromCart(item._id)}
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-200 shadow-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Total Summary</h2>
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-600">Total Price:</span>
                <span className="text-2xl font-bold text-green-600">${total.toFixed(2)}</span>
              </div>
              <Link href={"/form"}>
                <button
                  className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 shadow-lg"
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>

          <div className="md:hidden space-y-4">
            {cartitems.map((item) => (
              <div key={item._id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-md flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center mb-2 sm:mb-0">
                  <Image src={item.imageUrl} alt={item.title} height={100} width={100} className="mr-4" />
                  <div>
                    <div className="font-bold text-gray-700">Name: {item.title}</div>
                    <div className="font-bold text-gray-700">Price: ${item.price}</div>
                  </div>
                </div>

                <div className="flex sm:flex-row items-center space-x-4 mt-2 sm:mt-0">
                  <div className="font-bold text-gray-700">Quantity: {item.inventory}</div>
                  <button
                    onClick={() => handleRemoveFromCart(item._id)}
                    className="text-black py-1 px-3 rounded hover:bg-red-600 transition duration-200 shadow-sm mt-2 sm:mt-0 flex items-center space-x-2"
                  >
                    <FaTrash className="mb-2 text-2xl" />
                    <span className="hidden sm:inline">Remove</span>
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-6 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Total Summary</h2>
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-600">Total Price:</span>
                <span className="text-2xl font-bold text-green-600">${total.toFixed(2)}</span>
              </div>
              <Link href={"/form"}>
                <button
                  className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 shadow-lg"
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cartpage

