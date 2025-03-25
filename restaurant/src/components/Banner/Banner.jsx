import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import fork from "../../assets/png/fork-Photoroom.png";
import macr from "../../assets/png/macr-Photoroom.png";
import tomato from "../../assets/png/tomato.png";
import lemon from "../../assets/png/lemon.png"
const Banner = () => {
  return (
    <>
      <div className="container py-14 relative">
        <div>
          <h1 className="py-8 tracking-wider test-2xl font-semibold text-dark text-center">
            Taste the Healthy Difference
          </h1>
          {/* text content section  */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div>
                <p>
                  {" "}
                  We know that <span className="text-yellow-700">time </span>
                  is the greatest value in the modern world. our healthy meal
                  plan delivery servvice good food in jimma is the answer for
                  those who want to eat healthy,saving time for buying food and
                  preparing delicious,healthy meals
                </p>
              </div>
              <div></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div></div>
              <div>
                <p>
                  {" "}
                  We know that <span className="text-yellow-700">time </span>
                  is the greatest value in the modern world. our healthy meal
                  plan delivery servvice good food in jimma is the answer for
                  those who want to eat healthy,saving time for buying food and
                  preparing delicious,healthy meals
                </p>
              </div>
            </div>
          </div>
          {/* button section  */}
          <div className="flex justify-center mt-10 sm:mt-14">
            <PrimaryButton />
          </div>
        </div>
        {/* bg vegies pngs  */}
        <div className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
          <img src={macr} alt="" className="max-w-[160px]" />
        </div>
        <div className="absolute -bottom-0 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
          <img src={fork} alt="" className="max-w-[280px]" />
        </div>
        <div className="absolute -top-10 -right-16  sm:right-20 opacity-50 sm:opacity-100">
          <img src={tomato} alt="" className="max-w-[200px]" />
        </div>
        <div className=" hidden absolute bottom-0 right-0  sm:block ">
          <img src={lemon} alt="" className="max-w-[200px]" />
        </div>
      </div>
    </>
  );
};

export default Banner;
