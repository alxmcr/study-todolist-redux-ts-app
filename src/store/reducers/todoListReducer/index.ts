import { ITodoListAction, ITodoListState } from "../../../@types/storeTypes";

export const initialState: ITodoListState = {
    todos: []
}

export const todoListReducer = (state: ITodoListState = initialState, action: ITodoListAction) => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "remove":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        default:
            return state;
    }
}