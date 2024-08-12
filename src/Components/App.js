import React, { useEffect, useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import "../input.css";
import Filter from "./Filter";

const App = () => {
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState("all");

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const data = await res.json();
      const updatedData = data.map((item) => ({ ...item, completed: false }));
      setItems(updatedData);
    };
    fetchPost();
  }, []);
  const activatedItems = items.filter((item) => !item.completed);
  const doneItems = items.filter((item) => item.completed);

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

  return (
    <div className="main">
      <ToDoInput setItems={setItems} />
      <Filter setFilterItems={setFilterItems} filterItems={filterItems} />
      <ToDoList items={handleCheckbox()} setItems={setItems} />
    </div>
  );
};

export default App;
