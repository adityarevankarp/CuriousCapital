import React, { useEffect, useRef } from 'react';


const Hero = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    
    if (typeof window !== 'undefined' && window.VANTA) {
      
      vantaRef.current = window.VANTA.NET({
        el: "#your-element-selector",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      });
    }

    
    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
      }
    };
  }, []);

  return (
    <div id="your-element-selector" style={{ width: '100%', height: '100vh' }}></div>
  );
};

export default Hero;


