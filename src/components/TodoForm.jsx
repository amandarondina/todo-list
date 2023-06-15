import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        className="todo-input"
        value={value}
        placeholder="Create New Task"
        onChange={(e) => setValue(e.target.value)}
      /> 
      <button type="submit" className="todo-btn">
        Add 
      </button>
    </form>
  );
};

export default TodoForm;
