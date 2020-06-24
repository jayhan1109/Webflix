import React from "react";
import "./App.scss";
import "./firebaseui-styling.global.css";
import Entry from "./components/layout/entry/Entry";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./components/layout/Auth/Auth";
import Landing from "./components/layout/Landing/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Entry} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/landing" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
