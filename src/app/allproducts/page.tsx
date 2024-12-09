import React from 'react'
import Image from 'next/image'
import { CiShoppingCart } from 'react-icons/ci'

const Produtsall = () => {
  return (
    <div>
      

     {/* Card Section */}
     <div className="mt-8 mx-20 ">
        <h1 className="font-semibold text-[#272343] text-center sm:text-left text-3xl">
          All Products
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
            Library Stool Chair
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
            Library Stool Chair
              <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded
               bg-[#F0F2F3] text-black hover:bg-[#007580]" />
            </h1>
            Library Stool Chair
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


      {/* Card section 3 */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-start items-center w-full p-4 gap-4 lg:gap-6">
          {/* chair9 */}
          <div className="h-[377px] w-full sm:w-[48%] md:w-[48%] lg:w-[23%]">
            <Image src="/image5.svg" alt="" height={312} width={312} />
            <h1 className="flex text-[#007580] pt-4 pl-4">
              Library Stool Chair
              <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#007580] text-white" />
            </h1>
            <h2 className="font-semibold pl-4">$20</h2>
          </div>
          {/* chair10 */}
          <div className="h-[377px] w-full sm:w-[48%] md:w-[48%] lg:w-[23%]">
            <Image src="/Image6.svg" alt="" height={312} width={312} />
            <h1 className="flex text-black hover:text-[#007580] pt-4 pl-4">
            Library Stool Chair
              <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded
               bg-[#F0F2F3] text-black hover:bg-[#007580]" />
            </h1>
            Library Stool Chair
            <h2 className="font-semibold pl-4">$20</h2>
          </div>
          {/* chair11 */}
          <div className="h-[377px] w-full sm:w-[48%] md:w-[48%] lg:w-[23%]">
            <Image src="/image7.png" alt="" height={312} width={312} />
            <h1 className="flex text-black hover:text-[#007580] pt-4 pl-4">
              Library Stool Chair
              <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#F0F2F3] text-black hover:bg-[#007580]" />
            </h1>
            <h2 className="font-semibold pl-4">$20</h2>
          </div>
          {/* chair12 */}
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

      {/* bottom section */}

<div className="w-full pb-10 bg-[#F0F2F3]">
  <div className="text-center">
    <h1 className="text-3xl font-bold pt-10">Or subscribe to the newsletter</h1>
    <div className="mt-6 flex justify-center">
      <input
        type="text"
        placeholder="Email Address.."
        className="w-full max-w-[640px] h-[32px] bg-[#F0F2F3] text-sm mt-6 border-b-2 ml-2 border-black px-4"
      />
      <button className="border-b-2 border-black text-sm ml-2 px-4 py-2">SUBMIT</button>
    </div>
    <h1 className="my-4 text-3xl font-bold">Follow products and discounts on Instagram</h1>
  </div>

  {/* Image div */}
  <div className="flex flex-wrap gap-4 justify-center">
    <div className="w-[186px] h-[186px]">
      <Image src="/Image1.svg" alt="chair" width={186} height={186} />
    </div>
    <div className="w-[186px] h-[186px]">
      <Image src="/Image2.svg" alt="chair" width={186} height={186} />
    </div>
    <div className="w-[186px] h-[186px]">
      <Image src="/Image3.svg" alt="chair" width={186} height={186} />
    </div>
    <div className="w-[186px] h-[186px]">
      <Image src="/Image4.svg" alt="chair" width={186} height={186} />
    </div>
    <div className="w-[186px] h-[186px]">
      <Image src="/image5.svg" alt="chair" width={186} height={186} />
    </div>
    <div className="w-[186px] h-[186px]">
      <Image src="/Image6.svg" alt="chair" width={186} height={186} />
    </div>
  </div>
</div>


    </div>






  )
}

export default Produtsall
