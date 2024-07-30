import React from "react";
import "../input.css";

const ToDoItem = ({ item }) => {
  return (
    <div className="item">
      <input className="box" type="checkbox" id={`checkbox-${item}`} />
      <label htmlFor={`checkbox-${item}`} className="custom-checkbox"></label>
      <span>{item}</span>
    </div>
  );
};

export default ToDoItem;
