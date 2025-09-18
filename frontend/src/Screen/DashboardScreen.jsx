import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import DashboardItem from "../Components/DashboardItem";

const DashboardScreen = () => {
  const [status, setStatus] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const total = data.length;
        const open = data.filter((item) => !item.completed).length;
        const resolved = data.filter((item) => item.completed).length;
        const inProgress = data.filter((item) => !item.completed).length / 2;
        // const inProgress = total - open - resolved;
        setStatus({ total, open, inProgress, resolved });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Cards className="container mt-4 border p-4">
      <h3 className="mb-4">Dashboard Screen</h3>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <DashboardItem
            title="Total Tickets"
            value={status.total}
            color="bg-info"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <DashboardItem
            title="Open Tickets"
            value={status.open}
            color="bg-warning"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <DashboardItem
            title="In Progress"
            value={status.inProgress}
            color="bg-primary"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <DashboardItem
            title="Resolved"
            value={status.resolved}
            color="bg-success"
          />
        </div>
      </div>
    </Cards>
  );
};

export default DashboardScreen;
