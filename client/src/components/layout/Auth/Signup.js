import React from "react";
import "./Signup.scss";
import Navbar from "../entry/Navbar";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth">
      <div className="auth-image">
        <Navbar />
        <div className="auth-main">
          <div className="auth-main-1">
            <div className="auth-main-1-container">
              <h2 className="auth-main-1-container-title">Sign Up</h2>
              <form className="auth-main-1-container-signup">
                <input
                  type="email"
                  name="email"
                  id="signup-email"
                  placeholder="Email address"
                />
                <input
                  type="password"
                  name="password"
                  id="signup-password"
                  placeholder="Password"
                />
                <input
                  type="password"
                  name="password2"
                  id="signup-password2"
                  placeholder="Confirm password"
                />
                <button
                  type="submit"
                  className="auth-main-1-container-signup-btn"
                >
                  Sign Up
                </button>
              </form>

              <p className="auth-main-1-container-foot">
                Already have an account?{" "}
                <Link to="/login" className="auth-main-1-container-foot-link">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
