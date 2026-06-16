import "./Main.css";
import doctorsImage from "../../images/Consultorio.png";

function Main() {
  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__text-content">
          <h2 className="main__subtitle">
            Al cuidado de tu salud bucal desde 1985
          </h2>
          <p className="main__description">
            Conoce nuestros tratamientos principales:
          </p>
          <ul className="main__treatments-list">
            <li className="main__treatment-item">Ortodoncia</li>
            <li className="main__treatment-item">Implantes dentales</li>
            <li className="main__treatment-item">Operatoria dental</li>
            <li className="main__treatment-item">Limpieza dental</li>
            <li className="main__treatment-item">Protesis dentales</li>
            <li className="main__treatment-item">Endodoncia</li>
          </ul>
        </div>
        <div className="main__image-container">
          <img
            src={doctorsImage}
            alt="Imagen principal"
            className="main__image"
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
