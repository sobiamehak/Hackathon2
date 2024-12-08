
import React from 'react'
import Image from 'next/image'
import { CiShoppingCart } from 'react-icons/ci'

const Products = () => {
  return (
    <div>
      {/* Card section 1 */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-semibold text-[#272343] text-lg sm:text-xl lg:text-2xl md:pl-20 lg:pl-80">Featured Products</h1>
        <div className="flex flex-wrap justify-start items-center w-full p-4 gap-4 lg:gap-6">
          {/* chair1 */}
          <div className="h-[377px] w-full sm:w-[48%] md:w-[48%] lg:w-[23%]">
            <Image src="/Image1.svg" alt="" height={312} width={312} />
            <h1 className="flex text-[#007580] pt-4 pl-4">
              Library Stool Chair
              <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#007580] text-white" />
            </h1>
            <h2 className="font-semibold pl-4">$20</h2>
          </div>
          {/* chair2 */}
          <div className="h-[377px] w-full sm:w-[48%] md:w-[48%] lg:w-[23%]">
            <Image src="/Image2.svg" alt="" height={312} width={312} />
            <h1 className="flex text-black hover:text-[#007580] pt-4 pl-4">
              <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#F0F2F3] text-black hover:bg-[#007580]" />
            </h1>
            <h2 className="font-semibold pl-4">$20</h2>
          </div>
          {/* chair3 */}
          <div className="h-[377px] w-full sm:w-[48%] md:w-[48%] lg:w-[23%]">
            <Image src="/Image3.svg" alt="" height={312} width={312} />
            <h1 className="flex text-black hover:text-[#007580] pt-4 pl-4">
              Library Stool Chair
              <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#F0F2F3] text-black hover:bg-[#007580]" />
            </h1>
            <h2 className="font-semibold pl-4">$20</h2>
          </div>
          {/* chair4 */}
          <div className="h-[377px] w-full sm:w-[48%] md:w-[48%] lg:w-[23%]">
            <Image src="/Image4.svg" alt="" height={312} width={312} />
            <h1 className="flex text-black hover:text-[#007580] pt-4 pl-4">
              Library Stool Chair
              <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#F0F2F3] text-black hover:bg-[#007580]" />
            </h1>
            <h2 className="font-semibold pl-4">$20</h2>
          </div>
        </div>
      </div>

      {/* Card section 2 */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-start items-center w-full p-4 gap-4 lg:gap-6">
          {/* chair5 */}
          <div className="h-[377px] w-full sm:w-[48%] md:w-[48%] lg:w-[23%]">
            <Image src="/image5.svg" alt="" height={312} width={312} />
            <h1 className="flex text-[#007580] pt-4 pl-4">
              Library Stool Chair
              <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#007580] text-white" />
            </h1>
            <h2 className="font-semibold pl-4">$20</h2>
          </div>
          {/* chair6 */}
          <div className="h-[377px] w-full sm:w-[48%] md:w-[48%] lg:w-[23%]">
            <Image src="/Image6.svg" alt="" height={312} width={312} />
            <h1 className="flex text-black hover:text-[#007580] pt-4 pl-4">
              <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#F0F2F3] text-black hover:bg-[#007580]" />
            </h1>
            <h2 className="font-semibold pl-4">$20</h2>
          </div>
          {/* chair7 */}
          <div className="h-[377px] w-full sm:w-[48%] md:w-[48%] lg:w-[23%]">
            <Image src="/image7.png" alt="" height={312} width={312} />
            <h1 className="flex text-black hover:text-[#007580] pt-4 pl-4">
              Library Stool Chair
              <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#F0F2F3] text-black hover:bg-[#007580]" />
            </h1>
            <h2 className="font-semibold pl-4">$20</h2>
          </div>
          {/* chair8 */}
          <div className="h-[377px] w-full sm:w-[48%] md:w-[48%] lg:w-[23%]">
            <Image src="/image8.svg" alt="" height={312} width={312} />
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
}

export default Products;

