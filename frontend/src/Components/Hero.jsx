import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";

const Hero = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.VANTA) {
      vantaRef.current = window.VANTA.NET({
        el: "#your-element-selector",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        points: 20.0,
      });
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div
        id="your-element-selector"
        style={{ width: "100%", height: "100vh" }}
      >
        
      </div>
    </>
  );
};

export default Hero;
