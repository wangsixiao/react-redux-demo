import { combineReducers } from "redux";
import { ADDTODO } from '../const/index'

const todos = (state={}, action) => {
  switch (action.type) {
    case ADDTODO: 
    return Object.assign({}, state,{value: action.value})
      // return [
      //   ...state,
      //   action.value
      //   // {
      //   //   id: action.id,
      //   //   value: action.value
      //   // }
      // ]
  }
}
export default todos