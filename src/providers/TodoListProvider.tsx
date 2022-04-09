import React from "react";
import { ITodoListAction, ITodoListState } from "../@types/storeTypes";
import { initialState, todoListReducer } from "../store/reducers/todoListReducer";

export interface ITodoListContextState {
  dispatch: React.Dispatch<ITodoListAction>;
  todoList: ITodoListState;
}

const initialStateContext: ITodoListContextState = {
  dispatch: () => {},
  todoList: {
    todos: initialState.todos,
  },
};

export const TodoListContext = React.createContext(initialStateContext);

export const TodoListProvider: React.FC = ({ children }) => {
  const [todoList, dispatch] = React.useReducer(todoListReducer, initialState);
  const value: ITodoListContextState = { todoList, dispatch };

  return (
    <TodoListContext.Provider value={value}>
      {children}
    </TodoListContext.Provider>
  );
};
