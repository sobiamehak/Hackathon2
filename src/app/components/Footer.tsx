

import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="">
      <hr className="mt-20" />
      <div className="text-gray-600 body-font">  <div className="container px-4 sm:px-8 md:px-12 py-24 mx-auto">
          <div className="flex flex-wrap text-center md:text-left -mb-10 ">    
            {/* Logo and Description */}
            <div className="lg:w-1/4 md:w-1/2  px-4 mb-10">
   <div className="flex justify-center md:justify-start ">  <Image src="/logo.svg" alt="logo" width={40} height={40} />
                <h1 className="font-medium text-2xl pb-2 pl-2">Comforty</h1>
    </div>
              <p className="text-sm md:text-base">    Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
              </p>
              <Image src="/Social Links.svg" alt="social links" width={206} height={38} className='mt-4' />
            </div>

            {/* Categories */}
            <div className="lg:w-1/4 md:w-1/2 w-full  mb-10">
              <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none">
                <li>Sofa</li>
                <li>Armchair</li>
                <li>Wing chair</li>
                <li>Desk chair</li>
                <li>Wooden chair</li>
                <li>Park Bench</li>
              </nav>
            </div>

            {/* Support */}
            <div className="lg:w-1/4 md:w-1/2 w-full  mb-10  ">
              <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3 ">SUPPORT</h2>
              <nav className="list-none">
                <li><a className="text-gray-600 hover:text-gray-800">Help & Support</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Help</a></li>
              </nav>
            </div>

            {/* Newsletter */}
            <div className="lg:w-1/4 md:w-1/2 w-full  mb-10">
              <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">NEWSLETTER</h2>
              <div className="flex justify-center md:justify-start">
                <input
                  type="text"
                  className="border border-gray-400 rounded px-4 py-2 w-full sm:w-[190px] mr-2 "
                />
                <button className="border  pl-2 w-[84px] h-[36px] text-white bg-[#029FAE] rounded font-sm px-2">
                  Subscribe
                </button>
              </div>
              <p className="text-xs md:text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
            </div>
          </div>
        </div>

        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 py-4">
          <p className="text-sm text-center md:text-left">
            @ 2021 - Blogy - Designed & Developed by Sobia Mehak
          </p>
          <div className="flex justify-center">
            <Image src="/Group13.svg" alt="accounts" width={227} height={27} className="opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
