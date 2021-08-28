import {CLEAR_STORE, GET_USERS, PUSH_USER} from "../actions/";

export const usersReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: [...action.payload]};
        case CLEAR_STORE:
            return {...state, users:[]};
        case PUSH_USER:
            return {...state, users: [...state.users,action.payload]}
        default:
            return state;
    }
}
