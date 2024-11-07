import React, { useContext } from "react";
import { FilterContext } from "../FilterContext";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const { filter } = useContext(FilterContext);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "complete") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
};

export default TodoList;
