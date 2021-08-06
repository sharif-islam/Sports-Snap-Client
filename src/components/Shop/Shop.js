import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import "./Shop.css";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import Grid from "@material-ui/core/Grid";

const Shop = () => {
  const [events, setEvents] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productValues = Object.values(savedCart);
    setCart(productValues);
  }, []);
  useEffect(() => {
    fetch("https://damp-brook-21867.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const handleAddProduct = (product) => {
    const sameProduct = cart.find((pd) => pd === product);
    let newCart;
    if (sameProduct) {
    } else {
      newCart = [...cart, product];
      setCart(newCart);
      addToDatabaseCart(product.id, product);
    }
  };

  return (
    <div className="twin-container">
      <div className="product-container">
        <Grid container>
          {events.map((pd) => (
            <Grid item xs={4}>
              <Product
                id={pd._id}
                showAddToCard={true}
                handleAddProduct={handleAddProduct}
                product={pd}
              ></Product>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="cart-container"></div>
      <Cart cart={cart}>
        <Link to="/review">
          <button className="main-button">Review Order</button>
        </Link>
      </Cart>
    </div>
  );
};

export default Shop;
