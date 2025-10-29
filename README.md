![head](src/assets/images/DMark.gif)
---
## 📎 Descripción

**DesignMark Pro** es una aplicación web desarrollada con **React.js**, **Tailwind CSS**, **Node.js** y **MySQL**, enfocada en la creación y personalización de paquetes de servicios de diseño y marketing digital.  
Permite a los usuarios **registrarse, iniciar sesión, seleccionar servicios, generar cotizaciones y agendar reuniones virtuales**.  

El proyecto combina una **interfaz moderna y responsive** con una base de datos MySQL conectada mediante Express, logrando una arquitectura escalable y eficiente.  
Fue desarrollado aplicando **metodologías ágiles (SCRUM)**, con **Jira** para la gestión de tareas y **Figma** para el prototipo visual.

---

## 🗂️ Índice
<details open>
    <summary>
        <a href="#readme-index" title="Más...">✨ DesignMark Pro ✨</a>
    </summary>

- 🚀 [Tech Stack](#readme-stack)
- ⚙️ [Instalación y ejecución](#readme-install)
- 📋 [Tablero Jira](#readme-jira)
- 🎨 [Prototipo en Figma](#readme-figma)
- 🧩 [Diagrama del modelo de dominio](#readme-domain)
- 🗃️ [Estructura del proyecto](#readme-structure)
- 👩‍💻 [Contacto](#readme-contact)
- 🧾 [Licencia](#readme-license)

</details>

---

<a name="readme-stack"></a>

## 🚀 Tech Stack

- [![React][react-badge]][react-url] → Desarrollo del frontend interactivo y modular.  
- [![Tailwind CSS][tailwind-badge]][tailwind-url] → Estilos modernos, rápidos y responsive.  
- [![NodeJS][node-badge]][node-url] → Backend con Express y API REST.  
- [![MySQL][mysql-badge]][mysql-url] → Base de datos relacional para gestión de usuarios.  
- [![Vite][vite-badge]][vite-url] → Entorno de desarrollo rápido.  
- [![GitHub][github-badge]][github-url] → Control de versiones y despliegue.  

<p align="right">(<strong><a href="#readme-index">Volver al índice</a></strong>)</p>

---

<a name="readme-install"></a>

## ⚙️ Instalación y ejecución

1️⃣ **Clonar el repositorio**
```bash
git clone https://github.com/angieli13/DESIGNMARK-PRO.git
cd DESIGNMARK-PRO
2️⃣ Instalar dependencias

bash
Copiar código
npm install
3️⃣ Ejecutar el servidor (backend)

bash
Copiar código
npm run server
4️⃣ Ejecutar el cliente (frontend)

bash
Copiar código
npm run dev
Cliente → http://localhost:5173

Servidor API → http://localhost:5000

<p align="right">(<strong><a href="#readme-index">Volver al índice</a></strong>)</p>
<a name="readme-jira"></a>

📋 Tablero Jira
El progreso de DesignMark Pro fue gestionado con la metodología SCRUM usando Jira Software.
Se documentaron las fases de planificación, diseño, desarrollo, pruebas y entrega.

📌 Accede al tablero aquí:
👉 Tablero Jira - DesignMark Pro

<p align="right">(<strong><a href="#readme-index">Volver al índice</a></strong>)</p>
<a name="readme-figma"></a>

🎨 Prototipo en Figma
El diseño UI/UX fue creado en Figma, definiendo estructura visual, paleta de colores, tipografías y componentes principales antes del desarrollo.

📌 Prototipo Figma - DesignMark Pro (enlace de ejemplo, reemplázalo con el tuyo)

<p align="center"> <img src="https://github.com/angieli13/DESIGNMARK-PRO/blob/develop/src/assets/images/FIGMA.png?raw=true" alt="Prototipo Figma DesignMark Pro" width="600"> </p> <p align="right">(<strong><a href="#readme-index">Volver al índice</a></strong>)</p>
<a name="readme-domain"></a>

🧩 Diagrama del modelo de dominio
El siguiente diagrama representa las entidades principales del sistema: Usuarios, Servicios, Paquetes y Reuniones, así como sus relaciones dentro de la base de datos.

<p align="center"> <img src="https://github.com/angieli13/DESIGNMARK-PRO/blob/develop/src/assets/images/grafica.png?raw=true" alt="Diagrama del modelo de dominio" width="650"> </p> <p align="right">(<strong><a href="#readme-index">Volver al índice</a></strong>)</p>
<a name="readme-structure"></a>

🗃️ Estructura del proyecto
La arquitectura de DesignMark Pro está dividida en backend, frontend y recursos compartidos para mantener orden y escalabilidad.

bash
Copiar código
DESIGNMARK-PRO/
│
├── public/
├── server/
│   ├── database.js
│   └── index.js
│
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── LoginPage.jsx
│   │   ├── PackagesPage.jsx
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── WhatWeDo.jsx
│   │   ├── Configurator.jsx
│   │   ├── BuildYourGiant.jsx
│   │   ├── CalendlyPage.jsx
│   │   └── Footer.jsx
│   ├── Styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
📘 Descripción breve:

server/ → Conexión MySQL y lógica del backend.

src/components/ → Componentes de interfaz React.

src/assets/ → Imágenes y recursos gráficos.

src/Styles/ → Estilos globales en Tailwind.

.env → Variables de entorno.

vite.config.js → Configuración del entorno.

<p align="right">(<strong><a href="#readme-index">Volver al índice</a></strong>)</p>
<a name="readme-contact"></a>

👩‍💻 Contacto
Angie Martínez
Desarrolladora Frontend & UX/UI Designer
📧 angiequimica13@gmail.com
🌐 GitHub - angieli13
💼 LinkedIn - Angie Combita

<p align="center"> <img src="https://github.com/angieli13/DESIGNMARK-PRO/blob/develop/src/assets/images/ImagenPrincipal.svg?raw=true" alt="Vista previa DesignMark Pro" width="600"> </p> <p align="right">(<strong><a href="#readme-index">Volver al índice</a></strong>)</p>
<a name="readme-license"></a>

🧾 Licencia
Este proyecto fue desarrollado con fines educativos y de práctica profesional.
© 2025 DesignMark Pro – Todos los derechos reservados.
<!-- Repository Links -->

<!-- Tech Stack Links -->

[react-url]: https://es.react.dev/
[tailwind-url]: https://tailwindcss.com/
[node-url]: https://nodejs.org/es
[mysql-url]: https://www.mysql.com/
[vite-url]: https://vite.dev/
[github-url]: https://github.com/
[react-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[tailwind-badge]: https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white
[node-badge]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[mysql-badge]: https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white
[vite-badge]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E
[github-badge]: https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white

<!-- Tech Stack Links -->

