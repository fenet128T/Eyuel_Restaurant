import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6" 
const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
          <div>
            <h1>Contact us</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
              {/* <div> */}
                 <div className="flex items-center gap-2">
                <IoLocationSharp className="text-xl" />
              <span>123 Street, City, Country</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-xl" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-xl" />
              <span>+1 234 567 890</span>
            </div>
              {/* </div> */}
   </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Footer;