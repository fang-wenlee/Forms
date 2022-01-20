import React from "react";
import Item from "./Item.js";
import "./ItemList.css";

const ItemList = ({ todos, deleteItem }) => {
  return (
    <div className="item-list">
      {todos.map((item) => {
        return <Item todo={item} deleteItem={deleteItem} />;
      })}
    </div>
  );
};
export default ItemList;
