import {CLEAR_STORE, GET_USERS, PUSH_USER} from "./index";


const fetchUsers = (value) => {
  return {type: GET_USERS, payload: value};
}

const pushUser = (value) => {
  return {type: PUSH_USER, payload: value};
}

const clearStore = ()=>{
  return {type: CLEAR_STORE};
}

export {fetchUsers, pushUser, clearStore};
