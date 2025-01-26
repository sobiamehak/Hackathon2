


import { Product } from "../../../../types/product";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

import Image from "next/image"; 
import React from "react";
import { CiShoppingCart } from "react-icons/ci";  // Importing the cart icon

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product | null> {
   return client.fetch(
      groq`*[_type == "products" && slug.current == $slug][0]{
            _id,
            title,
            "imageUrl": image.asset->url,
            products,
            price,
            description,
        }`, { slug }
   );
}

export default async function ProductPage({ params }: ProductPageProps) {
   const { slug } = await params;
   const product = await getProduct(slug);

   
  

   return (
      <div>
         {/* Main Product Details Section */}
         <div className='flex flex-col md:flex-row mx-4 md:mx-10 mt-10'>
            <div className='flex justify-center mb-8 md:mb-0'>
               <div className='w-full md:w-[675px]'>
                  <Image
                     src={product?.imageUrl as string}
                     alt={product?.title || 'Product Image'}
                     width={675}
                     height={607}
                     className="w-full h-auto"
                  />
               </div>
            </div>

            <div className='flex flex-col md:ml-20 mt-8 md:mt-10'>
               <h1 className='text-[#272343] font-extrabold text-3xl md:text-4xl leading-tight'>
                  {product?.title}
               </h1>
               <h2 className='bg-[#029FAE] text-white font-semibold text-lg 
                  w-[144px] h-[44px] md:text-xl rounded-full px-4 py-3 mt-3 mb-3'>
                  ${product?.price}
               </h2>
               <hr className="my-4" />
               <p className='text-[#272343] opacity-75 text-sm md:text-base'>
                  {product?.description}
               </p>

 
               <button className='flex items-center w-[200px] pl-4 h-[63px] bg-[#029FAE] font-semibold text-white rounded-md mt-4 text-xl' 
               >
                  
                  <CiShoppingCart className="text-3xl mr-2" />
                  Add To Cart
               </button> 
            </div>
         </div>

         
         <div className="mt-8">
            <h1 className="font-semibold text-[#272343] text-center sm:text-left">
               Featured Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
               {/* Chair 1 */}
               <div className="h-[377px] w-full max-w-[312px] mx-auto">
                  <Image src="/Image1.svg" alt="Library Stool Chair" height={312} width={312} />
                  <h1 className="flex text-[#007580] pt-4 pl-4">
                     Library Stool Chair
                     <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#007580] text-white" />
                  </h1>
                  <h2 className="font-semibold pl-4">$20</h2>
               </div>
               {/* Chair 2 */}
               <div className="h-[377px] w-full max-w-[312px] mx-auto">
                  <Image src="/Image2.svg" alt="Chair 2" height={312} width={312} />
                  <h1 className="flex text-black hover:text-[#007580] pt-4 pl-4">
                     Library Stool Chair
                     <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#F0F2F3] text-black hover:bg-[#007580]" />
                  </h1>
                  <h2 className="font-semibold pl-4">$20</h2>
               </div>
               {/* Chair 3 */}
               <div className="h-[377px] w-full max-w-[312px] mx-auto">
                  <Image src="/Image3.svg" alt="Library Stool Chair" height={312} width={312} />
                  <h1 className="flex text-black hover:text-[#007580] pt-4 pl-4">
                     Library Stool Chair
                     <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#F0F2F3] text-black hover:bg-[#007580]" />
                  </h1>
                  <h2 className="font-semibold pl-4">$20</h2>
               </div>
               {/* Chair 4 */}
               <div className="h-[377px] w-full max-w-[312px] mx-auto">
                  <Image src="/Image4.svg" alt="Library Stool Chair" height={312} width={312} />
                  <h1 className="flex text-black hover:text-[#007580] pt-4 pl-4">
                     Library Stool Chair
                     <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#F0F2F3] text-black hover:bg-[#007580]" />
                  </h1>
                  <h2 className="font-semibold pl-4">$20</h2>
               </div>
            </div>
         </div>
      </div>
   );
}
