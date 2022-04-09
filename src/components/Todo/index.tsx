import { useContext } from "react";
import { ITodo } from "../../@types/appTypes";
import { TodoListContext } from "../../providers/TodoListProvider";

export interface ITodoProps {
  todo: ITodo;
}

export default function Todo({ todo }: ITodoProps) {
  const { dispatch } = useContext(TodoListContext);

  return (
    <li id={todo?.id}>
      {todo?.title}
      <button>Remove</button>
    </li>
  );
}
