import "./About.css";
import aboutImage from "../../images/Doctores.png";
import { Link } from "react-router-dom";

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
          <li className="about__item">Doctor Saul Enrique Alaniz Garcia</li>
          <li className="about__item">Doctor Javier Alaniz Garcia</li>
          <li className="about__item">
            Doctora Ariadna Elizabeth Alaniz Paredes
          </li>
          <li className="about__item">Doctora Isaura Alaniz</li>
          <li className="about__item">Doctora Selene Sarai Alaniz Paredes</li>
        </ul>
      </div>
      <img className="about__image" src={aboutImage} alt="Author" />
    </section>
  );
}

export default About;
