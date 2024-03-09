import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { Component } from "react";
import LandingPage from "./Pages/LandingPage";
import Hero from "./Components/Hero";


function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
