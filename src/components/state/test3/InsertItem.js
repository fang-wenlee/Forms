import React, { useState } from "react";

const InsertItem = ({ addTask }) => {
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
  return (
    <>
      <input
        type="text"
        size="60"
        value={userInput}
        onChange={handleChange}
        placeholder="Enter task"
      />
      <button onClick={handleInsert}> Insert </button>
    </>
  );
};
export default InsertItem;
