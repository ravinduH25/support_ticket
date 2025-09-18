import React from "react";
import { useState } from "react";
import AddTicket from "../Components/AddTicket";
import TicketDetails from "../Components/TicketDetails";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer/Footer";

function Dashboard() {
  const [tickets, setTickets] = useState(null);
  const handleCreate = (ticket) => {
    setTickets(ticket);
  };

  return (
    <div>
      <Navbar />
      <h2 class="text-center mt-4">Dashboard</h2>
      <div class="row">
        <div class="col-md-6">
          <AddTicket CreateTicket={handleCreate} />
        </div>
        <div class="col-md-6">
          <TicketDetails {...tickets} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
