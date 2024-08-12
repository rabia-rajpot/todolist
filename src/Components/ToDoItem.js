import React from "react";
import "../input.css";

const ToDoItem = ({ item, setItems }) => {
  const handleCheck = (e) => {
    const checked = e.target.checked;

    setItems((prevItems) => {
      return prevItems.map((prevItem) =>
        prevItem.id === item.id
          ? { ...prevItem, completed: checked ? "done" : "active" }
          : prevItem
      );
    });
    console.log(item.completed);
  };
  return (
    <div className="item">
      <input
        onChange={handleCheck}
        checked={item.completed}
        className="box"
        type="checkbox"
        id={`checkbox-${item.id}`}
      />
      <label
        htmlFor={`checkbox-${item.id}`}
        className="custom-checkbox"
      ></label>
      <span>{item.title}</span>
      <span>{item.value}</span>
    </div>
  );
};

export default ToDoItem;
