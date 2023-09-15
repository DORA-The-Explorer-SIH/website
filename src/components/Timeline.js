import React from "react";
import { Chrono } from "react-chrono";
import data from "./data";
import "../App.css";
const Timeline = () => {
  return (
    <div className="h-full flex justify-center items-center p-1">
      <Chrono
        items={data}
        mode="HORIZONTAL"
        theme={{
          primary: "#007BFF",
          secondary: "##FF5722",
          cardBgColor: "#EAF2FC",
          titleColor: "black",
          titleColorActive: "red",
        }}
        cardHeight={150}
        
        slideShow
      />
    </div>
  );
};

export default Timeline;
