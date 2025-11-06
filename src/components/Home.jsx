import React from "react";
import { useNavigate } from "react-router-dom";
import ImagenBackgroundHome from "../assets/images/ImagenBackgroundHome.gif";
import logoIcon from "../assets/images/Logo.png";
import iconFacebook from "../assets/images/IconFacebook.png";
import iconInstagram from "../assets/images/IconInstagram.png";
import iconLinkedin from "../assets/images/IconLinkedin.png";
import whatsappIcon from "../assets/images/whatsapp-icon.png"; // Importa tu icono aquí

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-[calc(100vh+100px)] bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${ImagenBackgroundHome})` }}
    >
      <header className="flex justify-between items-start px-8 md:px-16 pt-6 pb-4 w-full">
        <img src={logoIcon} alt="Logo" className="w-64 md:w-80 h-auto" />
        <div className="flex items-start mt-2 gap-4 md:gap-6">
          <img
            src={iconFacebook}
            alt="Facebook"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <img
            src={iconInstagram}
            alt="Instagram"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <img
            src={iconLinkedin}
            alt="LinkedIn"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </div>
      </header>

      <main className="flex flex-1 items-center justify-start px-8 md:px-24 w-full">
        <div className="w-full md:w-1/2 space-y-8 text-left -mt-12 md:-mt-16">
          <h1 className="text-5xl md:text-7xl font-f37 font-bold leading-tight text-[#FFBC57]">
            Transforma tu Visión en una Marca Poderosa
          </h1>

          <p className="text-xl md:text-2xl text-white font-nunito">
            En DesignMark Pro, te ofrecemos una solución integral para
            personalizar y organizar paquetes de servicios de diseño, desarrollo
            web y publicidad en redes sociales.
          </p>

          <button
            onClick={() => {
              localStorage.removeItem("selectedPackage"); // limpia si existía
              localStorage.setItem("visitSource", "home");
              navigate("/calendly");
            }}
            className="px-10 py-3 rounded-2xl text-white font-nunito text-2xl font-bold shadow-lg hover:opacity-90 transition bg-[#FFBC57]"
          >
            Hablemos
          </button>
        </div>
      </main>

      <a
        href="https://wa.me/573001234567?text=Hola,%20quiero%20más%20información"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg z-50"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12" />
      </a>
    </div>
  );
};

export default Home;
