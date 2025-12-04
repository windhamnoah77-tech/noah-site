import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <div className="brand">
          <span className="brand-top">Noah Real Estate</span>
          <span className="brand-sub">Living San Diego Realty</span>
        </div>

        <nav className="main-nav">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;