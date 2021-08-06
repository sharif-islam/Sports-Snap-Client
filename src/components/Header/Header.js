import { Link } from "react-router-dom";
import "./Header.css";
import { UserContext } from "../../App";
import React, { useContext } from "react";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="header">
      <div>
        <h2 className="headerName">Sports Snap</h2>
      </div>
      <div>
        <nav>
          <Link to="/shop">Shop</Link>
          <Link to="/review">Review</Link>
          <Link to="/adminCheck">Admin</Link>
          {loggedInUser.success ? (
            <Link to="/userDetails">{loggedInUser.name}</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
