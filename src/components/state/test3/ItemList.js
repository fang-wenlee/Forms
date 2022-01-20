import React from "react";
import Item from "./Item.js";
import "./ItemList.css";

const ItemList = ({ todos, deleteItem, markComplete }) => {
  return (
    <div className="item-list">
      {todos.map((item) => {
        return (
          <Item
            key={item.id}
            todo={item}
            deleteItem={deleteItem}
            markComplete={markComplete}
          />
        );
      })}
    </div>
  );
};
export default ItemList;
