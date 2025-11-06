import React, { useState, useEffect } from "react";
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
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") navigate("/login");
  }, [navigate]);

  // Manejar selección de servicios
  const handleCheckboxChange = (pkgTitle, service, checked) => {
    if (checked) {
      setSelectedServices((prev) => [
        ...prev,
        { paquete: pkgTitle, servicio: service },
      ]);
      setSelectedCount((prev) => prev + 1);
    } else {
      setSelectedServices((prev) =>
        prev.filter(
          (item) => !(item.paquete === pkgTitle && item.servicio === service)
        )
      );
      setSelectedCount((prev) => prev - 1);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("selectedPackage");
    navigate("/login");
  };

  // Guardar paquete seleccionado y redirigir
  const handleSavePackage = async () => {
  if (selectedServices.length === 0) {
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
    // 1️⃣ Obtener el ID del usuario desde el backend
    const userResponse = await fetch(`http://localhost:5000/api/get-user/${userEmail}`);
    const user = await userResponse.json();

    if (!user?.id) {
      alert("Error al identificar usuario.");
      return;
    }

    // 2️⃣ Guardar el paquete en la base de datos
    const response = await fetch("http://localhost:5000/api/save-package", {
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
      localStorage.setItem("selectedPackage", JSON.stringify(selectedServices));
      localStorage.setItem("visitSource", "packages");
      navigate("/calendly");
    } else {
      alert(data.error || "Error al guardar el paquete");
    }
  } catch (err) {
    console.error(err);
    alert("Error de conexión con el servidor");
  }
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
        "Personalidad y tono de comunicación → Cómo habla tu marca.",
      ],
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
        "Chat en vivo → Comunicación instantánea con visitantes.",
      ],
    },
    {
      title: "Redes Sociales (Social Media)",
      color: "#FFBC57",
      description:
        "Haz crecer tu presencia digital con contenido y estrategia en redes.",
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
        "Concursos o promociones",
      ],
    },
  ];

  return (
    <div className="bg-[#0046A0] min-h-screen">
      <header className="flex justify-between items-center px-8 md:px-16 pt-6 pb-4 w-full">
        <img
          src={logoIcon}
          alt="Logo"
          className="w-64 md:w-80 h-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={handleLogout}
            className="bg-[#FFBC57] text-[#0046A0] font-bold px-4 py-2 rounded-lg hover:opacity-90"
          >
            Cerrar sesión
          </button>
          <img src={iconFacebook} alt="Facebook" className="w-10 h-10" />
          <img src={iconInstagram} alt="Instagram" className="w-10 h-10" />
          <img src={iconLinkedin} alt="LinkedIn" className="w-10 h-10" />
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

      <div className="mt-12 flex flex-col items-center justify-center gap-6 px-4">
        <p className="text-white font-nunito text-xl text-center">
          Servicios seleccionados: <strong>{selectedCount}</strong>
        </p>
        <button
          onClick={handleSavePackage}
          className="bg-[#FFBC57] text-[#0046A0] font-bold px-8 py-3 rounded-lg hover:opacity-90"
        >
          Guardar paquete y agendar cita
        </button>
      </div>
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
            <p>
              ⚡ Funcionalidades Premium: Desde reservas online hasta
              integraciones que potenciarán tu sitio.
            </p>
            <p>🛡️ Seguridad Reforzada: Protección anti-hackers nivel.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackagesPage;
