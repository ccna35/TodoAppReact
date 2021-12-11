import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos, search }) => {
  return (
    <ul className="todoList">
      {filteredTodos
        .filter((item) =>
          item.text.toLowerCase().includes(search.toLowerCase())
        )
        .map((todo) => (
          <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))}
    </ul>
  );
};

export default TodoList;
