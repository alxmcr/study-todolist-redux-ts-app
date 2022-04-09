import { combineReducers } from "redux";
import { todoListReducer } from "./todoListReducer";

export const rootReducer = combineReducers({
    todoList: todoListReducer
})