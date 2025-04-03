import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6" 
const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl ">
          {/* heading section  */}
          <h1 className="py-9 text-3xl font-bold  text-center">Contact us</h1>

          {/* grid section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
            {/* Address section  */}
            <div className="text-center space-y-4">
              <div className="grid gap-2 justify-center">
                <IoLocationSharp className="text-5xl" />
                <p>123 Street, Jimma, Ethiopia</p>
              </div>
            </div>

            {/* email section  */}
            <div className="text-center space-y-5">
              <div className="grid gap-2 justify-center">
                <MdEmail className="text-5xl" />
                <p>eyu@restaurant.com</p>
                <p> info@food.com</p>
              </div>
            </div>

            {/* phone num section  */}
            <div className="text-center space-y-4">
              <div className="grid gap-2 justify-center ">
                <FaPhone className="text-5xl" />
                <p>+251 945 543 546 - sales and services</p>
                <p>+251 945 543 546 - hiring queries</p>
                <p>+251 945 543 546 - whatsapp</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-4 items-center">
            <p> @ 2025 ERU. All rights reserved</p>
            <div className="flex items-center gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & conditions</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;