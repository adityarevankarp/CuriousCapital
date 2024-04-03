import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { Component } from "react";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import Portfolio from "./Pages/Portfolio";
import Blogs from "./Pages/Blogs";
import Blog from "./Pages/Blog.jsx";
import Contact from "./Pages/Contact";
// import Navbar from "./Components/Navbar";
import { BackgroundProvider } from "./BackgroundContext.jsx";
import FaqPage from "./Pages/FaqPage.jsx";
import Avatar from "./Components/Avatar.jsx";

function App() {
  return (
    <>
      <BackgroundProvider>
        {/* <Navbar/> */}
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="blog/:id" element={<Blog/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faqs" element={<FaqPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </BackgroundProvider>
    </>
  );
}

export default App;
