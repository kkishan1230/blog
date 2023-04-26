import React, { useState } from "react";
import stl from "./Login.module.scss";
import axios from "axios";

const Login = () => {
  const [matched, setMatched] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000", userDetails);
      console.log(result.status);
    } catch (e) {
      console.log(e);
    }
  };

  const matchStrings = (e) => {
    if (e.target.value === userDetails.password) {
      setMatched(!matched);
    }
  };

  return (
    <div className={stl.loginPage}>
      <form action="/" method="post" onSubmit={handleSubmit}>
        <label htmlFor="Sign up">Sign Up</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          required
          minLength={4}
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter Your User Name"
          required
          minLength={4}
          value={userDetails.userName}
          onChange={(e) =>
            setUserDetails({ ...userDetails, userName: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Create password"
          minLength={8}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="should contain alphanumeric, Capital and lower case."
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
          required
        />
        <input
          type="password"
          placeholder="confirm password"
          minLength={8}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="should contain alphanumeric, Capital and lower case."
          onChange={(e) => {
            matchStrings(e);
          }}
          required
        />
        <button
          disabled={!matched}
          className={matched ? stl.matched : stl.notMatched}
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
