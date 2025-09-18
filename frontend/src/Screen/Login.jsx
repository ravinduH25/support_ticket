import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (Validate()) {
  //     alert("Login form submitted");
  //     navigate("/dashboard");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Validate()) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        const data = await response.json();
        console.log("Login success:", data);

        alert("Login successful!");
        navigate("/main");
      } catch (error) {
        console.error("Error logging in:", error);
        alert("Login failed. Try again.");
      }
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 mt-5">
        <div className="card">
          <div className="card-header">
            <h3 className="text-center">Login</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
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
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-success">
                  Login
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <p>
                Don't have an account? <Link to="/register">Register here</Link>
              </p>
              {/* <p>
                Don't have an account?
                <Button
                  url="/register"
                  style="btn btn-primary"
                  name="Register"
                />
                <Link to="/register">Register here</Link>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
