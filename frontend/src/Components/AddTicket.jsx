import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function AddTicket({ CreateTicket }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignedTeam: "HelpDeskTeam",
  });

  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Validate()) {
      alert("Ticket Created successfully");
      CreateTicket(formData);
    }
  };
  const Validate = () => {
    //Check all fields are filled
    for (const key in formData) {
      if (!formData[key]) {
        alert(`Please fill the ${key} field!`);
        return false;
      }
    }
    return true;
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-11">
        <div className="card mt-4">
          <div className="card-header">
            <h3>Create New Support Ticket</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* Title */}
              <div className="mb-3">
                <label className="form-label">Ticket Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Enter a brief title for your issue"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              {/* Description */}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="5"
                  placeholder="Please provide a detailed description of your issue"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              {/* Assign to Team */}
              <div className="mb-3">
                <label className="form-label">Assign to Team</label>
                <select
                  name="assignedTeam"
                  className="form-select"
                  value={formData.assignedTeam}
                  onChange={handleChange}
                >
                  <option value="HelpDeskTeam">Help Desk Team</option>
                  <option value="EngineeringTeam">Engineering Team</option>
                </select>
                <div className="form-text">
                  <strong>Help Desk Team:</strong> General support, account
                  issues, basic troubleshooting
                  <br />
                  <strong>Engineering Team:</strong> Technical issues, software
                  problems, system errors
                </div>
              </div>

              {/* Buttons */}
              <div className="d-flex justify-content-between">
                {/* <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate("/tickets")}
                >
                  Back to Tickets
                </button> */}
                <button type="submit" className="btn btn-success">
                  Create Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTicket;
