import {combineReducers} from 'redux';
import {MoviesReducer} from "./moviesReducer";
import {GenresReducer} from "./genresReducer";
import {usersReducer} from "./usersReducer";

export const rootReducer = combineReducers({MoviesReducer, GenresReducer, usersReducer});
