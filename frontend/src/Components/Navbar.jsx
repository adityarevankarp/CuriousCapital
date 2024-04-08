import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Curious Capital Logo (Final) W.png";
import "./Navbar.css";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav style={{ backgroundColor: "rgba(0,0,0,0.15)" }} className="navi">
      <div className="max-w-screen-xl lg:mx-auto p-7 custom-nav">
        <button
          onClick={toggleMobileMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-30 h-30 justify-center text-sm rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-transparent dark:text-gray-400 dark:hover:bg-transparent dark:focus:ring-transparent"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
        >
          
          <img src={logo} className="h-8 w-20" alt="" />
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex transition ease-in-out duration-700 transform`}
          id="navbar-default"
        >
          <ul className="navbar-custom lg:gap-24 md:gap-24 sm:gap-20 sm:justify-start text-white text-xl font-extrabold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-0 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent ">
            <li
              id="logoid"
              style={{ marginRight: "-1em", marginTop: "-0.5em" }}
            >
              <Link
                to="/"
                className="flex items-center space-x-3 rtl:space-x-reverse "
                style={{
                  filter: "drop-shadow(3px 3px 3px #010101)",
                }}
              >
                <img src={logo} className="h-10 logo" alt="" />
              </Link>
            </li>
            <li
              className="block sm:hidden "
              style={{ marginRight: "-1em" }}
              id="home-id"
            >
              <Link
                style={{
                  fontWeight: "600",
                  fontSize: "0.9em",
                  filter: "drop-shadow(9px 9px 8px #010101)",
                }}
                to="/"
                className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-pink-200 dark:hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li style={{ marginRight: "-1em" }}>
              <Link
                style={{
                  fontWeight: "600",
                  fontSize: "0.9em",
                  filter: "drop-shadow(9px 9px 8px #010101)",
                }}
                to="/about"
                className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-pink-200 dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            {/* <li style={{ marginRight: "-1em" }}>
              <Link
                style={{
                  fontWeight: "400",
                  fontSize: "1em",
                  filter: "drop-shadow(9px 9px 8px #010101)",
                }}
                to="/faqs"
                className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-pink-200 dark:hover:bg-transparent"
                aria-current="page"
              >
                FAQs
              </Link>
            </li> */}
            <li style={{ marginRight: "-1em" }}>
              <Link
                style={{
                  fontWeight: "600",
                  fontSize: "0.9em",
                  filter: "drop-shadow(9px 9px 8px #010101)",
                }}
                to="/portfolio"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-pink-200 dark:hover:bg-transparent"
              >
                Portfolio
              </Link>
            </li>
            <li style={{ marginRight: "-1em" }}>
              <Link
                style={{
                  fontWeight: "600",
                  fontSize: "0.9em",
                  filter: "drop-shadow(9px 9px 8px #010101)",
                }}
                to="/contact"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-pink-200 dark:hover:bg-transparent"
              >
                Social
              </Link>
            </li>
            <li style={{ marginRight: "-1em" }}>
              <Link
                style={{
                  fontWeight: "600",
                  fontSize: "0.9em",
                  filter: "drop-shadow(9px 9px 14px #010101)",
                }}
                to="/blogs"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-pink-200 dark:hover:bg-transparent"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
