import React, { useEffect } from "react";
import "./App.scss";
import "./firebaseui-styling.global.css";
import Entry from "./components/layout/entry/Entry";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "./components/layout/Auth/Auth";
import Landing from "./components/layout/Landing/Landing";

// Recoil
import { useRecoilState } from "recoil";

// Firebase
import firebase from "./service/firebase";
import { authState } from "./recoil/auth";

const App = () => {
  // Recoil States
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    // When "App" component is mounted, check if user logged in
    firebaseAuth();
  }, []);

  // Check if user changed
  const firebaseAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (!auth ? <Entry /> : <Redirect to="/landing" />)}
      />
      <Route
        exact
        path="/auth"
        render={() => (!auth ? <Auth /> : <Redirect to="/landing" />)}
      />
      <Route
        exact
        path="/landing"
        render={() => (!auth ? <Redirect to="/" /> : <Landing />)}
      />
    </Switch>
  );
};

export default App;
