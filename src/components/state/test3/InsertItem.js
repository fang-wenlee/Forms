import React, { useState } from "react";

const InsertItem = ({ addTask, removeAllCompleted }) => {
  const [userInput, setUserInput] = useState(null);

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
      />
      <button onClick={handleInsert}> Insert </button>
      <button onClick={handleCompleted}>Remove All Completed </button>
    </>
  );
};
export default InsertItem;
