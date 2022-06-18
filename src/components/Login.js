import React from "react";
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "./assets/bg.webp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPwd(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: pwd,
      })
      .then((response) => {
        console.log(response.data.token);
        alert(`Login Successful, Token: ${response.data.token}`);
      })
      .catch((err) => {
        console.log(err.response.data.error);
        alert(err.response.data.error);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-6 col-md-12 column1">
            <form>
              <h2>Welcome Back</h2>
              <p id="p1">sub-title text goes here</p>
              <input
                type="email"
                placeholder="Email*"
                autoComplete="off"
                onChange={handleEmail}
                value={email}
                required
              />
              <br />
              <input
                type="password"
                placeholder="Password*"
                autoComplete="off"
                onChange={handlePassword}
                value={pwd}
                required
              />
              <br />

              <button className="login_btn" onClick={handleSubmit}>
                Login
              </button>
              <br />
              <div className="row" id="row">
                <div className="col-6 d-flex flex-row">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />

                  <p id="p2" style={{ marginLeft: "5px" }}>
                    Remember me
                  </p>
                </div>
                <div className="col-6">
                  <p id="p3">forgot password</p>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-6 pb-0">
            <img src={bg} className="img" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
