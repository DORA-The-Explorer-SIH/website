import React from "react";
import { Sidebar, Header } from "../components";
import { Route, Routes } from "react-router-dom";
import Simulation from "../components/Simulation";
import { Calendar } from "@fullcalendar/core";
import MapboxMap from "../components/MapboxMap";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <Routes>
          <Route path="simulation" element={<Simulation />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="gis" element={<MapboxMap />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
