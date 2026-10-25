import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddDoctor.css";

function AddDoctor() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    description: "",
    education: "",
    schedule: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");

    fetch("http://localhost:3001/doctors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al crear especialista");
        navigate("/");
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <section className="add-doctor">
      <form className="add-doctor__form" onSubmit={handleSubmit}>
        <h2 className="add-doctor__title">Agregar Nuevo Especialista</h2>

        <input
          type="text"
          name="name"
          className="add-doctor__input"
          placeholder="Nombre completo"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="specialty"
          className="add-doctor__input"
          placeholder="Especialidad (ej. Ortodoncia)"
          value={formData.specialty}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          className="add-doctor__textarea"
          placeholder="Descripción y experiencia..."
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="education"
          className="add-doctor__input"
          placeholder="Formación (ej. UNAM)"
          value={formData.education}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="schedule"
          className="add-doctor__input"
          placeholder="Horarios (ej. Lunes a Viernes 9-2)"
          value={formData.schedule}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="image"
          className="add-doctor__input"
          placeholder="URL de la fotografía"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <button type="submit" className="add-doctor__button">
          Guardar Especialista
        </button>
      </form>
    </section>
  );
}

export default AddDoctor;
