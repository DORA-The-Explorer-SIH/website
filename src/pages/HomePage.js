import React from "react";
import { Route, Routes } from "react-router-dom";
import Topbar from "../components/Topbar";
import Dashboard from "../components/Dashboard";
import Simulation from "../components/Simulation";
import Scheduler from "./Scheduler";
import MapboxMap from "../components/MapboxMap";

const HomePage = () => {
  return (
    <div className="bg-background min-h-screen h-full w-full flex flex-col">
      <Topbar />
      <div className="page-content flex-grow">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/calendar" element={<Scheduler />} />
          <Route path="/gis" element={<MapboxMap />} />

        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
