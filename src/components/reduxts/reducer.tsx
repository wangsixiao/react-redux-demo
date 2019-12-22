import { combineReducers } from "redux";
import { Istate, Iaction, ADDTODO } from '../../const/index'

const todos = (state={}, action:Iaction) => {
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