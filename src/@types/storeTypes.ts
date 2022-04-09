import { ITodo } from "./appTypes";

export interface ITodoListState {
    todos: ITodo[];
}

export interface ITodoListAction {
    type: "add" | "remove";
    payload: ITodo;
}