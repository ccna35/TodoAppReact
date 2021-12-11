import React, { useEffect } from "react";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import NoTodos from "./components/NoTodos";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterTodos = (status) => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterTodos(status);
  }, [todos, status]);

  // Functions

  return (
    <main className="container">
      <h1 className="title">
        Todo App <i className="far fa-list-alt"></i>
      </h1>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      {todos.length === 0 ? (
        <NoTodos />
      ) : (
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      )}
    </main>
  );
};

export default App;
