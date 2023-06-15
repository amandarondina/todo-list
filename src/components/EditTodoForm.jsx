import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };

  return (
    <form className="todo-form-update" onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        className="todo-update"
        value={value}
        placeholder="Update Entry"
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit" className="update-btn">
        <FontAwesomeIcon icon={faCheck} className="fa-update" />
      </button>
    </form>
  );
};

export default EditTodoForm;
