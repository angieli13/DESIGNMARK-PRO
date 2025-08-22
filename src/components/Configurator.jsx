import React from "react";
import { useNavigate } from "react-router-dom"; 
import ArmaloGif from "../assets/images/Armalo.gif";

const Configurator = () => {
  const navigate = useNavigate(); 

  return (
    <section className="w-full bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[55vh]">
        
        
        <div className="md:pr-12 flex flex-col justify-center items-start">
          <h2 
            className="text-4xl md:text-5xl font-normal text-black mb-6"
            style={{ fontFamily: "F37 Finger, sans-serif" }}
          >
            LLEVA TU NEGOCIO AL SIGUIENTE NIVEL
          </h2>
          
          
          <button
            className="px-6 py-3 rounded-2xl text-white text-lg md:text-xl inline-block"
            style={{
              backgroundColor: "#FFBC57",
              fontFamily: "F37 Finger, sans-serif",
            }}
            onClick={() => navigate("/packages")} 
          >
            Ármalo tú mismo
          </button>
        </div>

        <div className="flex justify-center">
          <img 
            src={ArmaloGif} 
            alt="Ármalo tú mismo" 
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Configurator;