import React from "react";
import "./App.scss";
import Entry from "./components/layout/entry/Entry";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from "./components/layout/Auth/Signin";
import Signup from "./components/layout/Auth/Signup";
import Landing from "./components/layout/Landing/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Entry} />
        <Route exact path="/login" component={Signin} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/landing" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
