import React from 'react';
import './Navbar.css';
import logo from './ksea_logo.png'; 
function Navbar() {
  return (
    <nav className="Navbar">
      <a href="#" className="Navbar-logo-link">
        <img src={logo} alt="KSEA Logo" className="Navbar-logo" />
      </a>
      <ul className="Navbar-list">
        <li className="Navbar-item"><a href="#seed">SEED</a></li>
        <li className="Navbar-item"><a href="#ukc">UKC</a></li>
        <li className="Navbar-item"><a href="#katalyst">Katalyst</a></li>
        <li className="Navbar-item"><a href="#step-up">STEP-UP</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;