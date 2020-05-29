import React from "react";
import Navbar from "./Navbar";

import "./Entry.scss";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Questions from "./Questions";
import Contact from "./Contact";

const Entry = () => {
  return (
    <div className="entry">
      <div className="entry-image">
        <Navbar />
        <Jumbotron />
      </div>
      <Cards />
      <Questions />
      <Contact />
    </div>
  );
};

export default Entry;
