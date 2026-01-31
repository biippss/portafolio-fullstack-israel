const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const app = express();

// Middleware de Seguridad y Configuración
app.use(helmet());
app.use(cors());
app.use(express.json());

// Conexión a MongoDB Local (usando la variable de tu archivo .env)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a MongoDB Local con éxito"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Conexión de las Rutas (Aquí es donde el servidor reconoce tus proyectos)
app.use("/api/projects", require("./routes/projectRoutes"));

// Ruta de prueba para ver en el navegador
app.get("/", (req, res) => {
  res.send("Servidor de Israel Plazarte funcionando y conectado");
});

// Configuración del Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
