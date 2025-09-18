import React from "react";
import Cards from "../Components/Cards";
import { useState } from "react";
import AddTicket from "./AddTicket";
import TicketDetails from "./TicketDetails";
// import AddTicketForm from "./AddTicketForm";

function Actions() {
  const [panelContent, setPanelContent] = useState();

  const [tickets, setTickets] = useState(null);
  const handleCreate = (ticket) => {
    setTickets(ticket);
  };

  const handleAddTicket = () => {
    setPanelContent("addTicket");
  };

  const handleViewTicket = () => {
    setPanelContent("viewTicket");
  };

  const renderRightPanelContent = () => {
    if (panelContent === "addTicket") {
      return <AddTicket CreateTicket={handleCreate} />;
    } else if (panelContent === "viewTicket") {
      return <TicketDetails {...tickets} />;
    }
  };
  return (
    <Cards className="card-body d-flex flex-column justify-content-center align-items-center">
      <div class="container py-4">
        <div class="row g-4">
          <div class="col-2">
            <div class="card bg-white text-dark border border-secondary h-100">
              <div class="card-body">
                <h5 class="card-title text-center text-lg-start">Actions</h5>
                <div class="d-grid gap-2">
                  <button
                    onClick={handleAddTicket}
                    class="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2"
                  >
                    Add Ticket
                  </button>
                  <button
                    onClick={handleViewTicket}
                    // onClick={() =>
                    //   tickets.length > 0 && handleViewTicket(tickets[0])
                    // }
                    class="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2"
                  >
                    View Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div>
              {/* <div class="card bg-white text-dark border border-secondary h-100"> */}
              <div class="card-body">
                {/* <h5 class="card-title">Right Panel</h5>
                <p class="card-text">
                  This is a placeholder for the right panel content.
                </p> */}
                {renderRightPanelContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Cards>
  );
}

export default Actions;
