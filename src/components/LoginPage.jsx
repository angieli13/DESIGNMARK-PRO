import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoIcon from "../assets/images/Logo.png";
import iconFacebook from "../assets/images/IconFacebook.png";
import iconInstagram from "../assets/images/IconInstagram.png";
import iconLinkedin from "../assets/images/IconLinkedin.png";
import Footer from "./Footer.jsx";

import { LuLogIn } from "react-icons/lu";
import {
  MdPersonAddAlt1,
  MdMailOutline,
  MdPersonOutline,
  MdBusiness,
} from "react-icons/md";
import {
  RiLockPasswordLine,
  RiCalendarEventLine,
  RiPhoneLine,
} from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const [formData, setFormData] = useState({
    NOMBRES: "",
    APELLIDOS: "",
    CORREO: "",
    EMPRESA: "",
    CELULAR: "",
    FECHA_NACIMIENTO: "",
    CONTRASEÑA: "",
    CONFIRMAR_CONTRASEÑA: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ LOGIN conectado a backend
  const handleLogin = async () => {
    if (!formData.CORREO || !formData.CONTRASEÑA) {
      alert("Por favor ingresa tu correo y contraseña.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          CORREO: formData.CORREO,
          CONTRASEÑA: formData.CONTRASEÑA,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Error al iniciar sesión");
        return;
      }

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", formData.CORREO);
      alert("Inicio de sesión exitoso 🎉");
      navigate("/packages");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error del servidor. Verifica la conexión.");
    }
  };

  // ✅ REGISTRO conectado al backend
  const handleRegister = async () => {
    if (!acceptPolicy) {
      alert("Debes aceptar las políticas de manejo de datos.");
      return;
    }

    if (formData.CONTRASEÑA !== formData.CONFIRMAR_CONTRASEÑA) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Error al registrar el usuario.");
        return;
      }

      alert("Registro exitoso ✅");
      setActiveTab("login");
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error del servidor. Verifica la conexión.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0046A0]">
      {/* HEADER */}
      <header className="flex justify-between items-start px-8 md:px-16 pt-6 pb-4 w-full">
        <img
          src={logoIcon}
          alt="Logo"
          className="w-40 md:w-56 h-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="flex items-start mt-2 gap-4 md:gap-6">
          <img src={iconFacebook} alt="Facebook" className="w-8 h-8 md:w-10 md:h-10" />
          <img src={iconInstagram} alt="Instagram" className="w-8 h-8 md:w-10 md:h-10" />
          <img src={iconLinkedin} alt="LinkedIn" className="w-8 h-8 md:w-10 md:h-10" />
        </div>
      </header>

      {/* MAIN */}
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="bg-white border-2 border-[#FFBC57] rounded-2xl shadow-lg w-full max-w-md p-8">
          {/* Tabs */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div
              onClick={() => setActiveTab("login")}
              className="flex items-center gap-2 cursor-pointer transition"
            >
              <LuLogIn
                className={`text-2xl ${
                  activeTab === "login" ? "text-[#0046A0]" : "text-[#d1d6df]"
                }`}
              />
              <span
                className={`text-lg font-bold font-['F37 Ginger'] ${
                  activeTab === "login" ? "text-[#0046A0]" : "text-[#d1d6df]"
                }`}
              >
                Inicio de sesión
              </span>
            </div>
            <div
              onClick={() => setActiveTab("register")}
              className="flex items-center gap-2 cursor-pointer transition"
            >
              <MdPersonAddAlt1
                className={`text-2xl ${
                  activeTab === "register" ? "text-[#0046A0]" : "text-[#d1d6df]"
                }`}
              />
              <span
                className={`text-lg font-bold font-['F37 Ginger'] ${
                  activeTab === "register" ? "text-[#0046A0]" : "text-[#d1d6df]"
                }`}
              >
                Regístrate
              </span>
            </div>
          </div>

          {/* LOGIN */}
          {activeTab === "login" && (
            <>
              <label className="block text-[#0046A0] font-bold mb-2 font-['Nunito Sans']">
                Correo Electrónico
              </label>
              <div className="flex items-center border-2 border-[#FFBC57] rounded-lg px-3 mb-6 bg-white">
                <MdMailOutline className="text-[#FFBC57] text-xl mr-2" />
                <input
                  name="CORREO"
                  type="email"
                  placeholder="Ingresa tu correo"
                  value={formData.CORREO}
                  onChange={handleChange}
                  className="flex-1 py-2 outline-none bg-white text-[#0046A0]"
                />
              </div>

              <label className="block text-[#0046A0] font-bold mb-2 font-['Nunito Sans']">
                Contraseña
              </label>
              <div className="flex items-center border-2 border-[#FFBC57] rounded-lg px-3 mb-6 bg-white">
                <RiLockPasswordLine className="text-[#FFBC57] text-xl mr-2" />
                <input
                  name="CONTRASEÑA"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  value={formData.CONTRASEÑA}
                  onChange={handleChange}
                  className="flex-1 py-2 outline-none bg-white text-[#0046A0]"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <AiOutlineEye className="text-[#0046A0] text-xl" />
                  ) : (
                    <AiOutlineEyeInvisible className="text-[#0046A0] text-xl" />
                  )}
                </button>
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-[#FFBC57] text-white text-lg py-3 rounded-xl font-bold hover:opacity-90"
              >
                Iniciar Sesión
              </button>
            </>
          )}

          {/* REGISTER */}
          {activeTab === "register" && (
                        <>
              <p className="text-center text-[#0046A0] font-semibold mb-6 font-['Nunito Sans']">
                Ingresa los siguientes datos para crear tu cuenta
              </p>

              {/* Nombres */}
              <label className="block text-[#0046A0] font-bold mb-2 font-['Nunito Sans']">
                Nombres
              </label>
              <div className="flex items-center border-2 border-[#FFBC57] rounded-lg px-3 mb-6 bg-white">
                <MdPersonOutline className="text-[#FFBC57] text-xl mr-2" />
                <input
                  name="NOMBRES"
                  type="text"
                  placeholder="Ingresa tus nombres"
                  value={formData.NOMBRES}
                  onChange={handleChange}
                  className="flex-1 py-2 outline-none bg-white text-[#0046A0] placeholder-[#d1d6df] font-['Nunito Sans']"
                />
              </div>

              {/* Apellidos */}
              <label className="block text-[#0046A0] font-bold mb-2 font-['Nunito Sans']">
                Apellidos
              </label>
              <div className="flex items-center border-2 border-[#FFBC57] rounded-lg px-3 mb-6 bg-white">
                <MdPersonOutline className="text-[#FFBC57] text-xl mr-2" />
                <input
                  name="APELLIDOS"
                  type="text"
                  placeholder="Ingresa tus apellidos"
                  value={formData.APELLIDOS}
                  onChange={handleChange}
                  className="flex-1 py-2 outline-none bg-white text-[#0046A0] placeholder-[#d1d6df] font-['Nunito Sans']"
                />
              </div>

              {/* Correo */}
              <label className="block text-[#0046A0] font-bold mb-2 font-['Nunito Sans']">
                Correo Electrónico
              </label>
              <div className="flex items-center border-2 border-[#FFBC57] rounded-lg px-3 mb-6 bg-white">
                <MdMailOutline className="text-[#FFBC57] text-xl mr-2" />
                <input
                  name="CORREO"
                  type="email"
                  placeholder="Correo electrónico"
                  value={formData.CORREO}
                  onChange={handleChange}
                  className="flex-1 py-2 outline-none bg-white text-[#0046A0] placeholder-[#d1d6df] font-['Nunito Sans']"
                />
              </div>

              {/* Empresa */}
              <label className="block text-[#0046A0] font-bold mb-2 font-['Nunito Sans']">
                Empresa
              </label>
              <div className="flex items-center border-2 border-[#FFBC57] rounded-lg px-3 mb-6 bg-white">
                <MdBusiness className="text-[#FFBC57] text-xl mr-2" />
                <input
                  name="EMPRESA"
                  type="text"
                  placeholder="Empresa"
                  value={formData.EMPRESA}
                  onChange={handleChange}
                  className="flex-1 py-2 outline-none bg-white text-[#0046A0] placeholder-[#d1d6df] font-['Nunito Sans']"
                />
              </div>

              {/* Celular */}
              <label className="block text-[#0046A0] font-bold mb-2 font-['Nunito Sans']">
                Celular
              </label>
              <div className="flex items-center border-2 border-[#FFBC57] rounded-lg px-3 mb-6 bg-white">
                <RiPhoneLine className="text-[#FFBC57] text-xl mr-2" />
                <input
                  name="CELULAR"
                  type="text"
                  placeholder="Celular"
                  value={formData.CELULAR}
                  onChange={handleChange}
                  className="flex-1 py-2 outline-none bg-white text-[#0046A0] placeholder-[#d1d6df] font-['Nunito Sans']"
                />
              </div>

              {/* Fecha nacimiento */}
              <label className="block text-[#0046A0] font-bold mb-2 font-['Nunito Sans']">
                Fecha de nacimiento
              </label>
              <div className="flex items-center border-2 border-[#FFBC57] rounded-lg px-3 mb-6 bg-white">
                <RiCalendarEventLine
                  className="text-[#FFBC57] text-xl mr-2 cursor-pointer"
                  onClick={() =>
                    document.getElementById("fecha-nacimiento").showPicker?.()
                  }
                />
                <input
                  id="fecha-nacimiento"
                  name="FECHA_NACIMIENTO"
                  type="date"
                  placeholder="Selecciona tu fecha"
                  value={formData.FECHA_NACIMIENTO}
                  onChange={handleChange}
                  onClick={(e) => e.currentTarget.showPicker?.()}
                  className="flex-1 py-2 outline-none bg-white text-[#0046A0] placeholder-[#d1d6df] font-['Nunito Sans'] cursor-pointer"
                />
              </div>

              {/* Contraseña */}
              <label className="block text-[#0046A0] font-bold mb-2 font-['Nunito Sans']">
                Contraseña
              </label>
              <div className="flex items-center border-2 border-[#FFBC57] rounded-lg px-3 mb-6 bg-white">
                <RiLockPasswordLine className="text-[#FFBC57] text-xl mr-2" />
                <input
                  name="CONTRASEÑA"
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  value={formData.CONTRASEÑA}
                  onChange={handleChange}
                  className="flex-1 py-2 outline-none bg-white text-[#0046A0] placeholder-[#d1d6df] font-['Nunito Sans']"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <AiOutlineEye className="text-[#0046A0] text-xl" />
                  ) : (
                    <AiOutlineEyeInvisible className="text-[#0046A0] text-xl" />
                  )}
                </button>
              </div>

              {/* Confirmar contraseña */}
              <label className="block text-[#0046A0] font-bold mb-2 font-['Nunito Sans']">
                Confirmar contraseña
              </label>
              <div className="flex items-center border-2 border-[#FFBC57] rounded-lg px-3 mb-6 bg-white">
                <FaCheckCircle className="text-[#FFBC57] text-xl mr-2" />
                <input
                  name="CONFIRMAR_CONTRASEÑA"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirmar contraseña"
                  value={formData.CONFIRMAR_CONTRASEÑA}
                  onChange={handleChange}
                  className="flex-1 py-2 outline-none bg-white text-[#0046A0] placeholder-[#d1d6df] font-['Nunito Sans']"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <AiOutlineEye className="text-[#0046A0] text-xl" />
                  ) : (
                    <AiOutlineEyeInvisible className="text-[#0046A0] text-xl" />
                  )}
                </button>
              </div>

              {/* Reglas contraseña */}
              <div className="bg-[#f7f9fc] border border-[#FFBC57] rounded-lg p-4 mb-4 text-sm text-[#0046A0] font-['Nunito Sans']">
                <div className="flex items-center gap-2 mb-2">
                  <FaExclamationTriangle className="text-[#FFBC57]" />
                  <span>La contraseña debe tener al menos:</span>
                </div>
                <ul className="list-disc list-inside">
                  <li>8 caracteres</li>
                  <li>Una letra mayúscula</li>
                  <li>Una letra minúscula</li>
                  <li>Un número</li>
                  <li>Un carácter especial (!@#$%^&*-+_:. )</li>
                </ul>
              </div>


              {/* Checkbox políticas */}
              <div className="flex items-center mb-6">
                <input
                  id="politicas"
                  type="checkbox"
                  checked={acceptPolicy}
                  onChange={() => setAcceptPolicy(!acceptPolicy)}
                  className="
                    w-5 h-5 mr-2 appearance-none border-2 border-[#FFBC57]
                    rounded bg-white relative cursor-pointer
                    checked:after:content-['✔']
                    checked:after:absolute checked:after:left-[2px]
                    checked:after:top-[-2px] checked:after:text-[#0046A0]
                    checked:after:text-lg
                  "
                />
                <label
                  htmlFor="politicas"
                  className="text-sm text-[#0046A0] font-['Nunito Sans']"
                >
                  Acepto las políticas de manejo de datos
                </label>
              </div>

              <button
                onClick={handleRegister}
                className="w-full bg-[#0046A0] text-white text-lg py-3 rounded-xl font-bold hover:opacity-90"
              >
                Crear cuenta
              </button>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;