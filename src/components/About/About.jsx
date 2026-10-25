import React, { useState, useEffect } from "react";
import "./About.css";
import aboutImage from "../../images/Doctores.png";
import { Link, useNavigate } from "react-router-dom";

function About({ isLoggedIn }) {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  const fetchDoctors = () => {
    fetch("http://localhost:3001/doctors")
      .then((res) => {
        if (!res.ok) throw new Error("Error en la respuesta del servidor");
        return res.json();
      })
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Error al cargar los doctores:", err));
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este especialista?")) return;

    const token = localStorage.getItem("jwt");

    fetch(`http://localhost:3001/doctors/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al eliminar");
        fetchDoctors();
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <section className="about">
      <div className="about__info">
        <h2 className="about__title">Sobre nosotros</h2>
        <p className="about__description">
          Somos un equipo de profesionales dedicados a brindar atención dental
          de excelencia, con enfoque en la salud bucal y el bienestar de
          nuestros pacientes.
        </p>
        <ul className="about__list">
          {doctors.map((doctor) => (
            <li
              key={doctor._id}
              className="about__item"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <Link to={`/doctor/${doctor._id}`} className="about__link">
                {doctor.name}
              </Link>

              {isLoggedIn && (
                <button
                  onClick={() => handleDelete(doctor._id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  title="Eliminar especialista"
                >
                  ❌
                </button>
              )}
            </li>
          ))}
        </ul>

        {isLoggedIn && (
          <button
            onClick={() => navigate("/add-doctor")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#2c3e50",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ➕ Agregar Especialista
          </button>
        )}
      </div>
      <img
        className="about__image"
        src={aboutImage}
        alt="Equipo Dental Alaniz"
      />
    </section>
  );
}

export default About;
