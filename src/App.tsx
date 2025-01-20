import { useState } from "react";
import "./App.css";
import React from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;

    const newTask: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>Todos</h1>

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>

      <div className="filters">
        <span>{todos.filter((todo) => !todo.completed).length} items left</span>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  );
}

export default App;
