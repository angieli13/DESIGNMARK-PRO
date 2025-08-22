import React from "react";
import { InlineWidget } from "react-calendly";
import { useNavigate } from "react-router-dom";
import logoIcon from "../assets/images/Logo.png";
import iconFacebook from "../assets/images/IconFacebook.png";
import iconInstagram from "../assets/images/IconInstagram.png";
import iconLinkedin from "../assets/images/IconLinkedin.png";
import Footer from "../components/Footer.jsx";

const CalendlyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#0046A0]">
      <header className="flex justify-between items-start px-8 md:px-16 pt-6 pb-4 w-full">
        <img
          src={logoIcon}
          alt="Logo"
          className="w-64 md:w-80 h-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="flex items-start mt-2 gap-4 md:gap-6">
          <img src={iconFacebook} alt="Facebook" className="w-10 h-10 md:w-12 md:h-12" />
          <img src={iconInstagram} alt="Instagram" className="w-10 h-10 md:w-12 md:h-12" />
          <img src={iconLinkedin} alt="LinkedIn" className="w-10 h-10 md:w-12 md:h-12" />
        </div>
      </header>

      <main className="flex flex-1 justify-center items-start px-4 py-12">
        <div className="w-full max-w-4xl shadow-lg rounded-xl overflow-hidden">
          <InlineWidget url="https://calendly.com/angiequimica13/30min" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CalendlyPage;
