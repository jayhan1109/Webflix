import React, { useState } from "react";
import "./Question.scss";

const Question = ({ question }) => {
  // Destruct props
  const { main, sub } = question;

  let [toggleSub, setToggleSub] = useState(false);

  // Toggle FAQ
  const toggleSubFunc = (e) => {
    setToggleSub(!toggleSub);
  };

  return (
    <div className="faq">
      <div className="faq-title" onClick={toggleSubFunc}>
        <span className="faq-title-main">{main}</span>
        <span className="faq-title-arrow">&#43;</span>
      </div>
      {toggleSub && <div className="faq-sub">{sub}</div>}
    </div>
  );
};

export default Question;
