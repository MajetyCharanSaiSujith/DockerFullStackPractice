import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">AutoExpress</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Vehicle</Link></li>
        <li><Link to="/update">Update Vehicle</Link></li>
        <li><Link to="/view">View All Vehicles</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
