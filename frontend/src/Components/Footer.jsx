import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col justify-end items-center text-white opacity-60">
      <footer>
        <p>&copy; {currentYear} Curious Capital. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
