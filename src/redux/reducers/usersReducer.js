import {SET_USER} from "../actions/ActionsTypes";

const initialState = {userName: {login: '', password:''}};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER :
            return {...state, userName: action.payload}
        default:
            return {...state};
    }
}
