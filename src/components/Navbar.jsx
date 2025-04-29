
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="assets/logo.png" alt="Logo" className="logo-image" />
        </Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/scripts" className="nav-link">Mes Scripts</Link>
          <a href="https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C" target="_blank" rel="noopener noreferrer" className="nav-button">
            Rejoindre ma chaîne WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;