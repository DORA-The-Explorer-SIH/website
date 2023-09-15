import React from "react";
import Overview from "./Overview";
import Charts from "./Charts";

const Dashboard = () => {
  return (
    <div className="flex h-full flex-col p-1">
        <Overview />
        <Charts />
    </div>
  );
};

export default Dashboard;
