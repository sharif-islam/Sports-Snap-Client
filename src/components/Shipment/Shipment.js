import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";
import "./Shipment.css";

const Shipment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = (data) => {
    const savedCart = getDatabaseCart();
    const productValues = Object.values(savedCart);
    const orderDetails = {
      ...loggedInUser,
      products: productValues,
      shipment: data,
      orderTime: new Date(),
    };

    fetch("https://damp-brook-21867.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          processOrder();
          alert("your order placed successfully...");
        }
      });
  };

  // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Give Your Information</h1>
      <input
        defaultValue={loggedInUser.name}
        {...register("name", { required: true })}
        placeholder="Your Name"
      />
      {errors.name && <span className="error">Name is required</span>}

      <input
        defaultValue={loggedInUser.email}
        {...register("email", { required: true })}
        placeholder="Your Email"
      />
      {errors.email && <span className="error">Email is required</span>}

      <input
        {...register("address", { required: true })}
        placeholder="Your Address"
      />
      {errors.address && <span className="error">Address is required</span>}

      <input
        {...register("phone", { required: true })}
        placeholder="Your Phone"
      />
      {errors.phone && <span className="error">Phone Number is required</span>}

      <input className="shipment-submit" type="submit" />
    </form>
  );
};

export default Shipment;
