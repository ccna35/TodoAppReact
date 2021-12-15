import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const handleCheck = () => {
    setTodos(
      todos.map(function (el) {
        if (el.id === todo.id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`${todo.completed ? "checked" : ""}`}>
        {<p>{todo.text}</p>}
        {<span>{todo.date}</span>}
      </li>

      {todo.completed ? (
        <div className="todo-btn completed" onClick={handleCheck}>
          <i className="fas fa-check"></i>
        </div>
      ) : (
        <div className="todo-btn uncompleted" onClick={handleCheck}>
          <i className="fas fa-square"></i>
        </div>
      )}

      <div className="todo-btn remove" onClick={handleDelete}>
        <i className="fas fa-trash-alt"></i>
      </div>
    </div>
  );
};

export default Todo;
