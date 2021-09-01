import {ADD_GENRES} from "../actions/ActionsTypes";

const initialState = {genres:[]};

export const GenresReducer = (state=initialState, action) => {
  switch (action.type) {
      case ADD_GENRES: return {...state, genres: [{...action.payload}]}
      default: return {...state}
  }
}
