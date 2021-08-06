import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./components/Review/Review";
import AdminCheck from "./components/AdminCheck/AdminCheck";
import Admin from "./components/Admin/Admin";
import Shipment from "./components/Shipment/Shipment";
import Login from "./components/Login/Login";
import UserDetails from "./components/UserDetails/UserDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/adminCheck">
            <AdminCheck></AdminCheck>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/userDetails">
            <UserDetails></UserDetails>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
