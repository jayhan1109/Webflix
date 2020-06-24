import React from "react";
import "./Navbar.scss";
import { useLocation, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <h2 className="nav-title">
        <NavLink to="/" className="nav-logo">
          NETFLIX
        </NavLink>
      </h2>
      {useLocation().pathname === "/" && (
        <div className="nav-links">
          <NavLink className="nav-auth" to="/auth">
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
