import React from "react";
import "./Item.css";

const Item = ({ todo, deleteItem, markComplete }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    deleteItem(todo.id);
  };

  const handleComplete = (e) => {
    e.preventDefault();
    markComplete(todo.id);
  };
  return (
    <div className="item-container">
      <h3
        className={todo.complete ? "todo strike" : "todo"}
        onClick={handleComplete}
      >
        {todo.task}
      </h3>
      <div className="buttons-container">
        <button className="delete-button" onClick={handleDelete}>
          Delete task
        </button>
      </div>
    </div>
  );
};
export default Item;
