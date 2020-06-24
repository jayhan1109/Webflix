import React, { useState, useEffect } from "react";
import "./App.scss";
import "./firebaseui-styling.global.css";
import Entry from "./components/layout/entry/Entry";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "./components/layout/Auth/Auth";
import Landing from "./components/layout/Landing/Landing";

// Firebase
import firebase from "./service/firebase";

const App = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    firebaseAuth();
  }, []);

  const firebaseAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  };

  if (auth) {
    return <Redirect exact to="/landing" />;
  }

  return (
    <Switch>
      <Route exact path="/" component={Entry} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/landing" component={Landing} />
    </Switch>
  );
};

export default App;
