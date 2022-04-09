import TodoFormCard from "./components/TodoFormCard";
import TodoList from "./components/TodoList";
import useTodoList from "./hooks/useTodoList";
import "./App.css";

function App() {
  const todoList = useTodoList();

  return (
    <div className="App">
      <h1>Todo list app</h1>
      <TodoList todos={todoList.todos} />
      <TodoFormCard />
    </div>
  );
}

export default App;
