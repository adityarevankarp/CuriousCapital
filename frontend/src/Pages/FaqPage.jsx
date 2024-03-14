import React from "react";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
const FAQs = [
  {
    question: "How can I pay for my appointment?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
  },
  {
    question:
      "Is the cost of the appointment covered by private health insurance?",
    answer: "Answer for the second question.",
  },
  {
    question: "Do I need a referral?",
    answer: "Answer for the third question.",
  },
  {
    question: "What are your opening hours?",
    answer: "Answer for the fourth question.",
  },
  {
    question: "What can I expect at my first consultation?",
    answer: "Answer for the fifth question.",
  },
];
function FaqPage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="h-auto w-auto z-1 relative">
        <Navbar />
      </div>
      <div className="mx-auto relative">
        <section className="bg-transparent">
          <div className="container max-w-4xl px-6 py-10 mx-auto">
            <p
              className="text-[#e55db2] text-4xl font-bold text-center my-2"
              style={{ fontFamily: "Bebas Neue" }}
            >
              FAQs
            </p>

            <div className="mt-12 space-y-8 ">
              {FAQs.map((faq, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-100 rounded-lg dark:border-gray-700 faq-bg"
                >
                  <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      {faq.question}
                    </h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18 12H6"
                        />
                      </svg>
                    </span>
                  </button>

                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    {faq.answer}
                  </p>
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
  );
}

export default FaqPage;
