// src/pages/AddVehicle.jsx
import React, { useState } from "react";
import axios from "axios";
import "../styles/AddVehicle.css";
import config from "../components/config";

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    type: "",
    manufacturer: "",
    description: ""
  });
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${config.url}vehicles/add`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      setMessage(res.data); // Backend returns a plain string
      setFormData({ name: "", price: "", type: "", manufacturer: "", description: "" });
    } catch (err) {
      setMessage(err.response?.data || "Error adding vehicle");
    }
  };

  return (
    <div className="page">
      <div className="heading-container">
        <h2>Add Vehicle</h2>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Vehicle Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Vehicle Type"
          value={formData.type}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="manufacturer"
          placeholder="Manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add Vehicle</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddVehicle;
