import React from "react";
import Item from "./Item.js";
import "./ItemList.css";

const ItemList = ({ todos, deleteItem, markComplete }) => {
  //console.log("Item List comp : ", flag);

  return (
    // <div className={`item-list ${flag ? "all-todos" : "hide-todos"}`}>
    <div>
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
