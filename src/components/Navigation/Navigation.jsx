import React, { useState } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logoutIcon from "../../images/logout.png";
import menuIcon from "../../images/menu.png";
import closeIcon from "../../images/close-icon.png";

function Navigation({ isLoggedIn, currentUser, onLogOut }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button className="header__menu-btn" onClick={toggleMenu}>
        <img
          src={isMenuOpen ? closeIcon : menuIcon}
          alt="Menú"
          className="header__menu-icon"
        />
      </button>

      <nav className={`header__nav ${isMenuOpen ? "header__nav_open" : ""}`}>
        <NavLink
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link_active" : ""}`
          }
        >
          Inicio
        </NavLink>

        {isLoggedIn && (
          <>
            <span className="header__link header__user-name">
              {currentUser.name}
            </span>

            <button
              className={`header__button header__button_logout`}
              onClick={() => {
                setIsMenuOpen(false);
                onLogOut();
              }}
            >
              Salir
              <img
                src={logoutIcon}
                alt="Logout"
                className="header__logout-icon"
                style={{ marginLeft: "8px" }}
              />
            </button>
          </>
        )}

        {!isLoggedIn && (
          <NavLink
            to="/login"
            className={`header__button header__button_login`}
            onClick={() => setIsMenuOpen(false)}
          >
            Iniciar sesión
          </NavLink>
        )}
      </nav>
    </>
  );
}

export default Navigation;
