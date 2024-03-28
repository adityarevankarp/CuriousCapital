import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Css/Portfolio.css";
import Card from "../Components/Card";
import p1 from "../assets/Portfolio_assets/alchemix.png";
import p2 from "../assets/Portfolio_assets/anboto.png";
import p3 from "../assets/Portfolio_assets/arbitrum.png";
import p4 from "../assets/Portfolio_assets/blur.png";
import p5 from "../assets/Portfolio_assets/connext.png";
import p6 from "../assets/Portfolio_assets/pacer.png";
import p7 from "../assets/Portfolio_assets/expopulus.png";
import p8 from "../assets/Portfolio_assets/damm.png";
function Portfolio() {
  return (
    <div>
      <div className="overflow-x-hidden">
        <Hero />
        <div className="h-auto w-auto z-1">
          <Navbar />
        </div>
        <div className="sm:mx-0 md:mx-6 lg:mx-24 xl:mx-78 2xl:mx-88 4xl:mx-98 imac:mx-180">
          <div className="relative z-1 flex flex-col justify-center items-center p-9 sm:p-20 sm:pt-5   ">
            <p
              className="text-[#e55db2] text-3xl font-bold my-2"
              style={{ fontFamily: "Bebas Neue" }}
            >
              Portfolio
            </p>
            <p
              className="text-xl text-white my-8 font-normal text-justify"
              style={{ fontFamily: "Inter" }}
            >
              CURIOUS CAPITAL invests in generational crypto startups who lay
              the foundation for our growing ecosystem. Our operational
              excellence allows great founders to build and their protocols to
              thrive.
            </p>
            {/* //3xl:grid grid-cols-4 gap-16 sm:grid grid-cols-3 gap-12 */}
            {/* grid grid-cols-4 gap-16 sm:grid-cols-3 4xl:grid-cols-4 gap-16 md:grid-cols-3 gap-16 lg:grid-cols-4 */}
            {/* grid-cols-1 gap-5 xxs:m-10 gap-5 xs:grid-cols-2 s:grid-cols-2 s:gap-x-16 sm:grid-cols-4 lg:grid-cols-4 ssm:grid-cols-2 ssm:gap-x-16  */}
            <div className="grid grid-cols-1 justify-items-stretch xxs:m-10 gap-5 xs:grid-cols-2 s:grid-cols-2 s:gap-x-16 sm:grid-cols-4 lg:grid-cols-4 ssm:grid-cols-2 ssm:gap-x-16">
              <Card logo_url={p1} />
              <Card logo_url={p2} />
              <Card logo_url={p3} />
              <Card logo_url={p4} />
              <Card logo_url={p5} />
              <Card logo_url={p6} />
              <Card logo_url={p7} />
              <Card logo_url={p8} />
              <Card logo_url={p6} />
              <Card logo_url={p5} />
              <Card logo_url={p1} />
              <Card logo_url={p6} />
            </div>
          </div>
        </div>
        <div className="relative z-1 flex flex-col justify-end items-center w-screen h-screen">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
