import React from 'react'
import Navbar from "../src/components/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Banner from "../src/components/Banner/Banner.jsx";
import About from "../src/components/About/About.jsx";
import WhyChoose from './components/WhyChoose/WhyChoose.jsx';
import Footer from './components/Footer/Footer.jsx';
import Location from './components/Location/Location.jsx';
// import Location from "../src/components/Location/Location.jsx"
const App = () => {

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Banner />
        
        {/* <Services /> */}
      <WhyChoose />
        <About />
        <Footer />
        <Location />
      </div>
    </>
  );
}

export default App
