import React from "react";
import { useParams } from "react-router-dom";
import "./DoctorProfile.css";
import EnriqueImage from "../../images/Enrique.png";
import JavierImage from "../../images/Javier.png";
import AriadnaImage from "../../images/Ariadna.png";
import IsauraImage from "../../images/Isaura.png";
import SeleneImage from "../../images/Selene.png";

const doctorsDatabase = [
  {
    id: "saul-alaniz",
    name: "Dr. Saul Enrique Alaniz Garcia",
    specialty: "Odontología General",
    description: "Con más de 30 años de experiencia cuidando sonrisas...",
    image: EnriqueImage,
  },
  {
    id: "javier-alaniz",
    name: "Dr. Javier Alaniz Garcia",
    specialty: "Odontología General",
    description: "Especialista en alinear tu sonrisa...",
    image: JavierImage,
  },
  {
    id: "ariadna-alaniz",
    name: "Dra. Ariadna Elizabeth Alaniz Paredes",
    specialty: "Ortodoncia",
    description: "Transformando sonrisas con precisión y cuidado...",
    image: AriadnaImage,
  },
  {
    id: "isaura-alaniz",
    name: "Dra. Isaura Alaniz",
    specialty: "Endodoncia",
    description: "Salvando dientes con experiencia y dedicación...",
    image: IsauraImage,
  },
  {
    id: "selene-alaniz",
    name: "Dra. Selene Sarai Alaniz Paredes",
    specialty: "Odontopediatría",
    description:
      "Cuidando las sonrisas más pequeñas con ternura y profesionalismo...",
    image: SeleneImage,
  },
];

function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctorsDatabase.find((doc) => doc.id === id);

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
        </div>
      </div>
    </section>
  );
}

export default DoctorProfile;
