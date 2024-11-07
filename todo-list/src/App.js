import React, { useState } from "react";
import { FilterProvider } from "./FilterContext";
import TodoList from "./components/TodoList";
import FilterControl from "./components/FilterControl";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  return (
    <FilterProvider>
      <div>
        <h1>To-Do List</h1>
        <input
          type="text"
          placeholder="Add a new to-do"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim()) {
              addTodo(e.target.value.trim());
              e.target.value = ""; // Clear input
            }
          }}
        />
        <FilterControl />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </FilterProvider>
  );
};

export default App;
