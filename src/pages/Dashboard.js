import React from "react";
import { Sidebar, Header } from "../components";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        {/* Your content goes here */}
        <p>dsssssss</p>
      </div>
    </div>
  );
};

export default Dashboard;
