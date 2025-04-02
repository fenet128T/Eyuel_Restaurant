import React from "react";
import PrimaryButton from "../../components/Shared/PrimaryButton";
import fork from "../../assets/png/fork-Photoroom.png"
import macr from "../../assets/png/macr-Photoroom.png"
import dish from "../../assets/dish.jpg"
import broccoli from "../../assets/png/broccoli-Photoroom.png"
import vegies from "../../assets/png/vegies-Photoroom.png";

const Banner = () => {
  return (
    <div className="container py-14 relative">
      <div>
        <h1 className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
          Taste the Healthy Difference
        </h1>
        {/* text content section */}
        <div className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
            <div>
              <p>
                We know that <span className="text-yellow-700">time </span>
                is the greatest value in the modern world. our healthy meal plan
                delivery service good food in jimma is the answer for those who
                want to eat healthy,saving time for buying food and preparing
                delicious,healthy meals
              </p>
            </div>
            <div></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-10">
            <div></div>
            <div>
              <p>
                We know that <span className="text-yellow-700">time </span>
                is the greatest value in the modern world. our healthy meal plan
                delivery servvice good food in jimma is the answer for those who
                want to eat healthy,saving time for buying food and preparing
                delicious,healthy meals
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
        <img src={macr} alt="" className="max-w-[160px] " />
      </div>
      <div className="absolute -bottom-0 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
        <img src={fork} alt="" className="max-w-[265px]" />
      </div>
      <div className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100">
        <img src={dish} alt="" className="max-w-[197px]" />
      </div>
      <div className="hidden sm:block absolute bottom-0 right-0">
        <img src={vegies} alt="" className="max-w-[195px]" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100">
        <img src={broccoli} alt="" className="max-w-[175px]" />
      </div>
    </div>
  );
};

export default Banner;
