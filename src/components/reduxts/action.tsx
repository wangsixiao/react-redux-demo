import { ADDTODO, Iaction } from "../../const/index";
let itemID = 0
// 添加
export const addTodo = (value:string):Iaction => ({
  type: ADDTODO,
  id: itemID++,
  value
})