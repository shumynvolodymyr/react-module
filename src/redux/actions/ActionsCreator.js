import {ADD_GENRES, ADD_MOVIES} from "./ActionsTypes";

export const setMovies = (data) => {
  return {type: ADD_MOVIES, payload: data};
}

export const setGenres = (data) => {
  return {type: ADD_GENRES, payload: data};
}
