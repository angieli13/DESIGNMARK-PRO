import React from "react";
import LogoB from "../assets/images/LogoB.png";
import InstagramB from "../assets/images/InstagramB.png";
import InB from "../assets/images/InB.png";
import FaceB from "../assets/images/FaceB.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-4 flex flex-col items-center">
      <img src={LogoB} alt="Logo" className="w-24 md:w-32 mb-3" />

      <div className="flex gap-3 md:gap-4">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={InstagramB} alt="Instagram" className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={InB} alt="LinkedIn" className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={FaceB} alt="Facebook" className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
