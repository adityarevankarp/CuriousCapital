import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Portfolio() {
  return (
    <div>
      <div className="overflow-x-hidden">
        <Hero />
        <div className="h-auto w-auto z-1 relative">
          <Navbar />
        </div>
        <div className="relative z-1 flex flex-col justify-end items-center w-screen h-screen">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
