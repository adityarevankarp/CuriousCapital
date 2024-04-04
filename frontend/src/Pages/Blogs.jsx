import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Css/Blogs.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
const cmsHost = import.meta.env.VITE_CMS_DOMAIN;
const cmsUsername = import.meta.env.VITE_CMS_USERNAME || 'TEST';
function Blogs() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${cmsHost}/api/blog/author/${cmsUsername}`);
        const jsonData = await response.json();
        console.log(jsonData[0].account.username)
        setBlogs(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <div className="overflow-x-hidden">
        <Hero />
        <div className="h-auto w-auto z-1 relative">
          <Navbar />
        </div>
        {/* Actual Blogs */}
        <div className="relative mx-auto sm:mx-0 md:mx-6 lg:mx-24 xl:mx-78 2xl:mx-88 4xl:mx-98 imac:mx-180">
          <p
            className="text-[#e55db2] text-4xl font-bold text-center my-8"
            style={{ fontFamily: "Bebas Neue" }}
          >
            BLOGS
          </p>
          <section className="text-gray-400 bg-transparent body-font overflow-hidden ">
            <div className="container px-5 py-24 mx-auto blog-bg">
              <div className="-my-8 divide-y-2 divide-gray-800 ">
                {blogs.map((blog, index) => (
                  <div
                    key={index}
                    className="py-8 flex flex-wrap md:flex-nowrap"
                  >
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-white"></span>
                      <span className="mt-1 text-white text-sm">
                        {blog.createdAt}
                      </span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                        {blog.title}
                      </h2>
                      <Link
                        to={`/blog/${blog._id}`}
                        className="text-red-400 inline-flex items-center mt-4"
                      >
                        ...Learn More
                        {/* <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg> */}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="relative z-1 flex flex-col justify-end items-center w-screen h-screen">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
