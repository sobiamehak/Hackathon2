


"use client";  // Ensures this component runs on the client-side only
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Product } from '../../../types/product';
import { client } from '@/sanity/lib/client';
import { allproduct } from '@/sanity/lib/query';
import { CiShoppingCart } from 'react-icons/ci';
import Link from 'next/link';
const Chairset = () => {
  const [product, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchingproduct: Product[] = await client.fetch(allproduct);
      setProducts(fetchingproduct);
    }
    fetchproduct();
  }, []);

  return (
   <div>

        {/* Card Section */}
        <div className="mt-8">
        <h1 className="font-semibold text-[#272343] text-center sm:text-left">
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
              src={product.imageUrl} // Use urlFor function to get the image URL
              alt={product.title}
              width={300}  // Example width, adjust as necessary
              height={300} // Example height, adjust as necessary
            />
          }
</Link>
<h3 className='text-xl mt-2 font-serif'>{product.title}</h3>
< CiShoppingCart className='ml-auto text-5xl hover:bg-[#029FAE] text-black'/>
<p className='text-[#029FAE]'>{product.price} $</p>

        </div>
    
      ))}
      
</div>
     
      </div>
      
  );
};

export default Chairset;


