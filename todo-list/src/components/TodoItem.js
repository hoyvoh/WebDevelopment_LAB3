import React from "react";

const TodoItem = ({ todo, toggleComplete }) => {
  return (
    <li
      onClick={() => toggleComplete(todo.id)}
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;
