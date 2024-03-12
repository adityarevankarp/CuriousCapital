import React from "react";
import "./Card.css";


function Card({logo_url}) {
  return (
    <div>
      <div className="hover:-translate-y-2 group bg-[#2A1949] duration-500 w-32 h-32 flex flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute blur z-10 fill-[#422772] duration-500 group-hover:blur-none group-hover:scale-105"
        >
          <path
            transform="translate(100 100)"
            
          ></path>
        </svg>

        <div className="z-20 flex flex-col justify-center items-center">
          {/* <span className="font-bold text-6xl ml-2">34+</span>
          <p className="font-bold">Projects</p> */}
          <img src={logo_url} className="h-24 logo" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
