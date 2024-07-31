import React, { useEffect, useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import "../input.css";
import Filter from "./Filter";

const App = () => {
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState("all");

  const activatedItems = items.filter(item => item.status === "active");
  const doneItems = items.filter(item => item.status === "done");
  
  
  const handleCheckbox = () => {
    switch (filterItems) {
      case "active":
        return activatedItems;
      case "done":
        return doneItems;
      default:
        return items;
    }
  };
  

 console.log(filterItems);

  return (
    <div className="main">
      <ToDoInput setItems={setItems} />
      <Filter setFilterItems={setFilterItems} filterItems={filterItems} />
      <ToDoList items={handleCheckbox()} setItems={setItems} />
    </div>
  );
};

export default App;
