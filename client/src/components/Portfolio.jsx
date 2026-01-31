import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Code,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  ExternalLink,
  X,
  Terminal,
  Cpu,
  Layout,
  Database,
} from "lucide-react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
        setFilteredProjects(res.data);
      } catch (err) {
        console.error("Error en la conexión con la API local");
      }
    };
    fetchProjects();
  }, []);

  const filterBySkill = (skill) => {
    if (selectedSkill === skill) {
      setSelectedSkill(null);
      setFilteredProjects(projects);
    } else {
      setSelectedSkill(skill);
      const filtered = projects.filter((p) => p.technologies.includes(skill));
      setFilteredProjects(filtered);
    }
  };

  const skills = [
    { name: "JavaScript", icon: <Code size={16} />, color: "#f7df1e" },
    { name: "Python", icon: <Terminal size={16} />, color: "#3776ab" },
    { name: "Power Apps", icon: <Layout size={16} />, color: "#742774" },
    { name: "React", icon: <Layout size={16} />, color: "#61dafb" },
    { name: "Astro", icon: <Code size={16} />, color: "#ff5d01" },
    { name: "Java JEE", icon: <Cpu size={16} />, color: "#007396" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "#f1f5f9",
        fontFamily: "Inter, sans-serif",
      }}>
      {/* SECCION INICIAL */}
      <header
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background:
            "radial-gradient(circle at top, #1e293b 0%, #0f172a 100%)",
        }}>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            margin: "0",
            background: "linear-gradient(to right, #3b82f6, #2dd4bf)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          Israel Plazarte
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#94a3b8", marginTop: "10px" }}>
          Desarrollador Full Stack | Microsoft Power Platform Specialist
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
            marginTop: "40px",
          }}>
          {skills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => filterBySkill(skill.name)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "12px",
                border: "none",
                backgroundColor:
                  selectedSkill === skill.name ? skill.color : "#1e293b",
                color:
                  selectedSkill === skill.name
                    ? skill.name === "JavaScript" || skill.name === "React"
                      ? "#000"
                      : "#fff"
                    : "#fff",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform:
                  selectedSkill === skill.name ? "scale(1.1)" : "scale(1)",
                fontWeight: "600",
                boxShadow:
                  selectedSkill === skill.name
                    ? `0 0 20px ${skill.color}66`
                    : "none",
              }}>
              {skill.icon} {skill.name}
            </button>
          ))}
        </div>
      </header>

      {/* EXPERIENCIA DESTACADA */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "-30px auto 40px",
          padding: "0 20px",
        }}>
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #334155",
          }}>
          <div
            style={{
              color: "#3b82f6",
              fontWeight: "800",
              marginBottom: "5px",
            }}>
            ARGOSYSTEMS
          </div>
          <div
            style={{
              fontSize: "0.8rem",
              color: "#94a3b8",
              textTransform: "uppercase",
            }}>
            Pasantías / Power Platform
          </div>
        </div>
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #334155",
          }}>
          <div
            style={{
              color: "#2dd4bf",
              fontWeight: "800",
              marginBottom: "5px",
            }}>
            BRAMDEX
          </div>
          <div
            style={{
              fontSize: "0.8rem",
              color: "#94a3b8",
              textTransform: "uppercase",
            }}>
            Frontend Astro & Java JEE
          </div>
        </div>
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #334155",
          }}>
          <div
            style={{
              color: "#f59e0b",
              fontWeight: "800",
              marginBottom: "5px",
            }}>
            PUCE QUITO
          </div>
          <div
            style={{
              fontSize: "0.8rem",
              color: "#94a3b8",
              textTransform: "uppercase",
            }}>
            Tecnología en Software
          </div>
        </div>
      </section>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        {/* PROYECTOS */}
        <section>
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "30px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
            <Briefcase color="#3b82f6" />{" "}
            {selectedSkill
              ? `Filtro: ${selectedSkill}`
              : "Proyectos Destacados"}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "25px",
            }}>
            {filteredProjects.map((project) => (
              <div
                key={project._id}
                onClick={() => setActiveProject(project)}
                style={{
                  background: "#1e293b",
                  padding: "25px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  border: "1px solid #334155",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#334155";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                  {project.title}
                </h3>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                  }}>
                  {project.description.substring(0, 120)}...
                </p>
                <div
                  style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.65rem",
                        color: "#2dd4bf",
                        fontWeight: "700",
                      }}>
                      #{t.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DETALLE ARGOSYSTEMS */}
        <section
          style={{
            marginTop: "60px",
            background: "#1e293b",
            padding: "40px",
            borderRadius: "24px",
            border: "1px solid #334155",
          }}>
          <h3
            style={{
              color: "#3b82f6",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
            <Database /> Experiencia en Argosystems
          </h3>
          <p style={{ lineHeight: "1.6", color: "#cbd5e1" }}>
            Durante mis prácticas en <strong>Argosystems</strong>, me
            especialicé en el ecosistema de Microsoft. Desarrollé aplicaciones
            personalizadas con <strong>Power Apps</strong> y automaticé flujos
            de trabajo empresariales complejos utilizando{" "}
            <strong>Power Automate</strong>, integrando diversas herramientas
            para mejorar la eficiencia operativa.
          </p>
        </section>

        <footer
          style={{
            marginTop: "80px",
            textAlign: "center",
            padding: "40px",
            color: "#64748b",
            fontSize: "0.8rem",
          }}>
          © 2026 Israel Plazarte | Desarrollado con el stack MERN
        </footer>
      </main>

      {/* MODAL */}
      {activeProject && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: "20px",
          }}>
          <div
            style={{
              backgroundColor: "#1e293b",
              maxWidth: "600px",
              width: "100%",
              padding: "40px",
              borderRadius: "24px",
              position: "relative",
              border: "1px solid #3b82f6",
            }}>
            <button
              onClick={() => setActiveProject(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "none",
                border: "none",
                color: "#94a3b8",
                cursor: "pointer",
              }}>
              <X />
            </button>
            <h2 style={{ fontSize: "2rem", marginBottom: "15px" }}>
              {activeProject.title}
            </h2>
            <p
              style={{
                lineHeight: "1.6",
                color: "#cbd5e1",
                marginBottom: "25px",
              }}>
              {activeProject.description}
            </p>
            <div style={{ marginBottom: "25px" }}>
              <h4 style={{ color: "#3b82f6", marginBottom: "10px" }}>Stack:</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {activeProject.technologies.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "#0f172a",
                      padding: "5px 12px",
                      borderRadius: "8px",
                      fontSize: "0.8rem",
                    }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
