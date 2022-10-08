import React from "react";
import { CartWidget } from "./CartWidget";
import "../NavBar/NavBar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="logo"
            width="100"
            height="29"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle navBar-button-menu"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* <li>
                  <a className="dropdown-item navBar-button-menu" href="#">
                    Computación
                  </a>
                </li> */}
                <li>
                  <Link
                    to="/categoria/celulares"
                    className="dropdown-item navBar-button-menu"
                  >
                    Celulares
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categoria/notebooks"
                    className="dropdown-item navBar-button-menu"
                  >
                    Notebooks
                  </Link>
                </li>
                <li>
                  <Link
                    to="categoria/tv"
                    className="dropdown-item navBar-button-menu"
                  >
                    TV
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};
