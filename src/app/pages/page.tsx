"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Product } from '../../../types/product'

const Checkout = () => {
  const router = useRouter();  // Use useRouter directly at the top of the component
  const [cartitems, setCartitems] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    // Get the cart items from local storage or context
    const savedItems = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartitems(savedItems);
    const totalAmount = savedItems.reduce((acc: number, item: Product) => acc + item.price * item.inventory, 0);
    setTotal(totalAmount);
  }, []);  // Empty dependency array means this runs only once after mount

  const handlePlaceOrder = () => {
    // Proceed with the order placement logic (payment gateway integration here)
    alert('Order placed successfully!');
    // Optionally clear cart after order placement:
    localStorage.removeItem('cartItems');
    router.push('/order-confirmation');  // Redirect to confirmation page
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

      <div className="shadow-lg rounded-lg p-6 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Review Your Order</h2>

        {cartitems.length === 0 ? (
          <p className="text-center text-xl">Your cart is empty.</p>
        ) : (
          <div>
            <div className="space-y-4">
              {cartitems.map((item) => (
                <div key={item._id} className="flex justify-between items-center border-b pb-4">
                  <div className="flex items-center">
                    <Image src={item.imageUrl} alt={item.title} width={80} height={80} />
                    <p className="ml-4">{item.title}</p>
                  </div>
                  <p className="font-bold">${item.price} x {item.inventory}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-bold">Total:</span>
              <span className="text-xl text-green-600">${total.toFixed(2)}</span>
            </div>
          </div>
        )}

        {/* Checkout Button */}
        <button
          onClick={handlePlaceOrder}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 shadow-lg"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;


