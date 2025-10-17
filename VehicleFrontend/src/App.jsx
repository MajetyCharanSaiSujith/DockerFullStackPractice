import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddVehicle from "./pages/AddVehicle";
import UpdateVehicle from "./pages/UpdateVehicle";
import ViewVehicles from "./pages/ViewVehicles";
import "./App.css";

const App = () => {
  return (
    // ✅ Update basename to match your deployed vehicle app context
    <Router basename="/vehiclereact">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddVehicle />} />
          <Route path="/update" element={<UpdateVehicle />} />
          <Route path="/view" element={<ViewVehicles />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
