import React from "react";
import "./CardItem.scss";

const CardItem = ({ item, num }) => {
  const { main, sub, img, vid } = item;

  console.log(num);

  if (num % 2 === 0) {
    return (
      <div className="card">
        <div className="container">
          <div className="row">
            <div className="col s6">
              <div className="media">
                <img src={img} className="media-img" />
                <video className="media-vid" autoPlay playsInline muted loop>
                  <source src={vid} />
                </video>
              </div>
            </div>
            <div className="col s6">
              <div className="txt">
                <div className="txt-main">{main}</div>
                <div className="txt-sub">{sub}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="container">
        <div className="row">
          <div className="col s6">
            <div className="txt">
              <div className="txt-main">{main}</div>
              <div className="txt-sub">{sub}</div>
            </div>
          </div>
          <div className="col s6">
            <div className="media">
              <img src={img} className="media-img" />
              <video className="media-vid" autoPlay playsInline muted loop>
                <source src={vid} />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
