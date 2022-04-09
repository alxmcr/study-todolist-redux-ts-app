import { combineReducers } from "redux";
import { ITodoListState } from "../../@types/storeTypes";
import { todoListReducer } from "./todoListReducer";

export interface IRootState {
    todos: ITodoListState;
}

const reducersCombined = {
    todos: todoListReducer
}

export const rootReducer = combineReducers(reducersCombined)