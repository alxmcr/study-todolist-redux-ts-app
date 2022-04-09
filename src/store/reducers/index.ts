import { combineReducers } from "redux";
import { ITodoListState } from "../../@types/storeTypes";
import { todoListReducer } from "./todoListReducer";

export interface IRootState {
    todoList: ITodoListState;
}

export const rootReducer = combineReducers<IRootState>({
    todoList: todoListReducer
})