import React from "react";
import { FaArrowRight } from "react-icons/fa";
const PrimaryButton = () => {
  return (
    <>
      <div className="flex items-center group">
        <button className="bg-amber-50 h-[40px] text-amber-600  px-3 py-2">
          choose your meal plan
        </button>
        <FaArrowRight className="inline-block group-hover:!translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-amber-700 text-white " />
      </div>
    </>
  );
};

export default PrimaryButton;
