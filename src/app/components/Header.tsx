

"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import Image from 'next/image'
import { CiShoppingCart } from 'react-icons/ci'
import { FiMenu } from 'react-icons/fi'
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { getItem } from '../action/action'
import { Product } from '../../../types/product'

const Header = () => {
  const [cartitems, setCartitems] = useState<Product[]>([])

  const quantity = cartitems.length > 0 ? cartitems.reduce((total, item) => total + item.inventory, 0) : 0

  useEffect(() => {
    setCartitems(getItem())
  }, [])

  return (
    <div className="w-full"> 
      {/* Top header */}
      <div className="flex bg-[#272343] max-w-screen-xl mx-auto text-white justify-between items-center px-4 py-2">
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
      <div className="bg-[#F0F2F3] lg:block flex items-center px-4 py-4 sm:px-6 md:px-10">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-medium ml-2">Comforty</h1>
            <Link href={"/cartpage"}>
                    <div className="flex  my-2 rounded shadow-sm justify-center items-center ml-10 px-2 md:hidden sm:ml-[300px]">
                      <CiShoppingCart className="text-5xl px-2 font-bold" />
                      <p className="h-6 w-6 flex items-center justify-center bg-[#007580] text-white text-sm rounded-full">
                        {quantity}
                      </p>
                    </div>
                  </Link>
          </div>

          <Link href={"/cartpage"}>
            <div className="hidden lg:flex bg-white p-2 rounded shadow-sm"> 
              <CiShoppingCart className="text-2xl" />
              <h1 className="px-2">Cart</h1>
              <p className="h-6 w-6 flex items-center justify-center bg-[#007580] text-white text-sm rounded-full">
                {quantity}
              </p>
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Menu Trigger */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <div className="ml-auto">
              <FiMenu className="text-2xl" />
            </div>
          </SheetTrigger>

          <SheetContent className="bg-white">
            <SheetHeader>
              <nav className="flex flex-col justify-start items-start">
                <ul>
                  {/* <Link href={"/cartpage"}>
                    <div className="flex bg-white my-2 rounded shadow-sm justify-center items-center px-2">
                      <CiShoppingCart className="text-6xl px-2" />
                      <p className="h-6 w-6 flex items-center justify-center bg-[#007580] text-white text-sm rounded-full">
                        {quantity}
                      </p>
                    </div>
                  </Link> */}
                  <li><Link href="/">Home</Link></li>
                  <br />
                  <li><Link href="/allproducts">Shop</Link></li>
                  <br />
                  <li><Link href="/product">Product</Link></li>
                  <br />
                  <li><Link href="/contact">Contact</Link></li>
                  <br />
                  <li>About</li>
                </ul>
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Bottom header (Desktop Menu) */}
      <div className="md:block hidden bg-white lg:flex flex-wrap justify-between items-center px-4 py-3 sm:px-6 md:px-10">
        <ul className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm lg:text-base">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/allproducts">Shop</Link></li>
          <li><Link href="/product">Product</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
        <h1 className="text-xs sm:text-sm lg:text-base">Contact: (808) 555-0111</h1>
      </div>
    </div>
  )
}

export default Header;
