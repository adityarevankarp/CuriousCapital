import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { HashLoader } from "react-spinners";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
const cmsHost = import.meta.env.VITE_CMS_DOMAIN || "http://localhost:5400";
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const callAPI = () =>
    // loads the blog contents
    {
      fetch(`${cmsHost}/api/blog/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.msg === "not found") {
            window.location.replace("/pagenotfound");
          }
          setBlog(data);
          setLoading(false);
        });
    };
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <div>
      <Hero />
      <div className="h-auto z-1 relative">
        <Navbar />
      </div>
      {/* <HashLoader
                className='absolute mt-[50%] md:mt-[150px] mx-auto align-middle '
                color='#36d7b7'
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> */}
      {!loading && (
        <div className="relative text-white flex justify-center">
          <div className="w-full lg:w-[60%] m-2 backdrop-blur-md">
            <h1 className="text-3xl p-3 text-center border-b-2 py-6">
              {blog.title}
            </h1>
            {blog.imgUrl && (
              <div className="flex justify-center">
                <img
                  alt="Image"
                  className="py-6 drop-shadow-xl"
                  src={blog.imgUrl}
                />
              </div>
            )}
            <div className="flex justify-center w-full">
              <div
                style={{ fontFamily: "Bebas Neue" }}
                id="blogContent"
                className="shadow-lg overflow-hidden h-max font-lora p-4 pb-28 lg:pb-14 leading-loose box-shadow-lg bg-transparent text-justify resize-none "
              >
                <ReactMarkdown
                  children={blog.content}
                  rehypePlugins={[rehypeRaw]}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="relative z-1 flex flex-col justify-end items-center m-4">
        <Footer />
      </div>
    </div>
  );
};
export default Blog;
