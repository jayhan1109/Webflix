import { atom } from "recoil";

// Check if user is logged in
export const authState = atom({
  key: "authState",
  default: false,
});

// Store username
export const userNameState = atom({
  key: "userNameState",
  default: "",
});

// Store popular movies
export const popularMovieState = atom({
  key: "popularMovieState",
  default: [],
});

// Store top rated movies
export const topRatedMovieState = atom({
  key: "topRatedMovieState",
  default: [],
});

// Store popular shows
export const popularShowState = atom({
  key: "popularShowState",
  default: [],
});

// Store top rated shows
export const topRatedShowState = atom({
  key: "topRatedShowState",
  default: [],
});
