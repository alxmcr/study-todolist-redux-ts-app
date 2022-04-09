import { ITodo } from "../../@types/appTypes";

export interface ITodoProps {
  todo: ITodo;
}

export default function Todo({ todo }: ITodoProps) {
  return <li id={todo?.id}>{todo?.title}</li>;
}
