import {
    ADD_GENRE_ID,
    ADD_GENRES,
    ADD_MOVIES,
    SET_CURRENT_PAGE,
    SET_MODAL_STATUS,
    SET_MOVIE_VIDEOS, SET_USER
} from "./ActionsTypes";

export const setMovies = (data) => {
    return {type: ADD_MOVIES, payload: data};
}

export const setGenres = (data) => {
    return {type: ADD_GENRES, payload: data};
}
export const setGenreId = (data) => {
    return {type: ADD_GENRE_ID, payload: data};
}

export const setCurrentPage = (data) => {
    return {type: SET_CURRENT_PAGE, payload: data};
}
export const setMovieIdVideos = (value) => {
    return {type: SET_MOVIE_VIDEOS, payload: value};
}
export const setModalStatus = (value) => {
    return {type: SET_MODAL_STATUS, payload: value};
}

export const setUserName = (name) => {
  return{type: SET_USER, payload:name};
}
