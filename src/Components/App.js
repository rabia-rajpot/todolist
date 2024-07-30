import React, { useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import "../input.css";
import Filter from "./Filter";

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <div className="main">
      <ToDoInput setItems={setItems} />
      <Filter />
      <ToDoList items={items} setItems={setItems} />
    </div>
  );
};

export default App;
