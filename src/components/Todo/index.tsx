import { useDispatch } from "react-redux";
import { ITodo } from "../../@types/appTypes";
import { removeTodoAction } from "../../store/actions";

export interface ITodoProps {
  todo: ITodo;
}

export default function Todo({ todo }: ITodoProps) {
  const dispatch = useDispatch();

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
