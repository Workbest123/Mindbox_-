import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./TodoApp";

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
