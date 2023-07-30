import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar navbar-expand-xl m-0 p-0"  >
      {/* <p className="d-lg-none m-0 p-0" style={{ fontSize: "6px !important" }}>
        <i>" We take care of your health for a better life."</i>
      </p> */}
      <button
        className={`navbar-toggler mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
        type="button"
        onClick={handleMobileMenuToggle}
        aria-label="Toggle navigation"
      >
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse sub-menu-bar ${isMobileMenuOpen ? "show" : ""}`}
        id="navbarSupportedContent"
      >
        <ul id="nav" className="navbar-nav">
          <li className="nav-item ">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="nav-item">
                <Link to="/Rev-George-Mathen" className="dropdown-item">Rev. George Mathen</Link>
              </li>
              <li className="nav-item">
                <Link to="/Vision-Mission" className="dropdown-item">Vision & Mission</Link>
              </li>
              <li className="nav-item">
                <Link to="/Governing-Board" className="dropdown-item">Governing Board</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/Departments">Departments</Link>
          </li>
          <li className="nav-item">
            <Link to="/Facilities">Facilities</Link>
          </li>
          <li className="nav-item">
            <Link to="/Doctors">Doctors</Link>
          </li>
          <li className="nav-item">
            <Link to="/Careers">Careers</Link>
          </li>
          <li className="nav-item">
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
