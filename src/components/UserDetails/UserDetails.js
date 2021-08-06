import React from "react";
import { UserContext } from "../../App";
import { useContext } from "react";
import "./UserDetails.css";
const UserDetails = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="userDetails">
      <h1>Welcome , {loggedInUser.name}</h1>
      <h3>Your Email : {loggedInUser.email}</h3>
      <img src={loggedInUser.photo} alt="" />
    </div>
  );
};

export default UserDetails;
