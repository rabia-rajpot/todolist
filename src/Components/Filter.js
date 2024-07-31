const Filter = ({ setFilterItems, filterItems }) => {
    console.log(filterItems);
  return (
    <div className="active">
      <button
        className={`btn ${filterItems === "all" ? "filter" : ""}`}
        onClick={() => setFilterItems("all")}
      >
        All
      </button>
      <button
        className={`btn ${filterItems === "active" ? "filter" : ""}`}
        onClick={() => setFilterItems("active")}
      >
        Active
      </button>
      <button
        className={`btn ${filterItems === "done" ? "filter" : ""}`}
        onClick={() => setFilterItems("done")}
      >
        Done
      </button>
    </div>
  );
};

export default Filter;
