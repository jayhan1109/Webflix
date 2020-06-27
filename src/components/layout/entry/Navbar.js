import React from "react";
import "./Navbar.scss";
import { useLocation, NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userNameState } from "../../../recoil/auth";
import firebase from "../../../service/firebase";

const Navbar = () => {
  const [userName, setUserName] = useRecoilState(userNameState);

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
      {useLocation().pathname === "/landing" && (
        <div className="nav-links">
          <h3 className="nav-greeting">
            Welcome, {userName.substr(userName.indexOf(" "))}!
          </h3>
          <button
            className="nav-btn"
            onClick={() => {
              firebase.auth().signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
