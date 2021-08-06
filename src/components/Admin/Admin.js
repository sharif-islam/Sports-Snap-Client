import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Admin.css";

const Admin = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    console.log("data..", imageURL);
    const eventData = {
      id: data.id,
      name: data.name,
      price: data.price,
      imageURL: imageURL,
    };
    if (imageURL !== null) {
      const url = `https://damp-brook-21867.herokuapp.com/addEvent`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(eventData),
      }).then((res) => {
        setImageURL(null);
        alert("your product added successfully...");
      });
    }
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "0bac120ba893fdd72a2d027808bd14d7");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.data.url);
        setImageURL(response.data.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="admin">
      <h1>Add Product in Database</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="admin-input"
          name="id"
          type="text"
          placeholder="Product Code"
          {...register("id")}
        />
        <br />
        <input
          className="admin-input"
          name="name"
          type="text"
          placeholder="Product Name"
          {...register("name")}
        />
        <br />
        <input
          className="admin-input"
          name="price"
          type="text"
          placeholder="Price"
          {...register("price")}
        />
        <br />
        <input
          className="admin-input"
          name="img"
          type="file"
          {...register("img")}
          onChange={handleImageUpload}
        />
        <br />
        <input className="admin-submit" type="submit" />
      </form>
    </div>
  );
};

export default Admin;
