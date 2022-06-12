import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> LogIn
        </h1>
        <p>Please Login To Get Support</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="from-control"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="from-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter your Passowrd"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
