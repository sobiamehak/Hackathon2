

import React from 'react'
import Image from 'next/image'

const Frame = () => {
  return (
    <div className="flex flex-wrap justify-center mx-4 my-8">
      {/* Main Image Section */}
      <div className="w-[648px] sm:w-1/2 lg:w-1/2 xl:w-1/3 mb-4 lg:mb-0 ">
        <Image src="/Image3.svg" alt="Main Image" width={688} height={4808} className="
o"/>
      </div>
      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 
       w-[648pxl:grid-cols-2 gap-2 w-full sm:w-full lg:w-1/2 xl:w-2/3">
        <div className="flex justify-center items-center">
          <Image src="/Image4.svg" alt="Image 1" width={312} height={312} className=" h-auto"/>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/Image2.svg" alt="Image 2" width={312} height={312} className=" h-auto"/>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/image5.svg" alt="Image 3" width={312} height={312} className=" h-auto"/>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/image6.svg" alt="Image 4" width={312} height={312} className=" h-auto"/>
        </div>
      </div>
    </div>
  );
}

export default Frame;
