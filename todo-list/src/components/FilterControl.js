import React, { useContext } from "react";
import { FilterContext } from "../FilterContext";

const FilterControl = () => {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <div>
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>
        All
      </button>
      <button
        onClick={() => setFilter("complete")}
        disabled={filter === "complete"}
      >
        Complete
      </button>
      <button
        onClick={() => setFilter("incomplete")}
        disabled={filter === "incomplete"}
      >
        Incomplete
      </button>
    </div>
  );
};

export default FilterControl;
