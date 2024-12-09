
import React from 'react'
import Image from 'next/image'

const Frame = () => {
  return (
    <div className='w-full flex mx-4 my-10 flex-col md:flex-row'>
      {/* left div */}
      <div className='w-full md:w-1/2'>
        <Image src="Image3.svg" alt="" width={648} height={648} className="w-full mb-4 h-auto" />
      </div>

      {/* right div */}
      <div className='w-full md:w-1/2 grid grid-cols-2 gap-2 sm:grid-cols-1 lg:grid-cols-2 ml-4'>
        <Image src="/Image4.svg" alt="Image 1" width={312} height={312} className="w-full h-auto" />
        <Image src="/Image2.svg" alt="Image 2" width={312} height={312} className="w-full h-auto" />
        <Image src="/image5.svg" alt="Image 3" width={312} height={312} className="w-full h-auto" />
        <Image src="/Image6.svg" alt="Image 4" width={312} height={312} className="w-full h-auto" />
      </div>
    </div>
  )
}

export default Frame
