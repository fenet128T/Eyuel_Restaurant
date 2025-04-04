import React from "react";
import { FaBus } from "react-icons/fa";
const WhyChoose = () => {
  return (
    <>
      <div className="py-14 md:py-28 bg-grey-50">
        <div className="container">
          {/* heading section  */}
          <h1 className="pb-16 tracking-wider text-2xl font-semibold text-dark text-center">
            Why choose us
          </h1>
          {/* card section  */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
            {/* 1st card  */}
            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
              <p className="text-dark/70 font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
              <p className="text-5xl rotate-90 text-primary text-center translate-x-5">
                ....
              </p>
              <FaBus className="text-5xl text-primary" />
            </div>

            {/* 2nd card  */}
            <div className="text-center flex justify-center items-center flex-col gap-1 px-3">
              <FaBus className="text-5xl text-secondary" />
              <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">
                ....
              </p>
              <p className="text-dark/70 font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
{/* 3rd card  */}
            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
              <p className="text-dark/70 font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
              <p className="text-5xl rotate-90 text-primary text-center translate-x-5">
                ....
              </p>
              <FaBus className="text-5xl text-primary" />
            </div>

            {/* 4th card  */}
            <div className="text-center flex justify-center items-center flex-col gap-1 px-3">
              <FaBus className="text-5xl text-secondary" />
              <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">
                ....
              </p>
              <p className="text-dark/70 font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
