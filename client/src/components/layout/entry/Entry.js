import React from "react";
import Navbar from "./Navbar";

import "./Entry.scss";
import Jumbotron from "./Jumbotron";

const Entry = () => {
  return (
    <div className="entry">
      <div className="entry-image">
        <Navbar />
        <Jumbotron />
      </div>
    </div>
  );
};

export default Entry;
