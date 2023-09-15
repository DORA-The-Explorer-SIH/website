import React  from "react";
import { Chrono } from "react-chrono";
import data from "./data"

const Timeline = () => {


  return (
    <div className="h-full flex justify-center items-center">
      <Chrono items={data} mode="HORIZONTAL" />
    </div>
  );
};

export default Timeline;

