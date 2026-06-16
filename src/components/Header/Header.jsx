import "./Header.css";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/Logo.png";

function Header({ isLoggedIn, currentUser, onLoginClick, onLogOut }) {
  return (
    <header className={`header`}>
      <div className="header__overlay">
        <img src={logo} alt="Logo de Dental Alaniz" className="header__logo" />
        <h1 className={`header__title`}>Dental Alaniz</h1>
      </div>
      <Navigation
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLoginClick={onLoginClick}
        onLogOut={onLogOut}
      />
    </header>
  );
}

export default Header;
