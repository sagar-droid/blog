import React from "react";
import Logo from "../assets/Logo";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };
  return (
    <div className="navbar-container">
      <div className="nordic-logo">
        <Logo />
      </div>
      <div className="navbar-items">
        <div className={`menu${menuExpanded ? " expanded" : ""}`}>
          <div className="nav-links">
            <ul>
              <li>Blog</li>
              <li>About</li>
              <li>Lines</li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
        <div className="menu-btn" onClick={toggleMenu}>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
