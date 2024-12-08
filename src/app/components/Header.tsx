

import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import Image from 'next/image'
import { CiShoppingCart } from 'react-icons/ci'
import { FiMenu } from 'react-icons/fi'

const Header = () => {
  return (
    <div className="w-full "> 
      {/* Top header */}
      <div className="flex bg-[#272343] max-w-screen-xl mx-auto text-white justify-between items-center px-4 py-2 sm:px-6 md:px-10">
        <h1 className="text-xs sm:text-sm lg:text-base">Free shipping on all orders over $50</h1>
        <div className="flex items-center gap-2 sm:gap-4">
          <select className="bg-[#272343] text-white border-none outline-none text-xs sm:text-sm">
            <option value="Eng">Eng</option>
          </select>
          <h2 className="hidden sm:block">Faqs</h2>
          <AiOutlineExclamationCircle className="text-lg lg:text-xl" />
          <h2 className="hidden sm:block">Need Help</h2>
        </div>
      </div>

      {/* Middle header */}
      <div className="bg-[#F0F2F3] flex justify-between items-center px-4 py-4 sm:px-6 md:px-10">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <h1 className="text-lg sm:text-xl lg:text-2xl font-medium ml-2">Comforty</h1>
        </div>
        <div className="hidden lg:flex items-center bg-white p-2 rounded shadow-sm">
          <CiShoppingCart className="text-2xl" />
          <h1 className="px-2">Cart</h1>
          <p className="h-6 w-6 flex items-center justify-center bg-[#007580] text-white text-sm rounded-full">
            2
          </p>
        </div>
        <FiMenu className="text-2xl lg:hidden" />
      </div>

      {/* Bottom header */}
      <div className="bg-white flex flex-wrap justify-between items-center px-4 py-3 sm:px-6 md:px-10">
        <ul className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm lg:text-base">
          <li>Home</li>
          <li>Shop</li>
          <li>Product</li>
          <li>Pages</li>
          <li>About</li>
        </ul>
        <h1 className="text-xs sm:text-sm lg:text-base">Contact: (808) 555-0111</h1>
      </div>
    </div>
  )
}

export default Header;
