import React from "react";
import "./Signin.scss";
import Navbar from "../entry/Navbar";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="auth">
      <div className="auth-image">
        <Navbar />
        <div className="auth-main">
          <div className="auth-main-1">
            <div className="auth-main-1-container">
              <h2 className="auth-main-1-container-title">Sign In</h2>
              <form className="auth-main-1-container-signin">
                <input
                  type="email"
                  name="email"
                  id="signin-email"
                  placeholder="Email address"
                />
                <input
                  type="password"
                  name="password"
                  id="signin-password"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="auth-main-1-container-signin-btn"
                >
                  Sign In
                </button>
              </form>

              <p className="auth-main-1-container-foot">
                New to Netflix?{" "}
                <Link
                  to="/register"
                  className="auth-main-1-container-foot-link"
                >
                  Sign up now!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
