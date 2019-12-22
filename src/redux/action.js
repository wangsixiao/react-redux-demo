import { ADDTODO } from "../const/index";
let itemID = 0
// 添加
export const addTodo = (value) => ({
  type: ADDTODO,
  id: itemID++,
  value
})