import {ADD_MOVIES, SET_CURRENT_PAGE, SET_MODAL_STATUS, SET_MOVIE_VIDEOS} from "../actions/ActionsTypes";

const initialState = {movies: [], movieIdVideos: [], modal: false};

export const MoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIES:
            return {...state, movies: [{...action.payload}]}
        case SET_CURRENT_PAGE:
            return {...state, movies: [{...action.payload}]}
        case SET_MOVIE_VIDEOS:
            return {...state, movieIdVideos: [{...action.payload}]}
        case SET_MODAL_STATUS:
            return {...state, modal: action.payload}
        default:
            return {...state};
    }
}
