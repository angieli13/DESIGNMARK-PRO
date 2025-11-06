import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import db from "./database.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// Registro
app.post("/api/register", (req, res) => {
  const {
    NOMBRES,
    APELLIDOS,
    CORREO,
    EMPRESA,
    CELULAR,
    CONTRASEÑA,
    FECHA_NACIMIENTO,
  } = req.body;

  const hashedPassword = bcrypt.hashSync(CONTRASEÑA, 8);

  const sql = `INSERT INTO registro 
    (NOMBRES, APELLIDOS, CORREO, EMPRESA, CELULAR, CONTRASEÑA, FECHA_NACIMIENTO) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [NOMBRES, APELLIDOS, CORREO, EMPRESA, CELULAR, hashedPassword, FECHA_NACIMIENTO],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        message: "Usuario registrado con éxito",
        id: result.insertId,
      });
    }
  );
});

// Login
app.post("/api/login", (req, res) => {
  const { CORREO, CONTRASEÑA } = req.body;

  db.query("SELECT * FROM registro WHERE CORREO = ?", [CORREO], (err, results) => {
    if (err) return res.status(500).json({ error: "Error en servidor" });
    if (results.length === 0) return res.status(401).json({ error: "Usuario no encontrado" });

    const user = results[0];
    const valid = bcrypt.compareSync(CONTRASEÑA, user.CONTRASEÑA);
    if (!valid) return res.status(401).json({ error: "Contraseña incorrecta" });

    res.json({ message: "Login exitoso", user });
  });
});
// Guardar paquete seleccionado
app.post("/api/save-package", (req, res) => {
  const { user_id, nombre_paquete, servicios } = req.body;

  if (!user_id || !nombre_paquete || !servicios) {
    return res.status(400).json({ error: "Faltan datos para guardar el paquete" });
  }

  const sql = `INSERT INTO paquetes (user_id, nombre_paquete, servicio) VALUES (?, ?, ?)`;
  db.query(sql, [user_id, nombre_paquete, JSON.stringify(servicios)], (err, result) => {
    if (err) {
      console.error("❌ Error al guardar paquete:", err);
      return res.status(500).json({ error: "Error al guardar el paquete" });
    }
    res.json({ message: "✅ Paquete guardado correctamente", id: result.insertId });
  });
});

// Obtener paquetes de un usuario
app.get("/api/get-packages/:user_id", (req, res) => {
  const { user_id } = req.params;
  db.query("SELECT * FROM paquetes WHERE user_id = ?", [user_id], (err, results) => {
    if (err) return res.status(500).json({ error: "Error al obtener paquetes" });
    res.json(results);
  });
});

// Obtener usuario por correo
app.get("/api/get-user/:correo", (req, res) => {
  const { correo } = req.params;
  db.query("SELECT id, CORREO FROM registro WHERE CORREO = ?", [correo], (err, results) => {
    if (err) return res.status(500).json({ error: "Error al buscar usuario" });
    if (results.length === 0) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(results[0]);
  });
});


// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));

