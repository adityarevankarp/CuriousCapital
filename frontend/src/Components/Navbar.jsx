import React from 'react';

const Navbar = () => {
  return (
    <nav className="text-black py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <a href="#" className="mr-4">Group</a>
        <a href="#" className="mr-4">Portfolio</a>
        <a href="#" className="mr-4">About</a>
      </div>
      <h1 className="text-pink font-bold text-2xl">CURIOUS CAPITAL</h1>
      <div className="flex items-center">
        <a href="#" className="mr-4">Insight</a>
        <a href="#" className="mr-4">Collection</a>
       
      </div>
    </nav>
  );
};

export default Navbar;