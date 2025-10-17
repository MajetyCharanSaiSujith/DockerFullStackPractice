import React, { useState } from "react";
import axios from "axios";
import "../styles/UpdateVehicle.css";
import config from "../components/config";

const UpdateVehicle = () => {
  const [id, setId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    type: "",
    manufacturer: "",
    description: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${config?.url}vehicles/update/${id}`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      setMessage(res.data || "Vehicle updated successfully");
      setFormData({ name: "", price: "", type: "", manufacturer: "", description: "" });
      setId("");
    } catch (err) {
      setMessage(err.response?.data || "Error updating vehicle");
    }
  };

  return (
    <div className="page">
      <div className="heading-container">
        <h2>Update Vehicle</h2>
      </div>

      <form onSubmit={handleUpdate} className="form">
        <input
          type="text"
          placeholder="Vehicle ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="New Vehicle Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="New Price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="type"
          placeholder="New Vehicle Type"
          value={formData.type}
          onChange={handleChange}
        />
        <input
          type="text"
          name="manufacturer"
          placeholder="New Manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="New Description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Update</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default UpdateVehicle;
