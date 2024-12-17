import React from 'react'
import Image from 'next/image'
import { TbTruckDelivery } from 'react-icons/tb'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { CiCreditCard1 } from 'react-icons/ci'
import { LuTreePalm } from 'react-icons/lu'
const About = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 justify-center md:ml-10 mt-20'>
        {/* left div */}
      <div className='max-w-[520px] h-[400px] bg-[#007580] pl-10  p-5 text-white'>
<h1 className='font-bold pt-10 text-xl'>About Us - Comforty</h1>
<p>At Comforty, we believe that the right chair can transform <br /> your space and  
elevate your comfort. Specializing in <br /> ergonomic design, premium materials, 
 and modern  <br />aesthetics, we craft chairs that seamlessly blend style  <br /> 
 with functionality. </p>
<button className='mt-[6rem] w-[170px] h-[50px] bg-[#F9F9F926] rounded '>View collection</button>
      </div>

      {/* right div */}

      <div className='max-w-[400px] h-[350px]'>
<Image src="/Image1.svg" alt="stool" width={520} height={350} />
      </div>
      </div>
 {/* 2nd sec */}
 <h1 className='flex justify-center items-center font-bold txt-xl my-10'>What makes our Brand Different</h1>
      <div className='grid grid-cols-1 md:grid-cols-4'>
       
        <div className='w-[250px] h-[220px] bg-[#F9F9F9] text-[#007580] flex flex-col
         pl-10 justify-center'>
        <TbTruckDelivery className='text-xl' />
        <h2 className='font-bold  text-xl'>Next day as standard</h2>
        <p>Order before 3pm and get <br /> your order the next day as <br />
         standard</p>
        </div>

        <div className='w-[250px] h-[220px] bg-[#F9F9F9] text-[#007580] flex flex-col
         pl-10 justify-center'>
        <IoCheckmarkCircleOutline className='text-xl' />
        <h2 className='font-bold  text-xl'>Made by true artisans</h2>
        <p>Handmade crafted goods <br /> made with real passion and  <br />craftmanship</p>
        </div>


        <div className='w-[250px] h-[220px] bg-[#F9F9F9] text-[#007580] flex flex-col
         pl-10 justify-center'>
        <CiCreditCard1  className='text-xl' />
        <h2 className='font-bold  text-xl'>Unbeatable prices</h2>
        <p>For our materials and <br /> quality you was not find better <br /> prices anywhere</p>
        </div>


        <div className='w-[250px] h-[220px] bg-[#F9F9F9] text-[#007580] flex flex-col
         pl-10 justify-center'>
        <LuTreePalm className='text-xl' />
        <h2 className='font-bold  text-xl'>Recycled packaging</h2>
        <p>We use 100% recycled to <br />ensure our footprint is more  <br />manageable
         </p>
        </div>
      </div>

      {/* our products */}



<h1 className='font-bold text-xl text-center md:text-start'>Our Popular Products</h1>
<div className='flex flex-col gap-10 lg:gap-4 justify-center items-center mx-10 '>
    <div>
        <Image src="/about1.jpg" alt="" width={600} height={400} className='object-cover w-[600px] h-[373px]'/>
        <p>The Poplar suede sofa <br /> $99.00</p>
    </div>
    <div>
        <Image src="/about2.jpg" alt="" width={300} height={200} className='object-cover
         w-[250px] h-[373px]'/>
         <p>The Dandy chair <br />
         $99.00</p>
    </div>

    <div >
        <Image src="/about3.jpg" alt="" width={300} height={150} className='
        object-cover w-[250px] h-[373px]'/>
        <p>The Dandy chair <br />
        $99.00</p>
    </div>
</div>
    </div>
  )
}

export default About
