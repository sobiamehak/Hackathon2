

"use client";  // Ensures this component runs on the client-side only
import React, { useEffect, useState } from 'react';
import ProductCard from './productCard';
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
      {/* Logos Section */}
      <div className="flex flex-wrap justify-between items-center mt-8">
        <Image src="/Logo1.svg" alt="logo 1" width={100} height={90} />
        <Image src="/Logo2.svg" alt="logo 2" width={107} height={109} />
        <Image src="/Logo3.svg" alt="logo 3" width={135} height={139} />
        <Image src="/logo4.svg" alt="logo 4" width={63} height={65} />
      </div>

      {/* Card Section */}
      <div className="mt-8">
        <h1 className="font-semibold text-[#272343] text-center sm:text-left">
          Featured Products
        </h1>

        {/* Loading State */}
        {loading ? (
          <p className="col-span-full text-center text-xl">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-4">
            {/* Limit to the first 4 products */}
            {products.slice(0, 4).map((product) => (
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
    </div>
  );
};

export default Chairset;



