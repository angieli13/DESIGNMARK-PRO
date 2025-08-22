import React from "react";
import QueHacemos from "../assets/images/QueHacemos.gif";
import Check from "../assets/images/Check.png";

const WhatWeDo = () => {
  return (
    <section className="bg-[#0046A0] w-full py-16 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Columna Izquierda - Imagen más grande */}
        <div className="flex justify-center">
          <img
            src={QueHacemos}
            alt="¿Qué Hacemos?"
            className="w-full max-w-lg md:max-w-xl rounded-xl"
          />
        </div>

        {/* Columna Derecha - Texto alineado a la izquierda */}
        <div className="text-white flex flex-col items-start">
          {/* Solo el título centrado */}
          <h2
            className="text-4xl font-bold mb-4 w-full text-center"
            style={{ fontFamily: "F37 Ginger" }}
          >
            ¿Qué Hacemos?
          </h2>

          <p
            className="text-lg mb-8 leading-relaxed text-left"
            style={{ fontFamily: "Nunito Sans" }}
          >
            En <span className="font-semibold">DesignMark Pro</span>, convertimos
            tus ideas en resultados. Nuestra plataforma te permite crear y
            personalizar paquetes de diseño y marketing digital a tu medida, con
            cotización instantánea y transparente. Tú eliges lo que necesitas:
            identidad de marca, desarrollo web o gestión de campañas.
          </p>

          {/* Rectángulo con borde y línea vertical */}
          <div className="relative border-4 border-[#FFBC57] rounded-2xl p-6 flex w-full max-w-lg">
            
            {/* Columna izquierda - Checks */}
            <div className="flex-1 flex flex-col justify-center space-y-4 pr-6">
              <div className="flex items-center gap-3">
                <img src={Check} alt="Check" className="w-6 h-6" />
                <p className="text-base text-white" style={{ fontFamily: "Nunito Sans" }}>
                  DISEÑO QUE CONECTA.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img src={Check} alt="Check" className="w-6 h-6" />
                <p className="text-base text-white" style={{ fontFamily: "Nunito Sans" }}>
                  TECNOLOGÍA QUE RESPONDE.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img src={Check} alt="Check" className="w-6 h-6" />
                <p className="text-base text-white" style={{ fontFamily: "Nunito Sans" }}>
                  RESULTADOS MEDIBLES.
                </p>
              </div>
            </div>

            
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/4 border-r-4 border-[#FFBC57]"></div>

            
            <div className="flex-1 text-center pl-6 flex flex-col justify-center">
              <p className="text-lg text-white mb-2" style={{ fontFamily: "Nunito Sans" }}>
                Proyectos entregados
              </p>
              <p className="text-5xl font-extrabold text-[#FFBC57]">350+</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
