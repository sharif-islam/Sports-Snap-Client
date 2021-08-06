import React, { useContext, useState } from "react";
import "./Login.css";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import {
  handleGoogleSignIn,
  handleGoogleSignOut,
  initializeLogInFramework,
} from "./LoginManager";

function Login() {
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });
  initializeLogInFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    });
  };

  const signOut = () => {
    handleGoogleSignOut().then((res) => {
      setUser(res);
      setLoggedInUser(res);
    });
  };

  return (
    <div className="login-page">
      <h1>Please Login With Your Google Account</h1>
      {user.isSignIn ? (
        <button onClick={signOut}>
          {" "}
          <span className="sign">Sign Out from Google</span>{" "}
        </button>
      ) : (
        <button onClick={googleSignIn}>
          {" "}
          <span className="sign">Sign In to Google</span>{" "}
        </button>
      )}
    </div>
  );
}

export default Login;
