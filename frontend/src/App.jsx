import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { Component } from "react";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import Portfolio from "./Pages/Portfolio";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
