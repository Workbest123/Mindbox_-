import React, { useState } from "react";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [input, setInput] = useState("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTodo(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default TodoInput;
