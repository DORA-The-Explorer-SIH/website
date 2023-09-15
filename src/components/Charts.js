import React from "react";
import Gaant from "./Gaant";

const Charts = () => {
  return (
    <div className="rounded-lg bg-white shadow-lg p-4 h-full mx-3 mb-5 flex flex-col">
    <div className="flex items-start p-5">
      <div className="mr-5 border-b-2 border-green-500">Milestone Chart</div>
      <div className="">Gantt Chart</div>
    </div>
    <div className=" flex-grow">
      <Gaant/>
    </div>
  </div>
  );
};

export default Charts;
