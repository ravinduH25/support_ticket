import React from "react";
import MenuItem from "./MenuItem";
import Cards from "./Cards";

const Sidebar = ({ activeScreen, onScreenChange }) => {
  return (
    <nav className="bg-dark text-white vh-100 p-3 border-end d-flex flex-column">
      <Cards className="flex-grow-1">
        <MenuItem
          id="dashboard"
          label="Dashboard Screen"
          activeScreen={activeScreen}
          onScreenChange={onScreenChange}
        />
        <MenuItem
          id="addticket"
          label="Add Ticket"
          activeScreen={activeScreen}
          onScreenChange={onScreenChange}
        />
      </Cards>
    </nav>
  );
};

export default Sidebar;
