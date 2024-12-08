

import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row bg-[#F0F2F3]">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start m-4 gap-7 lg:w-1/2 lg:m-12">
          <p className="text-lg font-semibold">WELCOME TO CHAIRY</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            Best Furniture <br /> Collection for your <br /> interior.
          </h1>
          <button className="bg-[#029FAE] rounded w-[120px] sm:w-[150px] lg:w-[171px] h-[52px] text-white font-semibold">
            Shop Now
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-10 mt-6 lg:mt-0 lg:w-1/2">
          <Image
            src={"/hero2.svg"}
            alt="hero image"
            width={434}
            height={584}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
