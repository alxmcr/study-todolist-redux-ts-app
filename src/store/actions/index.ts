import { ITodo } from "../../@types/appTypes"
import { ITodoListAction } from "../../@types/storeTypes"

export const addTodoAction = (todo: ITodo): ITodoListAction => {
    return {
        type: "add",
        payload: todo
    }
}

export const removeTodoAction = (todo: ITodo): ITodoListAction => {
    return {
        type: "remove",
        payload: todo
    }
}