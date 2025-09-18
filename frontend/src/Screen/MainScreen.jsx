import React from "react";
import Cards from "../Components/Cards";
import Navbar from "../Components/Navbar";
import DashboardScreen from "./DashboardScreen";
import Actions from "../Components/Actions";

function MainScreen() {
  return (
    <div>
      {/* Header Section */}
      <Cards className="container mt-5">
        <div className="card bg-dark text-white shadow-lg border-0 rounded-3">
          <div className="card-body text-center py-5">
            <h1 className="display-4 fw-bold">
              Welcome to Support Ticket System
            </h1>
          </div>
        </div>
      </Cards>

      <br />

      {/* Navigation */}
      <Navbar />

      {/* Welcome Card */}
      {/* <Cards className="row justify-content-center mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Welcome</h5>
              <p className="card-text">
                Create support tickets and track their status. Get help from our
                dedicated support teams.
              </p>
            </div>
          </div>
        </div>
      </Cards> */}
      <DashboardScreen />
      <Actions />
    </div>
    // <div class="text-center mt-5">
    //   <h1 class="display-4">Welcome to Support Ticket System</h1>
    //   <br />
  );
}

export default MainScreen;
