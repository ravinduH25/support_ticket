import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let validInput = value;

    if (name === "name") {
      // English letters only
      validInput = value.replace(/[^a-zA-Z]/g, "");
    } else if (name === "phone") {
      // Numbers only
      validInput = value.replace(/[^0-9]/g, "");
    }

    setFormData({ ...formData, [name]: validInput });
  };

  const Validate = () => {
    //Check all fields are filled
    for (const key in formData) {
      if (!formData[key]) {
        alert(`Please fill the ${key} field!`);
        return false;
      }
    }

    // Check phone number is exactly 10 digits
    if (formData.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits!");
      return false;
    }
    // Check password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }
    // Check password length at least 6 characters
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Validate()) {
      alert("Form submitted successfully");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 mt-5">
        <div className="card">
          <div className="card-header">
            <h3 className="text-center">Register</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Birthday</label>
                <input
                  type="date"
                  name="birthday"
                  className="form-control"
                  value={formData.birthday}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="form-text">
                  Password must be at least 6 characters long.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-success">
                  Register
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <p>
                Already have an account? <Link to="/login">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
