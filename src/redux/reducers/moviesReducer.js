import {ADD_MOVIES} from "../actions/ActionsTypes";

const initialState = {movies:[]};

export const MoviesReducer = (state= initialState, action) => {
  switch (action.type) {
    case ADD_MOVIES: return {...state, movies: [{...action.payload}]}

    default: return {...state};
  }
}
