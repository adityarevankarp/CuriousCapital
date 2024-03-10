import React, { useState } from "react";
import logo from "../assets/Curious Capital Logo (Final) W.png";
import "./Navbar.css";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav style={{ backgroundColor: "rgba(0,0,0,0.05)" }} className="navi">
      <div className="max-w-screen-xl lg:mx-auto p-8 custom-nav">
        <button
          onClick={toggleMobileMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-30 h-30 justify-center text-sm rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-transparent dark:text-gray-400 dark:hover:bg-transparent dark:focus:ring-transparent"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
        >
          {/* <span className="sr-only">Open main menu</span> */}
          {/* <svg
            className="md:w-5 md:h-5 "
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg> */}
          <img src={logo} className="h-8 w-20" alt="" />
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMobileMenuOpen ? "block" : "hidden"
          } sm:flex transition ease-in-out duration-700 transform`}
          id="navbar-default"
        >
          <ul className="navbar-custom lg:gap-24 md:gap-24 sm:gap-20 sm:justify-start text-white text-xl font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-0 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent ">
            <li style={{ marginRight: "-1em" }}>
              <a
                style={{ fontWeight: "400", fontSize: "1em" }}
                href="/"
                className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-pink-200 dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li style={{ marginRight: "-1em" }}>
              <a
                style={{ fontWeight: "400", fontSize: "1em" }}
                href="/about"
                className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-pink-200 dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li id="logoid" style={{ marginRight: "-1em", marginTop:'-0.5em' }}>
              <a
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse "
              >
                <img src={logo} className="h-12 logo" alt="" />
              </a>
            </li>

            <li style={{ marginRight: "-1em" }}>
              <a
                style={{ fontWeight: "400", fontSize: "1em" }}
                href="/portfolio"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-pink-200 dark:hover:bg-transparent"
              >
                Portfolio
              </a>
            </li>
            <li style={{ marginRight: "-1em" }}>
              <a
                style={{ fontWeight: "400", fontSize: "1em" }}
                href="/blogs"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-pink-200 dark:hover:bg-transparent"
              >
                Blogs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
