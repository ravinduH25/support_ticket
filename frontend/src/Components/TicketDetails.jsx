import React from "react";

// function TicketDetails({ title, description, assignedTeam }) {
function TicketDetails(tickets) {
  // if (!title) {
  if (!tickets.title) {
    return (
      <div className="card mt-4">
        <div className="card-body text-center text-muted">
          No ticket created yet.
        </div>
      </div>
    );
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-11">
        <div className="card mt-4 shadow-sm">
          <div className="card-header bg-primary text-white">
            <h3 className="mb-0">Ticket Details</h3>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              {/* Ticket Title */}
              <div className="col-md-6 mb-3">
                <strong className="d-block text-secondary">Ticket Title</strong>
                <span className="fs-5">{tickets.title}</span>
              </div>

              {/* Description */}
              <div className="col-md-6 mb-3">
                <strong className="d-block text-secondary">Description</strong>
                <span className="fs-5">{tickets.description}</span>
              </div>

              {/* Assigned Team */}
              <div className="col-md-6 mb-3">
                <strong className="d-block text-secondary">
                  Assigned Team
                </strong>
                <span
                  className={
                    tickets.assignedTeam === "HelpDeskTeam"
                      ? "badge bg-info text-dark"
                      : "badge bg-warning text-dark"
                  }
                >
                  {tickets.assignedTeam}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketDetails;
