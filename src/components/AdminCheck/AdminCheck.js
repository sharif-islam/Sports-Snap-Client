import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AdminCheck.css";

const AdminCheck = () => {
  let [message, setMessage] = useState("");
  let [valid, setValid] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  let history = useHistory();
  const handleEmail = (e) => {
    if (e.target.value === "shafi") {
      setEmail(e.target.value);
    }
  };

  const handlePass = (e) => {
    if (e.target.value === "shafi04") {
      setPass(e.target.value);
    }
  };

  const checkValidity = () => {
    if (email === "shafi" && pass === "shafi04") {
      setValid(true);
    } else {
      setMessage("no");
    }
  };

  return (
    <div className="adminCheck">
      <h1>Admin verification</h1>
      <input
        type="text"
        name="email"
        onBlur={handleEmail}
        placeholder="your Email address"
        required
      />
      <br />
      <input
        type="password"
        name="password"
        onBlur={handlePass}
        placeholder="your Password"
        required
      />
      <br />
      <button onClick={checkValidity}>Submit</button>
      {valid ? history.push("/admin") : ""}
      {message ? "     inValid username or password" : ""}
    </div>
  );
};

export default AdminCheck;
