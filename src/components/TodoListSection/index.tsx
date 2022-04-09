import useTodos from "../../hooks/useTodoList";
import TodoFormCard from "../TodoFormCard";
import TodoList from "../TodoList";

export default function TodoListSection() {
  const todos = useTodos();

  return (
    <section>
      <TodoList todos={todos} />
      <TodoFormCard />
    </section>
  );
}
