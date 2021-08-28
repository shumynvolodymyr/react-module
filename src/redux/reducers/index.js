import {usersReducer} from "./usersReducer";
import {postsReducer} from "./postsReducer";
import {combineReducers} from 'redux'

let rootReducer = combineReducers({usersReducer, postsReducer});

export {rootReducer};
