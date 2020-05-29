import React, { Fragment } from "react";
import Question from "./Question";
import "./Questions.scss";

const Questions = () => {
  const questions = [
    {
      main: "What is Netflix?",
      sub:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      main: "How much does Netflix cost?",
      sub:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from KRW9,500 to KRW14,500 a month. No extra costs, no contracts.",
    },
    {
      main: "Where can I watch?",
      sub:
        "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      main: "How do I cancel?",
      sub:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      main: "What can I watch on Netflix?",
      sub:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. Join free for 30 days to see everything Netflix has to offer.",
    },
    {
      main: "How does the free trial work?",
      sub:
        "Try us free for 30 days! If you enjoy your Netflix trial, do nothing and your membership will automatically continue for as long as you choose to remain a member. Cancel anytime before your trial ends and you won’t be charged. There’s no complicated contract, no cancellation fees, and no commitment. Cancel online anytime, 24 hours a day.",
    },
  ];
  return (
    <div className="question-border">
      <div className="container">
        <div className="question">
          <p className="question-main">Frequently Asked Questions</p>
          {questions.map((question, index) => (
            <Question question={question} key={index} />
          ))}
          <form className="question-form">
            <input
              className="question-form-input"
              type="email"
              placeholder="Email address"
            />
            <button className="question-form-btn">TRY 30 DAYS FREE ></button>
          </form>
          <p className="question-foot">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
