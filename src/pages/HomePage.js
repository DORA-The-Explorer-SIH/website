import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "../components/Topbar";
import Dashboard from "../components/Dashboard";
import Simulation from "../components/Simulation";

const HomePage = () => {
  return (
    <Router>
      <div className="bg-background h-screen w-full flex flex-col">
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/simulation" element={<Simulation />} />
        </Routes>
      </div>
    </Router>
  );
};

export default HomePage;
