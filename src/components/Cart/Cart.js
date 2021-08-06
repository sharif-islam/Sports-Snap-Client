import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, pd) => total + parseInt(pd.price), 0);

  return (
    <div className="cart-details">
      <h2 className="text-primary">Order Summary</h2>
      <h4>Items Ordered : {cart.length}</h4>
      <h4>Total Price : {total}</h4>
      <br />
      {props.children}
    </div>
  );
};

export default Cart;
