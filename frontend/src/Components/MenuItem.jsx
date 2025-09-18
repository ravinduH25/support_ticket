import React from "react";
import Cards from "./Cards";

function MenuItem({ id, label, activeScreen, onScreenChange }) {
  return (
    <Cards
      className={`w-100 text-start px-3 py-2 rounded mb-2 border ${
        activeScreen === id
          ? "bg-primary border-primary text-white"
          : "border-secondary text-light bg-dark hover-bg-secondary"
      }`}
      onClick={() => onScreenChange(id)}
      style={{ cursor: "pointer" }}
    >
      {label}
    </Cards>
  );
}

export default MenuItem;
