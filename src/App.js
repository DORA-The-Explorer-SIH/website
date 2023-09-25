import "./App.css";
import Navbar from "./components/Navbar";
import Simulation from "./components/Simulation";
import HomePage from "./pages/HomePage";
import Scheduler from "./pages/Scheduler";
import { Dashboard, Landing } from "./pages";
import { TopNavBar } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapboxMap from "./components/MapboxMap";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}

        {/* <div className="content-container flex-grow"> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/calendar" element={<Scheduler />} />
          <Route path="/gis" element={<MapboxMap />} />
        </Routes>
        {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
