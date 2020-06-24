import React from "react";
import "./Auth.scss";
import Navbar from "../entry/Navbar";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase, { uiConfig } from "../../../service/firebase";
// Auth with FirebaseUI
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth-image">
        <Navbar />
        <div className="auth-main">
          <div className="auth-main-1">
            <div className="auth-main-1-container">
              <h2 className="auth-main-1-container-title">Sign In</h2>
              <form className="auth-main-1-container-auth">
                <input type="email" name="email" placeholder="Email address" />
                <input type="password" name="password" placeholder="Password" />
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm password"
                />
                <StyledFirebaseAuth
                  uiConfig={uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
