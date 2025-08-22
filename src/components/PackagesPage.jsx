import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoIcon from "../assets/images/Logo.png";
import iconFacebook from "../assets/images/IconFacebook.png";
import iconInstagram from "../assets/images/IconInstagram.png";
import iconLinkedin from "../assets/images/IconLinkedin.png";
import Patrones2 from "../assets/images/Patrones2.png";
import Footer from "./Footer.jsx";

const PackagesPage = () => {
  const navigate = useNavigate();
  const [selectedCount, setSelectedCount] = useState(0);

  
  const handleCheckboxChange = (checked) => {
    setSelectedCount((prev) => prev + (checked ? 1 : -1));
  };

  // Datos de las tarjetas
  const packages = [
    {
      title: "Identidad de Marca (Branding)",
      color: "#FFBC57",
      description:
        "Todo lo que necesitas para que tu marca tenga una imagen profesional y coherente.",
      items: [
        "Naming → Creación del nombre de tu marca.",
        "Logotipo → Diseño original del logo de tu marca.",
        "Slogan → Frase clave que representa tu marca.",
        "Paleta de colores → Selección de colores coherentes con tu marca.",
        "Tipografía de marca → Letras que representan tu identidad visual.",
        "Moodboard → Collage visual con el estilo y personalidad de tu marca.",
        "Manual de marca → Guía de uso correcto de logo, colores y tipografías.",
        "Papelería corporativa → Tarjetas, hojas membreteadas, sobres, etc.",
        "Firma de correo → Firma visual para tus emails profesionales.",
        "Mockups del logo → Simulación del logo en diferentes objetos.",
        "Packaging → Diseño de empaques para tus productos.",
        "Patrones de marca → Texturas y formas visuales que te identifican.",
        "Recursos gráficos → Íconos, ilustraciones y elementos visuales.",
        "Estrategia de marca → Propósito, valores y diferenciación.",
        "Personalidad y tono de comunicación → Cómo habla tu marca."
      ]
    },
    {
      title: "Página Web",
      color: "#FFBC57",
      description: "Elige el tipo de sitio web que tu negocio necesita.",
      items: [
        "Sitio web básico → Página informativa con lo esencial.",
        "Tienda virtual (E-commerce) → Vende productos o servicios online.",
        "Página de aterrizaje (Landing Page) → Ideal para campañas o captar clientes.",
        "Web de reservas → Para negocios que agendan citas o servicios.",
        "Blog profesional → Comparte artículos y contenido especializado.",
        "Web multi-idioma → Tu sitio en varios idiomas.",
        "Optimización SEO básica → Mejora el posicionamiento en Google.",
        "Dominio y hosting → Te ayudamos a conseguir y configurar tu sitio.",
        "Mantenimiento mensual → Actualizaciones y soporte constante.",
        "Integración con WhatsApp / RRSS → Contacto directo desde la web.",
        "Formularios personalizados → Para cotizaciones, contacto o encuestas.",
        "Chat en vivo → Comunicación instantánea con visitantes."
      ]
    },
    {
      title: "Redes Sociales (Social Media)",
      color: "#FFBC57",
      description: "Haz crecer tu presencia digital con contenido y estrategia en redes.",
      items: [
        "Estrategia de redes → Qué, cómo y cuándo publicar.",
        "Diseño de perfiles → Imagen de perfil, portada y biografía optimizada.",
        "Plantillas editables → Diseños que puedes reutilizar fácilmente.",
        "Paquete de publicaciones → Diseño de X posts al mes.",
        "Historias destacadas → Íconos y portadas para Instagram.",
        "Calendario de contenido → Planificación mensual de publicaciones.",
        "Gestión de comunidad → Respondemos y moderamos tus redes.",
        "Publicidad en redes (Meta Ads) → Campañas en Facebook e Instagram.",
        "Informe de métricas → Análisis mensual del rendimiento.",
        "Reels / Videos cortos → Contenido en formato vertical para TikTok e Instagram.",
        "Concursos o promociones"
      ]
    }
  ];

  return (
    <div className="bg-[#0046A0] min-h-screen">
      
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

      
      <main className="mt-12 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-transparent border-2 rounded-3xl border-[#FFBC57] p-6 flex flex-col"
          >
            <h3
              className="text-2xl md:text-3xl font-f37 font-normal text-center mb-4"
              style={{ color: pkg.color }}
            >
              {pkg.title}
            </h3>
            <p className="text-white font-nunito text-justify mb-4">
              {pkg.description}
            </p>
            <ul className="space-y-2">
              {pkg.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1"
                    onChange={(e) => handleCheckboxChange(e.target.checked)}
                  />
                  <span className="text-white font-nunito">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>

      
      <div className="mt-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 px-4">
        <p className="text-white font-nunito text-xl text-center">
          Inversión en tu futuro digital
        </p>
        <div className="w-12 h-12 border-2 border-[#FFBC57] rounded-md flex items-center justify-center text-white font-nunito text-lg">
          {selectedCount}
        </div>
      </div>

      <section
  className="w-full mt-16 py-16 px-8 flex flex-col items-center"
  style={{
    backgroundImage: `url(${Patrones2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="text-center max-w-3xl">
    <h2 className="text-5xl md:text-6xl font-f37 text-[#FFBC57] mb-6">
      Extras
    </h2>
    <div className="text-white font-nunito text-lg md:text-xl text-justify space-y-4">
      <p>📂 Espacio Extra: Para que tu web crezca sin límites.</p>
      <p>⚡ Funcionalidades Premium: Desde reservas online hasta integraciones que potenciarán tu sitio.</p>
      <p>🛡️ Seguridad Reforzada: Protección anti-hackers nivel.</p>
    </div>
  </div>
</section>




      
      <Footer />
    </div>
  );
};

export default PackagesPage;