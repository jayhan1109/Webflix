import React from "react";
import Navbar from "./Navbar";

import "./Entry.scss";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";

const Entry = () => {
  return (
    <div className="entry">
      <div className="entry-image">
        <Navbar />
        <Jumbotron />
      </div>
      <Cards />
    </div>
  );
};

export default Entry;
