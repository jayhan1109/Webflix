import React, { useEffect, Fragment } from "react";
import firebase from "../../../service/firebase";
import axios from "axios";
import Navbar from "../entry/Navbar";
import { useSetRecoilState, useRecoilState } from "recoil";
import {
  userNameState,
  popularMovieState,
  topRatedMovieState,
  popularShowState,
  topRatedShowState,
} from "../../../recoil/auth";
import MovieSlide from "./MovieSlide";
import "./Landing.scss";

const Landing = () => {
  // Recoil States
  const setUserName = useSetRecoilState(userNameState);
  const [popularMovie, setPopularMovie] = useRecoilState(popularMovieState);
  const [topMovie, setTopMovie] = useRecoilState(topRatedMovieState);
  const [popularShows, setPopularShow] = useRecoilState(popularShowState);
  const [topShow, setTopShow] = useRecoilState(topRatedShowState);

  useEffect(() => {
    // Get username and store
    setUserName(firebase.auth().currentUser.displayName);

    // Fetch data from Movie API when the component mounted
    getPopularMovies();
    getTopRatedMovies();
    getPopularShows();
    getTopRatedShows();
  }, []);

  /**
   * Fetch Data with Movie API using axios
   */

  const getPopularMovies = async () => {
    const res = await axios.get(process.env.REACT_APP_POPULAR_MOVIES);
    setPopularMovie(res.data.results);
  };

  const getTopRatedMovies = async () => {
    const res = await axios.get(process.env.REACT_APP_TOP_MOVIES);
    setTopMovie(res.data.results);
  };

  const getPopularShows = async () => {
    const res = await axios.get(process.env.REACT_APP_POPULAR_SHOWS);
    setPopularShow(res.data.results);
  };

  const getTopRatedShows = async () => {
    const res = await axios.get(process.env.REACT_APP_TOP_SHOWS);
    setTopShow(res.data.results);
  };

  return (
    <Fragment>
      <div className="spacing">
        <Navbar />
        <MovieSlide title={"Popular Movies"} movies={popularMovie} />
        <MovieSlide title={"Top Movies"} movies={topMovie} />
        <MovieSlide title={"Popular Shows"} movies={popularShows} />
        <MovieSlide title={"Top Shows"} movies={topShow} />
      </div>
    </Fragment>
  );
};

export default Landing;
