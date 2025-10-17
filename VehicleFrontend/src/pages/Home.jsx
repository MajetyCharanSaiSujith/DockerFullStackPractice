import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      {/* ✅ Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>Welcome to AutoExpress 🚗</h2>
          <p>Your simple and smart vehicle management system.</p>

          <div className="cta-buttons">
            <button className="btn-primary">View Vehicles</button>
            <button className="btn-secondary">Add Vehicle</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/743/743131.png"
            alt="Vehicle Illustration"
          />
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>🚘 Manage Fleet</h3>
          <p>Keep track of all your vehicles easily and efficiently.</p>
        </div>
        <div className="feature-card">
          <h3>🧾 Easy Listings</h3>
          <p>Add, update, or remove vehicle details in just a few clicks.</p>
        </div>
        <div className="feature-card">
          <h3>📈 Insights</h3>
          <p>View reports and stats to manage your vehicle inventory smarter.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
