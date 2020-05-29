import React from "react";
import Navbar from "./Navbar";

import "./Entry.scss";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Questions from "./Questions";

const Entry = () => {
  return (
    <div className="entry">
      <div className="entry-image">
        <Navbar />
        <Jumbotron />
      </div>
      <Cards />
      <Questions />
    </div>
  );
};

export default Entry;
