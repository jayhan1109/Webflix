import React from "react";
import "./App.scss";
import Entry from "./components/layout/entry/Entry";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from "./components/layout/Auth/Signin";
import Signup from "./components/layout/Auth/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Entry} />
        <Route exact path="/login" component={Signin} />
        <Route exact path="/register" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
