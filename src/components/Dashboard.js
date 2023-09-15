import React from "react";
import Overview from "./Overview";
import Charts from "./Charts";

const Dashboard = () => {
  return (
    <div className="flex h-full flex-col p-4 w-full">
      <div className="w-full">
        <Overview />
      </div>
      <div className="w-full">
        <Charts />
      </div>
    </div>
  );
};

export default Dashboard;
