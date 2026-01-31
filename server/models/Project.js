const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String], // Ejemplo: ['Astro', 'React', 'Java']
  link: { type: String }, // Para el despliegue de la funeraria, por ejemplo
  category: { type: String, enum: ["Profesional", "Academico"] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Project", ProjectSchema);
