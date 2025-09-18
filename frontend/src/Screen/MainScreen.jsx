import React from "react";
import Cards from "../Components/Cards";
import Navbar from "../Components/Navbar";
import DashboardScreen from "./DashboardScreen";
import Actions from "../Components/Actions";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import Footer from "../Components/Footer/Footer";

function MainScreen() {
  const [activeScreen, setActiveScreen] = useState("main");
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

      <Cards className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-2 p-0">
            <Sidebar
              activeScreen={activeScreen}
              onScreenChange={setActiveScreen}
            />
          </div>

          {/* Main Content */}
          <div className="col-10 p-4">
            <DashboardScreen />
            <Actions />
          </div>
        </div>
      </Cards>
      {/* <Footer /> */}

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
      {/* <DashboardScreen /> */}
      {/* <Actions /> */}
    </div>
    // <div class="text-center mt-5">
    //   <h1 class="display-4">Welcome to Support Ticket System</h1>
    //   <br />
  );
}

export default MainScreen;
