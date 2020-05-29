import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <h2 className="nav-title">NETFLIX</h2>
      <div className="nav-links">
        <a href="#">Register</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
