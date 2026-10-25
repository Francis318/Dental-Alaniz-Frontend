import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DoctorProfile.css";

function DoctorProfile() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/doctors")
      .then((res) => {
        if (!res.ok) throw new Error("Error en la respuesta del servidor");
        return res.json();
      })
      .then((data) => {
        const foundDoctor = data.find((doc) => doc._id === id);
        setDoctor(foundDoctor);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar los datos:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="doctor-profile">
        <h2>Cargando perfil... ⏳</h2>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="doctor-profile">
        <h2>Doctor no encontrado</h2>
      </div>
    );
  }

  return (
    <section className="doctor-profile">
      <div className="doctor-profile__content">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="doctor-profile__image"
        />
        <div className="doctor-profile__info">
          <h2>{doctor.name}</h2>
          <h3>{doctor.specialty}</h3>
          <p>{doctor.description}</p>

          <div className="doctor-profile__details">
            <p className="doctor-profile__details-item">
              <strong>🎓 Formación:</strong> {doctor.education}
            </p>
            <p className="doctor-profile__details-item doctor-profile__details-item--spaced">
              <strong>🕒 Horarios:</strong> {doctor.schedule}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorProfile;
