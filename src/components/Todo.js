import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <li>
        {todo.text}
        {<span>{todo.date}</span>}
      </li>
      <div className="todo-btn check">
        <i className="fas fa-check"></i>
      </div>
      <div className="todo-btn remove">
        <i className="fas fa-trash-alt"></i>
      </div>
    </div>
  );
};

export default Todo;
