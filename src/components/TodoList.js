import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <ul className="todoList">
      {filteredTodos.map((todo) => (
        <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
};

export default TodoList;
