import React, { useState, useEffect, useRef } from "react";

const InsertItem = ({ addTask, removeAllCompleted, flag }) => {
  const [userInput, setUserInput] = useState(null);
  const todoRef = useRef();

  useEffect(() => {
    todoRef.current.focus();
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);

    // addTask(userInput)
  };
  const handleInsert = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  const handleCompleted = (e) => {
    e.preventDefault();

    removeAllCompleted();
  };

  return (
    <>
      <input
        type="text"
        size="40"
        value={userInput}
        onChange={handleChange}
        placeholder="Enter task"
        ref={todoRef}
      />
      <button onClick={handleInsert}> Insert </button>
      <button onClick={handleCompleted}>
        {flag === true ? "Whole list of Todos" : "UnFinish Todos"}
      </button>
    </>
  );
};
export default InsertItem;
