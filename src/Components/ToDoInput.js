import { useState } from "react";
import "../input.css";
const ToDoInput = ({ setItems }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = { id: Date.now(),value: value, completed: false };
    if (newToDo.value) {
      setItems((prevItems) => [...prevItems, newToDo]);
      setValue("");
    }
  };

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          key={value.id}
          value={value}
          placeholder="Add Item"
          className="input"
        />
        <button className="btn" disabled={!value} type="submit">
          Add List
        </button>
      </form>
    </div>
  );
};

export default ToDoInput;
