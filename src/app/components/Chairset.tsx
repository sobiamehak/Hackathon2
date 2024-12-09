


import React from 'react'
import Image from 'next/image'
import { CiShoppingCart } from 'react-icons/ci'

const Chairset = () => {
  return (
    <div className='w-full px-4 sm:px-8 md:px-12'>
      {/* Logos Section */}
      <div className="flex flex-wrap justify-between items-center mt-8">
        <Image src="/Logo1.svg" alt="logo 1" width={100} height={90} />
        <Image src="/Logo2.svg" alt="logo 2" width={107} height={109} />
        <Image src="/Logo3.svg" alt="logo 3" width={135} height={139} />
        <Image src="/logo4.svg" alt="logo 4" width={63} height={65} />
        <Image src="/Logo5.svg" alt="logo 5" width={98} height={101} />
        <Image src="/Logo6.svg" alt="logo 6" width={113} height={115} />
        <Image src="/Logo7.svg" alt="logo 7" width={84} height={87}  />
      </div>

      {/* Card Section */}
      <div className="mt-8 ">
        <h1 className="font-semibold text-[#272343] text-center sm:text-left">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {/* Chair 1 */}
          <div className="h-[377px] w-full max-w-[312px] mx-auto">
            <Image src="/Image1.svg" alt="Library Stool Chair" height={312} width={312} />
            <h1 className="flex text-[#007580] pt-4 pl-4">
              Library Stool Chair
              <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#007580] text-white" />
            </h1>
            <h2 className="font-semibold pl-4">$20</h2>
          </div>
          {/* Chair 2 */}
          <div className="h-[377px] w-full max-w-[312px] mx-auto">
            <Image src="/Image2.svg" alt="Chair 2" height={312} width={312} />
            <h1 className="flex text-black hover:text-[#007580] pt-4 pl-4">
              <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#F0F2F3] text-black hover:bg-[#007580]" />
            </h1>
            <h2 className="font-semibold pl-4">$20</h2>
          </div>
          {/* Chair 3 */}
          <div className="h-[377px] w-full max-w-[312px] mx-auto">
            <Image src="/Image3.svg" alt="Library Stool Chair" height={312} width={312} />
            <h1 className="flex text-black hover:text-[#007580] pt-4 pl-4">
              Library Stool Chair
              <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#F0F2F3] text-black hover:bg-[#007580]" />
            </h1>
            <h2 className="font-semibold pl-4">$20</h2>
          </div>
          {/* Chair 4 */}
          <div className="h-[377px] w-full max-w-[312px] mx-auto">
            <Image src="/Image4.svg" alt="Library Stool Chair" height={312} width={312} />
            <h1 className="flex text-black hover:text-[#007580] pt-4 pl-4">
              Library Stool Chair
              <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#F0F2F3] text-black hover:bg-[#007580]" />
            </h1>
            <h2 className="font-semibold pl-4">$20</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chairset;
