import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setMail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const signin = () => {
    let login = { email, password: Password };
    axios
      .post("http://localhost:8080/api/auth/login", login)
      .then((res) => {
        let token = res.data.jwt;
        localStorage.setItem("token", token);
        navigate("/"); // Redirect to home after successful signin
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-5">
              <h2 className="text-center mb-4 text-primary">Sign In</h2>

              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                className="btn btn-primary w-100 p-2"
                onClick={signin}
              >
                Sign In
              </button>

              <div className="text-center mt-3">
                <p className="text-muted">
                  Don't have an account?{" "}
                  <a href="/signup" className="text-primary">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
