import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-primary" href="#">
          Support System
        </a>
        <div className="collapse navbar-collapse d-sm-inline-flex justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold px-3" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold px-3" href="#">
                User Manage
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger fw-semibold px-3" href="/home">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
