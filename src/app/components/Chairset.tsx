



"use client";  // Ensures this component runs on the client-side only
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Product } from '../../../types/product';
import { client } from '@/sanity/lib/client';
import {  fourpro } from '@/sanity/lib/query';
import { CiShoppingCart } from 'react-icons/ci';
import { addcart } from '../cartFunctionality/cart';
// import { toast } from 'react-toastify';
import Swal from 'sweetalert2';



const Chairset = () => {

  const [product, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchingproduct: Product[] = await client.fetch(fourpro);
      setProducts(fetchingproduct);
    }
    fetchproduct();
  }, []);

    
     const handleAddToCart = (e: React.MouseEvent, product: Product) => {
      e.preventDefault()
      
    addcart(product)
 
    // toast.success(`${product.title} added to cart`, {
    //   position: 'top-right',
    //   autoClose: 3000, // Optional: how long the toast stays visible

    // }); 
    Swal.fire({
      icon: 'success',
      title: 'Product Added!',
      text: `${product.title} has been added to your cart.`,
      position: 'top-end',  // You can adjust the position if necessary
      toast: true,  // This makes the alert appear like a toast
      showConfirmButton: false,  // Optionally hide the confirmation button
      timer: 2000,  // The duration for which the toast stays visible
    });
   
      }

  return (
    <div className="w-full px-4 sm:px-8 md:px-12 overflow-hidden">
      {/* Logos Section */}
      <div className="flex flex-wrap justify-between items-center mt-8">
        <Image src="/Logo1.svg" alt="logo 1" width={100} height={90} />
        <Image src="/Logo2.svg" alt="logo 2" width={107} height={109} />
        <Image src="/Logo3.svg" alt="logo 3" width={135} height={139} />
        <Image src="/logo4.svg" alt="logo 4" width={63} height={65} />
      </div>

        {/* Card Section */}
        <div className="mt-8">
        <h1 className="font-semibold text-[#272343] text-center sm:text-left lg:text-3xl m-4 font-serif">
          Featured Products
        </h1> </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-4 ">
      {/* Product Section */}
      {product.map((product) => (
        <div key={product._id} className='bg-slate-100 p-4 rounded transition-transform hover:scale-105'>
        <Link href={`/pro/${product.slug?.current}`}>
          {/* Assuming image.asset._ref contains the reference to the image */}
          {
            <Image
              src={product.imageUrl} 
              alt={product.title}
              width={300}  // Example width, adjust as necessary
              height={300} // Example height, adjust as necessary
            />
          }
          <h1 className='text-xl font-serif ml-2'>{product.title}</h1>
<div className='flex'>
 
<button onClick={(e) => {
                if (product) {
                  handleAddToCart(e, product); // Only call the function if product is not null
                }
              }} >
<  CiShoppingCart className=' text-5xl hover:bg-[#029FAE] text-black'/>
</button>
 
<p className='text-[#029FAE] ml-auto mt-4'>{product.price} $</p>
</div>
</Link>
        </div>
        
      ))}
</div>
     
      </div>
   
  );
};

export default Chairset;


