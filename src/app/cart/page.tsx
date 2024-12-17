import React from 'react'
import Image from 'next/image'
import { CiHeart } from 'react-icons/ci'
import { RiDeleteBin5Line } from 'react-icons/ri'

const Cart = () => {
  return (
    <div className='flex'>
        {/* left div */}
        <div>
      <div className=' flex w-[663px] mt-10'>

        <div className='flex ml-20 '>
<Image src="/Image3.svg" alt="chair"
width={150} height={150} />
<div className=' flex flex-col ml-2'>
<h1>Library Stool Chair</h1>

<p className='text-gray-400 mt-5 '>Ashen Slate/Cobalt Bliss</p>
<p className='text-gray-400'> Size L
Quantity 1
</p> 
<div className='flex flex-row text-gray-400 mt-3'>
<CiHeart className=''/>
<RiDeleteBin5Line className='ml-4 '/>
</div>
</div>
      </div>
      <h2 className='flex ml-auto mr-4'>MRP: $99</h2>
      </div>
<hr className='mt-4'/>
      {/* left div 2 */}
      <div className=' flex w-[663px] mt-4 '>

<div className='flex ml-20 '>
<Image src="/categorys1.svg" alt="chair"
width={150} height={150} />
<div className=' flex flex-col ml-2'>
<h1>Library Stool Chair</h1>

<p className='text-gray-400 mt-5 '>Ashen Slate/Cobalt Bliss</p>
<p className='text-gray-400'> Size L
Quantity 1
</p> 
<div className='flex flex-row text-gray-400 mt-3'>
<CiHeart className=''/>
<RiDeleteBin5Line className='ml-4 '/>
</div>
</div>
</div>
<h2 className='flex ml-auto mr-4'>MRP: $99</h2>
</div>
    </div>
{/* right div */}
<div>
<div className='flex mt-6 pl-6'>
    <div className=''>
    <h1 className='font-semibold'>Summary</h1>
    <h2 className='text-sm'>Subtotal</h2>
    <p className='text-sm'>Estimated Delivery & Handling</p>
    <hr />
    <button className='mt-8 '>Total</button>
    <hr />
    <button></button>
</div>
    <div className='mt-5 ml-6'>
        <h1>
        $198.00
        </h1>
        <h2 className='mt-[6px] '>Free</h2>
        <h3 className='mt-6'>$198.00</h3>
    </div>
</div>
     </div>
    </div>
  )
}

export default Cart
