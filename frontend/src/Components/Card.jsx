import React, { useState, useEffect } from "react";
import "./Card.css";

function Modal({ isOpen, onClose, text ,logo_link}) {
  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleCloseModal);
    }

    return () => {
      document.removeEventListener("click", handleCloseModal);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleCloseModal}>
      <div className="bg-[#e55db2] rounded-lg max-w-[30rem] mx-3">
        <p className="p-8 text-[#422772] font-normal">{text}</p>
        <a
          href={logo_link}
          className="text-[#422772] p-8 mb-4 font-semibold px-8"
        >
          VISIT WEBSITE  &gt;
        </a>
        <br></br>,
      </div>
    </div>
  );
}

function Card({ logo_url, logo_name, modalText ,logo_link}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="hover:-translate-y-2 group bg-[#2A1949] duration-500 md:h-32 md:w-32 lg:h-40 3xl:w-48 3xl:h-48 lg:w-40 4xl:w-39 xxs:w-auto flex flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute blur z-10 fill-[#422772] duration-500 group-hover:blur-none group-hover:scale-105"
        >
          <path transform="translate(100 100)"></path>
        </svg>

        <div className="z-20 flex flex-col justify-center items-center">
          <img
            src={logo_url}
            className="h-24 logo cursor-pointer"
            alt=""
            onClick={handleLogoClick}
          />
          <p className="text-[#e55db2] opacity-0 group-hover:opacity-100 hidden md:block">{logo_name}</p>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} text={modalText} logo_link={logo_link} />
    </div>
  );
}

export default Card;


