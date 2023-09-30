import "./App.css";
import Simulation from "./components/Simulation";
import { Dashboard, Landing } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapboxMap from "./components/MapboxMap";
import { Calendar } from "@fullcalendar/core";

function App() {
  return (
    <Router>
      <div className="App h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="simulation" element={<Simulation />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="gis" element={<MapboxMap />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
