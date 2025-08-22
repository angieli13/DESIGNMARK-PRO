import React from "react";
import Patrones from "../assets/images/Patrones.png";

const BuildYourGiant = () => {
  return (
    <section
      className="w-full min-h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${Patrones})` }}
    >
      <div className="text-center px-6 md:px-12">
        {/* Texto más pequeño en Nunito Sans */}
        <h2 className="text-3xl md:text-5xl font-nunito text-white mb-6">
          UN SITIO WEB A UNA GRAN MARCA
        </h2>

        <h1
          className="text-5xl md:text-8xl font-f37 font-normal"
          style={{ color: "#FFBC57" }}
        >
          CONSTRUYAMOS JUNTOS TU GIGANTE
        </h1>
      </div>
    </section>
  );
};

export default BuildYourGiant;
