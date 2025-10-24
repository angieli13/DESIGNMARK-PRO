<p align="center">
  <img src="src/assets/images/DMark.gif" alt="DesignMark Pro Logo" width="250">
</p>

# 🎨 DesignMark Pro

**DesignMark Pro** es una aplicación web creada para que los usuarios puedan **configurar paquetes de servicios de diseño y marketing** de manera sencilla, visual e interactiva.  
El proyecto combina **diseño, desarrollo y funcionalidad** en un solo entorno, permitiendo a las empresas o emprendedores seleccionar los servicios que necesitan, calcular cotizaciones en tiempo real y agendar reuniones con el equipo creativo.

---

## 🚀 Características principales

- 🧩 **Configurador visual** con sistema *drag-and-drop* para seleccionar servicios.  
- 💬 **Interfaz intuitiva** desarrollada con **React.js** y **Tailwind CSS**.  
- 📆 **Agendamiento de reuniones** mediante integración con calendario (Calendly).  
- 💾 **Conexión con base de datos MySQL** para registro y autenticación de usuarios.  
- ⚙️ **Servidor Node.js + Express** que gestiona las rutas y la comunicación con el frontend.  
- 🔒 **Control de versiones** con Git y GitHub siguiendo buenas prácticas (`main` y `develop`).

---

## 🗂️ Estructura del proyecto

```bash
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
