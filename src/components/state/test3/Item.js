import React from "react";
import "./Item.css";

const Item = ({ todo, deleteItem }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    deleteItem(todo.id);
  };
  return (
    <div className="item-container">
      <h3>{todo.task}</h3>
      <div className="buttons-container">
        <button className="delete-button" onClick={handleDelete}>
          Delete task
        </button>
      </div>
    </div>
  );
};
export default Item;
