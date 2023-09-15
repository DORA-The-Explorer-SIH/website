import { Schedule } from "@mui/icons-material";
import "./App.css";
import Navbar from "./components/Navbar";
import Simulation from "./components/Simulation";
import HomePage from "./pages/HomePage";
import Scheduler from "./pages/Scheduler";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapboxMap from "./components/MapboxMap";

function App() {
  return (
    <Router>
      <div className="App flex">
        <Navbar />
        <div className="content-container flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/calendar" element={<Scheduler />} />
            <Route path="/gis" element={<MapboxMap />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
