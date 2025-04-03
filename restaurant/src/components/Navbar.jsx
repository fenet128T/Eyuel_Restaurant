import React, { useRef, useState } from "react";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../src/assets/eyulogo-Photoroom.png";
// import logo2 from "../../src/assets/qr-code.png";
const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#",
  },
  {
    id: 3,
    name: "Contact",
    link: "#Footer.jsx",
  },
  {
    id: 4,
    name: "QR",
    link: "/#",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Vegetables",
    link: "/#",
  },
  {
    id: 2,
    name: "Fruits",
    link: "/#",
  },
  {
    id: 3,
    name: "Grains",
    link: "/#",
  },
];
const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const qrRef = useRef(null);

  // eslint-disable-next-line no-unused-vars
  const scrollToQRSection = () => {
    qrRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="bg-transparent shadow-sm
       rounded-2xl my-2 mx-24">
        <div className="container  flex justify-between px-0 p-0 sm:py-26">
          {/* logo section*/}
          <div className=" h-13 flex ">
            <img
              className="logo w-16 h-25 m-0"
              src={logo}
              alt="Eyuel Logo"
            />
            <span className="text-3xl mt-4 pr-2 text-yellow-600 mr-20 font-cursive">
              EYUEL
            </span>
          </div>
          {/* Toggler Button */}
          <button
            className="text-3xl sm:hidden"
            onClick={() => setIsNavVisible(!isNavVisible)}
          >
            {isNavVisible ? <FaTimes /> : <FaBars />}
          </button>
          {/* NavLink section */}
          <div
            className={`${
              isNavVisible ? "block" : "hidden"
            } sm:flex flex-col sm:flex-row items-center gap-8 bg-white absolute sm:static top-16 left-0 w-full sm:w-auto  sm:shadow-none z-10`}
          >
            <ul className="flex flex-col sm:flex-row items-center  gap-5">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="inline-block hover:text-yellow-600 text-xl font-semibold"
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* dropdown */}
              <li className="cursor-pointer group  ">
                <a
                  href="/#"
                  className="inline-block hover:text-yellow-600 text-xl font-semibold"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    Categories
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>
                {/* dropdown sec */}
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-transparent text-black shadow-md">
                  <ul>
                    {DropdownLinks.map(({ id, name, link }) => (
                      <li key={id}>
                        <a
                          href={link}
                          className="text-xl inline-block w-full round-md p-2 hover:bg-primary/20"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* QR */}
              <li>
                <button
                  className="text-xl font-semibold hover:text-yellow-600"
                  onClick={scrollToQRSection}
                ></button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* QR Section */}
      {/* <div
        ref={qrRef}
        className="bg-gray-100 py-20 mt-10 flex  justify-end items-center"
      >
        <div className="flex flex-col items-center mr-10">
          <img className="w-24 h-24 mb-2" src={logo2} alt="qr code" />
          <p className="text-1xl">scan to get the menu.</p>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
