import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import logoIcon from "../assets/images/Logo.png";
import iconFacebook from "../assets/images/IconFacebook.png";
import iconInstagram from "../assets/images/IconInstagram.png";
import iconLinkedin from "../assets/images/IconLinkedin.png";
import Patrones2 from "../assets/images/Patrones2.png";
import Footer from "./Footer.jsx";

// URL del backend
const API_URL = "https://designmark-pro.onrender.com";

const PackagesPage = () => {
  const navigate = useNavigate();

  const [selectedServices, setSelectedServices] = useState([]);
  const selectedCount = selectedServices.length;

  // Redirige si NO está logueado
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") navigate("/login");
  }, [navigate]);

  // Manejar selección de servicios
  const handleCheckboxChange = (pkgTitle, service, checked) => {
    setSelectedServices((prev) =>
      checked
        ? [...prev, { paquete: pkgTitle, servicio: service }]
        : prev.filter(
            (item) =>
              !(item.paquete === pkgTitle && item.servicio === service)
          )
    );
  };

  // Cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  // Guardar paquete
  const handleSavePackage = useCallback(async () => {
    if (selectedCount === 0) {
      alert("Selecciona al menos un servicio antes de continuar.");
      return;
    }

    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      alert("Debes iniciar sesión para guardar tu paquete.");
      navigate("/login");
      return;
    }

    try {
      const userResponse = await fetch(
        `${API_URL}/api/get-user/${userEmail}`
      );
      const user = await userResponse.json();

      if (!user?.id) {
        alert("Error al identificar usuario.");
        return;
      }

      const response = await fetch(`${API_URL}/api/save-package`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: user.id,
          nombre_paquete: "Paquete personalizado",
          servicios: selectedServices,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem(
          "selectedPackage",
          JSON.stringify(selectedServices)
        );
        localStorage.setItem("visitSource", "packages");
        navigate("/calendly");
      } else {
        alert(data.error || "Error al guardar el paquete");
      }
    } catch (err) {
      console.error(err);
      alert("Error de conexión con el servidor");
    }
  }, [selectedCount, selectedServices, navigate]);

  // Data agrupada para evitar re-render grande
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
        "Moodboard → Estilo visual.",
        "Manual de marca → Guía de uso correcto.",
        "Papelería corporativa.",
        "Firma de correo.",
        "Mockups del logo.",
        "Packaging.",
        "Patrones de marca.",
        "Recursos gráficos.",
        "Estrategia de marca.",
        "Personalidad y tono de comunicación.",
      ],
    },
    {
      title: "Página Web",
      color: "#FFBC57",
      description: "Elige el tipo de sitio web que tu negocio necesita.",
      items: [
        "Sitio web básico.",
        "Tienda virtual (E-commerce).",
        "Landing Page.",
        "Web de reservas.",
        "Blog profesional.",
        "Web multi-idioma.",
        "Optimización SEO básica.",
        "Dominio y hosting.",
        "Mantenimiento mensual.",
        "Integración con WhatsApp / RRSS.",
        "Formularios personalizados.",
        "Chat en vivo.",
      ],
    },
    {
      title: "Redes Sociales (Social Media)",
      color: "#FFBC57",
      description: "Haz crecer tu presencia digital con contenido y estrategia.",
      items: [
        "Estrategia digital.",
        "Diseño de perfiles.",
        "Plantillas editables.",
        "Paquete de publicaciones.",
        "Historias destacadas.",
        "Calendario de contenido.",
        "Gestión de comunidad.",
        "Publicidad (Meta Ads).",
        "Informe de métricas.",
        "Reels / Videos cortos.",
        "Concursos y promociones.",
      ],
    },
  ];

  return (
    <div className="bg-[#0046A0] min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 md:px-16 pt-6">
        <img
          src={logoIcon}
          alt="Logo"
          className="w-48 md:w-72 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={handleLogout}
            className="bg-[#FFBC57] text-[#0046A0] font-bold px-4 py-2 rounded-lg hover:opacity-90"
          >
            Cerrar sesión
          </button>
          <img src={iconFacebook} className="w-8 md:w-10" />
          <img src={iconInstagram} className="w-8 md:w-10" />
          <img src={iconLinkedin} className="w-8 md:w-10" />
        </div>
      </header>

      {/* MAIN */}
      <main className="mt-10 max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border-2 rounded-3xl border-[#FFBC57] p-6 bg-transparent"
          >
            <h3
              className="text-2xl md:text-3xl font-f37 text-center mb-4"
              style={{ color: pkg.color }}
            >
              {pkg.title}
            </h3>

            <p className="text-white font-nunito text-justify mb-4">
              {pkg.description}
            </p>

            <ul className="space-y-2">
              {pkg.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1"
                    onChange={(e) =>
                      handleCheckboxChange(pkg.title, item, e.target.checked)
                    }
                  />
                  <span className="text-white font-nunito">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>

      {/* SELECCIÓN */}
      <div className="mt-12 text-center px-6">
        <p className="text-white font-nunito text-xl">
          Servicios seleccionados: <strong>{selectedCount}</strong>
        </p>

        <button
          onClick={handleSavePackage}
          className="mt-4 bg-[#FFBC57] text-[#0046A0] font-bold px-8 py-3 rounded-lg hover:opacity-90"
        >
          Guardar paquete y agendar cita
        </button>
      </div>

      {/* EXTRAS */}
      <section
        className="mt-16 py-16 px-8 text-center"
        style={{
          backgroundImage: `url(${Patrones2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-5xl md:text-6xl font-f37 text-[#FFBC57] mb-6">
          Extras
        </h2>

        <div className="text-white font-nunito text-lg md:text-xl space-y-4 max-w-3xl mx-auto">
          <p>📂 Espacio Extra: Para que tu web crezca sin límites.</p>
          <p>
            ⚡ Funcionalidades Premium: Desde reservas online hasta integraciones
            avanzadas.
          </p>
          <p>🛡️ Seguridad Reforzada.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackagesPage;
