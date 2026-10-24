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
    name: "Dr. Saúl Enrique Alaniz García",
    specialty: "Odontología General",
    description:
      "Con más de 30 años de experiencia cuidando sonrisas. Especialista en diagnósticos integrales, rehabilitación oral y prevención. Su enfoque principal es brindar confianza, un trato humano y cero dolor en cada procedimiento.",
    education: "Universidad Nacional Autónoma de México (UNAM)",
    schedule: "Lunes a Viernes: 9:00 AM - 2:00 PM",
    image: EnriqueImage,
  },
  {
    id: "javier-alaniz",
    name: "Dr. Javier Alaniz García",
    specialty: "Odontología General",
    description:
      "Especialista en restauraciones estéticas y alineación dental. Dedicado a devolver la funcionalidad y confianza a sus pacientes mediante tratamientos vanguardistas y materiales de última generación.",
    education: "Universidad Autónoma del Estado de México (UAEMex)",
    schedule: "Lunes a Viernes: 4:00 PM - 8:00 PM",
    image: JavierImage,
  },
  {
    id: "ariadna-alaniz",
    name: "Dra. Ariadna Elizabeth Alaniz Paredes",
    specialty: "Ortodoncia",
    description:
      "Transformando sonrisas con precisión y cuidado. Experta en brackets tradicionales, estéticos y alineadores invisibles. Su objetivo es lograr la armonía facial y una mordida perfecta para cada paciente.",
    education: "Especialidad en Ortodoncia y Ortopedia Maxilofacial",
    schedule: "Martes, Jueves y Sábados: 10:00 AM - 6:00 PM",
    image: AriadnaImage,
  },
  {
    id: "isaura-alaniz",
    name: "Dra. Isaura Alaniz",
    specialty: "Endodoncia",
    description:
      "Salvando dientes con experiencia y dedicación. Especialista en tratamientos de conducto indoloros y microcirugía endodóntica. Su prioridad es preservar tus piezas dentales naturales siempre que sea posible.",
    education: "Diplomado Avanzado en Endodoncia Microscópica",
    schedule: "Lunes y Miércoles: 10:00 AM - 7:00 PM",
    image: IsauraImage,
  },
  {
    id: "selene-alaniz",
    name: "Dra. Selene Sarai Alaniz Paredes",
    specialty: "Odontopediatría",
    description:
      "Cuidando las sonrisas más pequeñas con ternura y profesionalismo. Capacitada para el manejo de conducta infantil, logrando que la visita al dentista sea una experiencia divertida y libre de miedo para los niños.",
    education: "Especialidad en Odontología Infantil",
    schedule: "Viernes: 2:00 PM - 8:00 PM | Sábados: 9:00 AM - 2:00 PM",
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
