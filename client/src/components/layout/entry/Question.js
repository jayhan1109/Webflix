import React, { useState } from "react";
import "./Question.scss";

const Question = ({ question }) => {
  const { main, sub } = question;

  let [toggleSub, setToggleSub] = useState(false);

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
