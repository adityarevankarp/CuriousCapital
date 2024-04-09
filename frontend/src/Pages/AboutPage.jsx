import React from "react";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Avatar from "../Components/Avatar";
function AboutPage() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Hero />

        <div className="h-auto w-auto z-1 relative">
          <Navbar />
        </div>
        <div className="relative sm:mx-0 md:mx-6 lg:mx-24 xl:mx-78 2xl:mx-88 4xl:mx-98 imac:mx-180">
          <div className="relative z-1 flex flex-col justify-center items-center p-7 sm:p-12 mx-auto">
            <p
              className="text-[#e55db2] text-3xl font-bold"
              style={{ fontFamily: "Bebas Neue" }}
            >
              What is CC ?{" "}
            </p>
            <p
              className="text-xl text-white my-5 font-normal"
              style={{ filter: "drop-shadow(9px 9px 14px #010101)" }}
            >
              Founded in 2023, Curious Capital is a private limited company and
              a dynamic firm with alacrity to adapt to the ever changing
              financial world. Our trading desk executes automated and
              discretionary strategies focused on emerging markets such as
              cryptocurrencies, currency markets, equities & all open markets.
              Curious Capital also consists of a venture desk, that backs
              innovative, early-stage companies.
            </p>
            <p
              className="text-[#e55db2] text-3xl font-bold"
              style={{ fontFamily: "Bebas Neue" }}
            >
              What’s unique about CC ?{" "}
            </p>
            <p className="text-xl text-white my-5 font-normal">
              By strategically allocating a significant portion of our
              investments to non-traditional spaces like cryptocurrencies, DeFi,
              and Web3, Curious Capital offers a compelling opportunity for
              investors seeking exposure to alternative assets. We leverage
              meticulously crafted and rigorously tested revenue models,
              investment strategies, and robust risk management frameworks to
              position our clients for success in this dynamic financial
              landscape.
            </p>
            {/* <div className='relative z-1 flex gap-5 rounded-full'>
          <Avatar />
          <Avatar/>
          <Avatar/>
        </div> */}
          </div>
        </div>

        <div className="relative z-1 flex flex-col justify-end items-center w-screen h-screen">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
