import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import { useNavigate } from "react-router-dom";
import logoIcon from "../assets/images/Logo.png";
import iconFacebook from "../assets/images/IconFacebook.png";
import iconInstagram from "../assets/images/IconInstagram.png";
import iconLinkedin from "../assets/images/IconLinkedin.png";
import Footer from "./Footer.jsx";

const CalendlyPage = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState([]);
  const [visitSource, setVisitSource] = useState("home");

  useEffect(() => {
    const source = localStorage.getItem("visitSource") || "home";
    setVisitSource(source);

    const stored = localStorage.getItem("selectedPackage");
    if (stored) setSelectedPackage(JSON.parse(stored));
  }, []);

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
          <img src={iconFacebook} alt="Facebook" className="w-10 h-10" />
          <img src={iconInstagram} alt="Instagram" className="w-10 h-10" />
          <img src={iconLinkedin} alt="LinkedIn" className="w-10 h-10" />
        </div>
      </header>

      <main className="flex flex-col flex-1 justify-start items-center px-4 py-8 gap-8">
        {visitSource === "packages" && selectedPackage.length > 0 && (
          <div className="bg-white text-[#0046A0] rounded-2xl shadow-lg w-full max-w-3xl p-6">
            <h2 className="text-3xl font-f37 text-center mb-4">
              Tu paquete seleccionado
            </h2>
            <ul className="list-disc list-inside font-nunito text-lg">
              {selectedPackage.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.paquete}:</strong> {item.servicio}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="w-full max-w-4xl shadow-lg rounded-xl overflow-hidden">
          <InlineWidget url="https://calendly.com/angiequimica13/30min" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CalendlyPage;
