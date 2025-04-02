import React from 'react'
import vectorWave from "../../assets/vectorWave.png"
import vector from "../../assets/polygon.png"

const BgStyle = {
  backgroundImage: `url(${vector})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width:"100%",
  height: "100%",
  position: "relative",
};
const About = () => {
  return (
    <>
      <div style={BgStyle} className="py-14">
        <div className="container min-h-[485px] relative z-10">
          <h1 className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">
            About Us
          </h1>
          {/* card section */}
          <div className="bg-white/80 p-10 my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            labore totam at ullam adipisci. Quis ipsa quibusdam, odit sint
            voluptatum expedita optio iste commodi at nobis enim natus aperiam
            ullam dolores reiciendis quos consectetur similique totam molestiae
            recusandae! Corrupti facilis deleniti asperiores dolorum doloremque
            error, molestiae, voluptate officiis molestias placeat at, ipsum
            numquam officia soluta aut iste. Vero, tempore sed neque eum
            consequatur cum praesentium fugiat aspernatur minima labore. Ratione
            ut ullam illo assumenda distinctio!
            {/* <div></div> */}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full">
          {/* wave vector */}
          <img src={vectorWave} alt="" className="mx-auto" />
        </div>
      </div>
    </>
  );
}

export default About
