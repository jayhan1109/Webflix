import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: false,
});

export const userNameState = atom({
  key: "userNameState",
  default: "",
});

export const popularMovieState = atom({
  key: "popularMovieState",
  default: [],
});

export const topRatedMovieState = atom({
  key: "topRatedMovieState",
  default: [],
});

export const popularShowState = atom({
  key: "popularShowState",
  default: [],
});

export const topRatedShowState = atom({
  key: "topRatedShowState",
  default: [],
});
