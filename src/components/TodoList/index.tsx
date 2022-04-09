import { ITodo } from "../../@types/appTypes";
import Todo from "../Todo";

interface ITodoListProps {
  todos: ITodo[];
}

export default function TodoList({ todos = [] }: ITodoListProps) {
  if (todos.length === 0) {
    return <p>No todos</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
