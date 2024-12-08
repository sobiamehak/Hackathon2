

import React from 'react'
import Image from 'next/image'

const Categoys = () => {
  return (
    <div>
      <div className="text-center pt-20 sm:pt-24 md:pt-32 lg:pt-40">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">Top Categories</h1>
      </div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center w-full pt-10">
        
        {/* Category 1 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg w-full h-[280px] sm:h-[350px] md:h-[424px]">
          <Image 
            src="/categorys1.svg" 
            alt="Wing Chair" 
            width={424} 
            height={424} 
            layout="responsive"
          />
          <div className="absolute bottom-0 w-full h-[85px] bg-black bg-opacity-70 text-white px-4 py-4">
            <h3 className="text-lg font-semibold">Wing Chair</h3>
            <p className="text-sm text-gray-400">3,584 Products</p>
          </div>
        </div>

        {/* Category 2 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg w-full h-[280px] sm:h-[350px] md:h-[424px] text-white">
          <Image 
            src="/categoys2.svg" 
            alt="Wooden Chair" 
            width={424} 
            height={424} 
            layout="responsive"
          />
          <div className="absolute bottom-0 w-full h-[85px] bg-black bg-opacity-70 px-4 py-4">
            <h3 className="text-lg font-semibold">Wooden Chair</h3>
            <p className="text-sm text-gray-400">157 Products</p>
          </div>
        </div>

        {/* Category 3 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg w-full h-[280px] sm:h-[350px] md:h-[424px]">
          <Image 
            src="/categorys3.png" 
            alt="Desk Chair" 
            width={424} 
            height={424} 
            layout="responsive"
          />
          <div className="absolute bottom-0 w-full h-[85px] bg-black bg-opacity-70 text-white px-4 py-4">
            <h3 className="text-lg font-semibold">Desk Chair</h3>
            <p className="text-sm text-gray-400">154 Products</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Categoys
