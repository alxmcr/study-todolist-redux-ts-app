import { combineReducers } from "redux";
import { ITodoListState } from "../../@types/storeTypes";
import { todoListReducer } from "./todoListReducer";

export interface IRootState {
    todoList: ITodoListState;
}

const reducersCombined = {
    todoList: todoListReducer
}

export const rootReducer = combineReducers(reducersCombined)