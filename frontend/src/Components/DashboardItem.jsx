import React from "react";
import Cards from "../Components/Cards";

const DashboardItem = ({ title, value, color = "bg-success" }) => {
  return (
    <Cards
      className={`card text-white ${color} mb-3`}
      style={{ minHeight: "100px" }}
    >
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <h4 className="card-title">{title}</h4>
        {value && <p className="card-text fs-4 fw-bold mt-2">{value}</p>}
      </div>
    </Cards>
  );
};

export default DashboardItem;
