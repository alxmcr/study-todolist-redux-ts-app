import useTodoList from "../../hooks/useTodoList";
import TodoFormCard from "../TodoFormCard";
import TodoList from "../TodoList";

export default function TodoListSection() {
  const todoList = useTodoList();

  return (
    <section>
      <TodoList todos={todoList.todos} />
      <TodoFormCard />
    </section>
  );
}
