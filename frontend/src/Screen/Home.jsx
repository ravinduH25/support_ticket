import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="text-center mt-5">
      <h1 class="display-4">Welcome to Support Ticket System</h1>
      <br />

      <div class="row justify-content-center mt-4">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Welcome</h5>
              <p class="card-text">
                Create support tickets and track their status. Get help from our
                dedicated support teams.
              </p>
              <Link to="/register" className="btn btn-primary me-2">
                Register
              </Link>
              <Link to="/login" className="btn btn-outline-primary">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
