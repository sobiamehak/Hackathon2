


"use client";  // Ensures this component runs on the client-side only
import React, { useEffect, useState } from 'react';
import ProductCard from '../../app/components/productCard';
import Image from 'next/image';

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const Chairset = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/product");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full px-4 sm:px-8 md:px-12 overflow-hidden">
     

      {/* Card Section */}
      <div className="mt-8">
        <h1 className="font-semibold text-[#272343] text-center sm:text-left">
          All Products
        </h1>

        {/* Loading State */}
        {loading ? (
          <p className="col-span-full text-center text-xl">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-4">
            {/* Limit to the first 4 products */}
            {products.slice(0, 12).map((product) => (
              <ProductCard
                key={product._id}
                _id={product._id}
                title={product.title}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        )}
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
  <div className="flex flex-wrap gap-4 justify-center ">
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
    {/* <div className="w-[186px] h-[186px]">
      <Image src="/Image6.svg" alt="chair" width={186} height={186} />
    </div> */}
  </div>
  </div>
    </div>
  );
};

export default Chairset;







