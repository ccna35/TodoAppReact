import React, { useEffect } from "react";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import NoTodos from "./components/NoTodos";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState("");
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
    const searchTodos = (search) => {
      setFilteredTodos(todos.filter((item) => item.text.includes(search)));
    };
    searchTodos(search);
    filterTodos(status);
  }, [todos, status, search]);

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
        search={search}
        setSearch={setSearch}
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
