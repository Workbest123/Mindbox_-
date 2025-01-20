import React from "react";
import { Todo } from "./TodoApp";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
          {todo.text}
        </span>
      </label>
    </li>
  );
};

export default TodoItem;
