import { useContext } from "react";
import "./App.css";
import TodoFormCard from "./components/TodoFormCard";
import TodoList from "./components/TodoList";
import { TodoListContext } from "./providers/TodoListProvider";

function App() {
  const { todoList } = useContext(TodoListContext);

  return (
    <div className="App">
      <h1>Todo list app</h1>
      <TodoList todos={todoList.todos} />
      <TodoFormCard />
    </div>
  );
}

export default App;
