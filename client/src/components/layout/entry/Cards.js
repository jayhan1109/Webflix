import React, { Fragment } from "react";
import CardItem from "./CardItem";

const Cards = () => {
  const items = [
    {
      main: "Enjoy on your TV.",
      sub:
        "Watch on Smart TVs, Playstation, Xbox, Chromecase, Apple TV, Blu-ray players and more.",
      img:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
      vid:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
    },
    {
      main: "Download your shows to watch offline.",
      sub: "Save your favorites easily and always have something to watch.",
      img:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
      vid:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
    },
    {
      main: "Watch everywhere.",
      sub:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
      img:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
      vid:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
    },
  ];

  return (
    <Fragment>
      {items.map((item, index) => (
        <CardItem item={item} key={index} num={index} />
      ))}
    </Fragment>
  );
};

export default Cards;
