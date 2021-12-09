import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

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
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </main>
  );
};

export default App;
