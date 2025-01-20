



import React from 'react';
import Image from 'next/image';
import { CiShoppingCart } from 'react-icons/ci';

 export interface ProductCardProps {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ _id, title, price, imageUrl }) => {
  return (
    <div key={_id} className="h-[377px] w-full max-w-[312px] mx-auto">
      <Image src={imageUrl} alt={title} height={312} width={312} />
      <h1 className="flex text-[#007580] pt-4 pl-4">
        {title}
        <CiShoppingCart className="text-3xl ml-auto h-[44px] w-[44px] rounded bg-[#007580] text-white" />
      </h1>
      <h2 className="font-semibold pl-4">${price}</h2>
    </div>
  );
};

export default ProductCard;




