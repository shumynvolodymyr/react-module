import {combineReducers} from 'redux';
import {MoviesReducer} from "./moviesReducer";
import {GenresReducer} from "./genresReducer";

export const rootReducer = combineReducers({MoviesReducer, GenresReducer});
