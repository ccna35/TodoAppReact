import React from "react";

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
  search,
  setSearch,
}) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newDate = new Date();
    const dateAdded = `${newDate.getFullYear()}-${
      newDate.getMonth() + 1
    }-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}`;
    if (inputText) {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: todos.length ? todos[todos.length - 1].id + 1 : 0,
          date: dateAdded,
        },
      ]);
    }

    setInputText("");
  };

  const filteredTodos = (e) => {
    setStatus(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form className="form">
      <input
        type="text"
        onChange={handleInputText}
        value={inputText}
        placeholder="Add a new todo..."
        className="todoInput"
      />
      <input
        type="text"
        placeholder="Search"
        className="searchInput"
        onChange={handleSearch}
      />
      <input
        type="submit"
        value="Add"
        className="btn add"
        onClick={handleSubmit}
      />
      <select onChange={filteredTodos}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
};

export default Form;
