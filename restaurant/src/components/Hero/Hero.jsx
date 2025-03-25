import React from "react";
import hero from "../../assets/hero.png";
import heroBg from "../../assets/heroBg.png";
import PrimaryButton from "../Shared/PrimaryButton";
const BgStyle = {
  backgroundImage: 'url(${heroBg})',
  backgroundRepeat: "no-repeat",
  backgroundSize:"center",
  width: "100%",
  height:"100%",
};
const Hero = () => {
  return (
    <div style={BgStyle} className="relative z-[-1]">
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text content section */}
          <div className="space-y-7 text-dark order-2 sm:order-1">
            <h1 className="text-5xl">
              Fresh & Healthy meal {}{" "}
              <span className="text-yellow-600 font-cursive text-7xl">
                Restaurant{" "}
              </span>
              with{" "}
              <span className="text-yellow-600 font-cursive text-7xl">
                Delivery
              </span>
              service in Jimma
            </h1>
            <p className="lg:pr-64">Delicious Meals Delivered to your Door</p>

            {/* button section */}
            <div>
              <PrimaryButton />
            </div>
          </div>
          {/* Image section  */}
          <div className="relative z-30 order-1 sm:order-2">
            {" "}
            <img
              className=" w-full sm:scale-125 sm:translate-y-16"
              src={hero}
              alt="heroImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
