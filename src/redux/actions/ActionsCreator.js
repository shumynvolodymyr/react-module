import {ADD_GENRES, ADD_MOVIES, SET_CURRENT_PAGE} from "./ActionsTypes";

export const setMovies = (data) => {
    return {type: ADD_MOVIES, payload: data};
}

export const setGenres = (data) => {
    return {type: ADD_GENRES, payload: data};
}

export const setCurrentPage = (data) => {
    return {type: SET_CURRENT_PAGE, payload: data};
}
