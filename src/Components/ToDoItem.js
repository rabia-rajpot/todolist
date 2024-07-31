import React from "react";
import "../input.css";

const ToDoItem = ({ item, setItems }) => {

  const handleCheck = (e) => {
    const checked = e.target.checked

    setItems(prevItems => {
      return prevItems.map(
        prevItem => prevItem.value === item.value
          ? {...prevItem, itemStatus: checked ? "done" : "active"}
          : prevItem
      )
    })
  }
  return (
    <div className="item">
      <input onChange={handleCheck} className="box" type="checkbox" id={`checkbox-${item.value}`} />
      <label htmlFor={`checkbox-${item.value}`} className="custom-checkbox"></label>
      <span>{item.value}</span>
    </div>
  );
};

export default ToDoItem;
