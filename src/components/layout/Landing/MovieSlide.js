import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MovieSlide.scss";

const MovieSlide = ({ title, movies }) => {
  console.log(movies);
  return (
    <Fragment>
      <h2>{title}</h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          largescreen: {
            breakpoint: {
              max: 3000,
              min: 1300,
            },
            items: 6,
            partialVisibilityGutter: 100,
          },
          desktop: {
            breakpoint: {
              max: 1300,
              min: 1098,
            },
            items: 5,
            partialVisibilityGutter: 100,
          },
          bigtablet: {
            breakpoint: {
              max: 1098,
              min: 840,
            },
            items: 4,
            partialVisibilityGutter: 100,
          },

          tablet: {
            breakpoint: {
              max: 840,
              min: 570,
            },
            items: 3,
            partialVisibilityGutter: 100,
          },
          mobile: {
            breakpoint: {
              max: 570,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 100,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {movies.map((movie) => (
          <a
            href={`https://www.youtube.com/results?search_query=${movie.name}&page=&utm_source=opensearch`}
          >
            <img
              src={`http://image.tmdb.org/t/p/w185/` + movie.backdrop_path}
              alt="movie poster"
            />
          </a>
        ))}
      </Carousel>
      ;
    </Fragment>
  );
};

export default MovieSlide;
