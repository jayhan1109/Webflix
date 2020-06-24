import React from "react";
import "./Jumbotron.scss";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <p className="jumbotron-main">Unlimited movies, TV shows, and more.</p>
      <p className="jumbotron-sub">Watch anywhere. Cancel anytime.</p>
      <div className="jumbotron-email">
        <form className="jumbotron-email-form">
          <input
            className="jumbotron-email-input"
            type="email"
            placeholder="Email address"
          />
          <button className="jumbotron-email-btn">TRY 30 DAYS FREE ></button>
        </form>
      </div>
      <p className="jumbotron-foot">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
    </div>
  );
};

export default Jumbotron;
