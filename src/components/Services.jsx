import React from "react";
import IconPersonalizacion from "../assets/images/IconPersonalizacion.png";
import IconTransparencia from "../assets/images/IconTransparencia.png";
import IconOptimizacion from "../assets/images/IconOptimizacion.png";
import IconIntegracion from "../assets/images/IconIntegracion.png";

const cards = [
  {
    id: 1,
    bg: "#FFBC57",
    textColorClass: "text-black",
    icon: IconPersonalizacion,
    title: "Personalización Completa",
    desc: "Crea y ajusta paquetes de servicios según tus necesidades, con una interfaz intuitiva que te da control total sobre cada detalle.",
  },
  {
    id: 2,
    bg: "#0046A0",
    textColorClass: "text-white",
    icon: IconTransparencia,
    title: "Transparencia en Precios",
    desc: "Visualiza en tiempo real cómo cada elección impacta en el precio total, sin sorpresas ni costos ocultos.",
  },
  {
    id: 3,
    bg: "#FFBC57",
    textColorClass: "text-black",
    icon: IconOptimizacion,
    title: "Optimización de Recursos",
    desc: "Ahorra tiempo automatizando la cotización y organización de servicios, permitiendo que te enfoques en lo que realmente importa.",
  },
  {
    id: 4,
    bg: "#0046A0",
    textColorClass: "text-white",
    icon: IconIntegracion,
    title: "Integración Eficiente",
    desc: "Crea y ajusta paquetes de servicios según tus necesidades, con una interfaz intuitiva que te da control total sobre cada detalle.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1600px] mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              className={[
                "rounded-3xl p-8 shadow-lg transform transition-transform duration-300 hover:-translate-y-4 text-center",
                card.textColorClass,
                "flex flex-col justify-between h-full",
              ].join(" ")}
              style={{ backgroundColor: card.bg }}
            >
              <div>
                <img
                  src={card.icon}
                  alt={card.title}
                  className="mx-auto w-40 h-36 object-contain mb-6"
                />
                <h3 className="font-f37 font-bold text-3xl md:text-4xl leading-tight mb-3 break-words">
                  {card.title}
                </h3>
                <p className="font-nunito text-base md:text-xl leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}