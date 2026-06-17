import "./About.css";
import aboutImage from "../../images/Doctores.png";
import { Link } from "react-router-dom";

const doctorsData = [
  { id: "saul-alaniz", name: "Doctor Saul Enrique Alaniz Garcia" },
  { id: "javier-alaniz", name: "Doctor Javier Alaniz Garcia" },
  { id: "ariadna-alaniz", name: "Doctora Ariadna Elizabeth Alaniz Paredes" },
  { id: "isaura-alaniz", name: "Doctora Isaura Alaniz" },
  { id: "selene-alaniz", name: "Doctora Selene Sarai Alaniz Paredes" },
];

function About() {
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
          {doctorsData.map((doctor) => (
            <li key={doctor.id} className="about__item">
              <Link to={`/doctor/${doctor.id}`} className="about__link">
                {doctor.name}
              </Link>
            </li>
          ))}
        </ul>
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
