import React, { useState } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logoutIcon from "../../images/logout.png";
import menuIcon from "../../images/menu.png";
import closeIcon from "../../images/close-icon.png";

function Navigation({ isLoggedIn, currentUser, onLoginClick, onLogOut }) {
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
            <button
              className={`header__button header__button_user`}
              onClick={() => {
                setIsMenuOpen(false);
                onLogOut();
              }}
            >
              {currentUser.name}
              <img
                src={logoutIcon}
                alt="Logout"
                className="header__logout-icon"
              />
            </button>
          </>
        )}
        {!isLoggedIn && (
          <button
            className={`header__button header__button_login`}
            onClick={onLoginClick}
          >
            Iniciar sesión
          </button>
        )}
      </nav>
    </>
  );
}

export default Navigation;
