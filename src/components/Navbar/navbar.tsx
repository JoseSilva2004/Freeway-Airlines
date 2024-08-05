import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import logo from '../../assets/logo-avion.png'; 

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">Freeway Airlines</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className={`nav-item ${currentPath === "/" ? "active" : ""}`}>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li
            className={`nav-item ${
              currentPath === "/register" ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/register">
              Registrarse
            </Link>
          </li>
          <li
            className={`nav-item ${
              currentPath === "/boleteria" ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/boleteria">
              Boleteria
            </Link>
          </li>
          <li
            className={`nav-item ${
              currentPath === "/reservaciones" ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/reservaciones">
              Reservaciones
            </Link>
          </li>
          <li
            className={`nav-item ${
              currentPath === "/itinerario" ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/itinerario">
              Itinerarios
            </Link>
          </li>
          <li
            className={`nav-item ${currentPath === "/login" ? "active" : ""}`}
          >
            <Link className="nav-link" to="/login">
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
