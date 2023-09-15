import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";


const Timeline = () => {

  const [value, setValue] = useState(0);

  const VALUES = [
    "2021-01-01",
    "2021-02-27",
    "2021-03-09",
    "2021-06-22",
    "2021-09-01",
    "2022-02-01",
    "2022-05-01",
  ];

  const description = [
    "Project Initiation",
    "Design and Planning Approval",
    "Environmental Clearances",
    "Civil Work Commencement",
    "Completion of Structural Work",
    "Utilities and Infrastructure Installation",
    "Testing and Quality Assurance",
  ];

  return (
    <div className="h-full flex justify-center items-center">
    <div className="w-3/4 h-full flex flex-col justify-center items-center">
      <div className="w-full h-32"> {/* Increased the height */}
        <HorizontalTimeline
          styles={{ outline: "#FF1744", foreground: "#4CAF50" }}
          index={value}
          indexClick={(index) => {
            setValue(index);
          }}
          values={VALUES}
        />
      </div>
      <div className="text-center text-3xl font-semibold p-4">{description[value]}</div>
    </div>
  </div>
  )
}

export default Timeline