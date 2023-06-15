import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toggleComplete, editTodo, deleteTodo }) => {
  return (
    <>
      {task.task && (
        <div className="todo">
          <div className="todo-entry">
            <p
              className={`${task.completed ? "completed" : ""}`}
              onClick={() => toggleComplete(task.id)}
            >
              {task.task}
            </p>
            <p className="entry-date">created {task.taskDate}</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="fa-edit"
              onClick={() => editTodo(task.id)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className="fa-trash"
              onClick={() => deleteTodo(task.id)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
