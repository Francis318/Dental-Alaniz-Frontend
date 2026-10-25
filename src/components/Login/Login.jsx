import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    fetch("http://localhost:3001/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Correo o contraseña incorrectos");
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        onLogin();
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <section className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h2 className="login__title">Acceso Administrativo</h2>

        <input
          type="email"
          className="login__input"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="login__input"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="login__error">{error}</p>}

        <button type="submit" className="login__button">
          Iniciar Sesión
        </button>
      </form>
    </section>
  );
}

export default Login;
