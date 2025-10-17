import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ViewVehicles.css";
import config from "../components/config";

const ViewVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = () => {
    axios.get(`${config.url}vehicles/all`)
      .then(res => setVehicles(res.data))
      .catch(() => setVehicles([]));
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this vehicle?")) {
      try {
        const res = await axios.delete(`${config.url}vehicles/delete/${id}`);
        setMessage(res.data.message || "Vehicle deleted successfully");
        fetchVehicles(); // refresh vehicle list
      } catch (err) {
        setMessage("Error deleting vehicle");
      }
    }
  };

  return (
    <div className="vehicles">
      <h2>All Vehicles</h2>
      {message && <p className="message">{message}</p>}
      {vehicles.length === 0 ? (
        <p>No vehicles available.</p>
      ) : (
        <table className="vehicle-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Vehicle Name</th>
              <th>Description</th>
              <th>Price (₹)</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map(v => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.description}</td>
                <td>{v.price}</td>
                <td>
                  <button className="btn-delete" onClick={() => handleDelete(v.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewVehicles;
