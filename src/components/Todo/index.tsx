import { useContext } from "react";
import { ITodo } from "../../@types/appTypes";
import { TodoListContext } from "../../providers/TodoListProvider";
import { removeTodoAction } from "../../store/actions";

export interface ITodoProps {
  todo: ITodo;
}

export default function Todo({ todo }: ITodoProps) {
  const { dispatch } = useContext(TodoListContext);

  const onRemove = (todoToRemove: ITodo) => {
    dispatch(removeTodoAction(todoToRemove));
  };

  return (
    <li id={todo?.id}>
      {todo?.title}
      <button onClick={() => onRemove(todo)}>Remove</button>
    </li>
  );
}
