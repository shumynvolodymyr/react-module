import {ADD_GENRE_ID, ADD_GENRES} from "../actions/ActionsTypes";

const initialState = {genres: [], genreId: []};

export const GenresReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GENRES:
            return {...state, genres: [{...action.payload}]}
        case ADD_GENRE_ID:
            return {...state, genreId: action.payload}
        default:
            return {...state}
    }
}
