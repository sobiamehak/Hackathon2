
import React from 'react'
import Image from 'next/image'

const Frame = () => {
  return (
    <div className='w-full flex my-10 px-4  flex-col md:flex-row overflow-hidden'>
      {/* left div */}
      <div className='w-full md:w-1/2'>
        <Image src="Image3.svg" alt="" width={638} height={638} className="w-full mb-4 h-auto" />
      </div>
      {/* right div */}
      <div className='w-full md:w-1/2 grid grid-cols-2 gap-2 sm:grid-cols-1 lg:grid-cols-2 ml-2'>
        <Image src="/Image4.svg" alt="Image 1" width={300} height={300} className="w-full h-auto" />
        <Image src="/Image2.svg" alt="Image 2" width={300} height={300} className="w-full h-auto" />
        <Image src="/image5.svg" alt="Image 3" width={300} height={300} className="w-full h-auto" />
        <Image src="/Image6.svg" alt="Image 4" width={300} height={300} className="w-full h-auto" />
      </div>
    </div>
  )
}    

export default Frame
