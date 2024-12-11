
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdAccessTimeFilled } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-20">
      <div className="items-center text-center">
        <h2 className="text-2xl font-bold mb-1 title-font">Get In Touch With Us</h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          For more information about our products & services, please feel 
          free to drop us <br /> an email. Our staff will always be there to help you out. Don’t hesitate!
        </p>
      </div>

      <div className="flex flex-col items-center lg:flex-row justify-center mt-10 lg:mt-20">
        {/* Contact Info Section (Right side) */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 px-4 space-y-6">
          <div className="flex items-center space-x-2">
            <IoLocationSharp className="text-2xl" />
            <div>
              <h1 className="font-bold text-xl">Address</h1>
              <p className="text-center lg:text-left">236 5th SE Avenue, New <br /> York NY10000, United <br /> States</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-2xl" />
            <div>
              <h1 className="font-bold text-xl">Phone</h1>
              <p className="text-center lg:text-left">Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <MdAccessTimeFilled className="text-2xl" />
            <div>
              <h1 className="font-bold text-xl">Working Time</h1>
              <p className="text-center lg:text-left">Monday-Friday: 9:00 <br /> - 22:00 <br />
                Saturday-Sunday: 9:00 <br /> - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Get In Touch Section (Left side) */}
        <div className="container px-5 mx-auto w-full lg:w-1/2 mt-10 lg:mt-0">
          <div className="lg:w-3/4 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full relative z-10 shadow-md">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Name'
                className="w-full bg-white rounded border border-gray-300 py-1 px-3 leading-8"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Email'
                className="w-full bg-white rounded border py-1 px-3 leading-8"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="subject" className="leading-7 text-sm">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder='optional'
                className="w-full bg-white rounded border border-gray-300 py-1 px-3 leading-8"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder='How can I help you?'
                className="w-full bg-white rounded border border-gray-300 h-[129px] py-1 px-3"
                defaultValue={""}
              />
            </div>
            
            <button className="bg-[#007580] text-white py-2 px-6 rounded text-lg mt-4 w-full sm:w-[237px] mx-auto">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
