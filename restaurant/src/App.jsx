import React from 'react'
import Navbar from "../src/components/Navbar.jsx";
import Hero from "../src/components/Hero/Hero.jsx";
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <Banner />
      <Services />
      <About handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}
    </div>
  );
}

export default App
