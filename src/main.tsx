import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TodoListProvider } from "./providers/TodoListProvider";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <TodoListProvider>
      <App />
    </TodoListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
