import React from "react";
import ToDoItem from "./ToDoItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../input.css";

const ToDoList = ({ items, setItems }) => {
  const handleClick = (Delete) => {
    setItems((previtems) => previtems.filter((_, index) => index !== Delete));
  };
  return (
    <div>
      {items.map((toDoItem, index) => (
        <div className="list" key={toDoItem.id}>
          <ToDoItem item={toDoItem} setItems={setItems} />
          <button onClick={() => handleClick(index)} className="delete-btn">
            <FontAwesomeIcon
              icon={faTrashCan}
              style={{ color: "rgb(128, 63, 166)" }}
              size="2x"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
