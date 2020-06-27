import React, { useEffect, Fragment, useState } from "react";
import firebase from "../../../service/firebase";
import axios from "axios";
import Navbar from "../entry/Navbar";
import { useSetRecoilState, useRecoilState } from "recoil";
import {
  userNameState,
  popularMovieState,
  topRatedMovieState,
} from "../../../recoil/auth";
import MovieSlide from "./MovieSlide";

const Landing = () => {
  useEffect(() => {
    setUserName(firebase.auth().currentUser.displayName);
    getPopularMovies();
    getTopRatedMovies();
  }, []);

  const setUserName = useSetRecoilState(userNameState);
  const [popularMovie, setPopularMovie] = useRecoilState(popularMovieState);
  const [topMovie, setTopMovie] = useRecoilState(topRatedMovieState);

  const getPopularMovies = async () => {
    const res = await axios.get(process.env.REACT_APP_POPULAR_MOVIES);
    setPopularMovie(res.data.results);
  };

  const getTopRatedMovies = async () => {
    const res = await axios.get(process.env.REACT_APP_TOP_MOVIES);
    setTopMovie(res.data.results);
  };

  return (
    <Fragment>
      <Navbar />
      <MovieSlide title={"Popular Movies"} movies={popularMovie} />
      <MovieSlide title={"Top Movies"} movies={topMovie} />
    </Fragment>
  );
};

export default Landing;
