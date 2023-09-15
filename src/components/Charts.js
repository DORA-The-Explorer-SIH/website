import React, { useState } from "react";
import Gaant from "./Gaant";
import Timeline from "./Timeline";
import Milestone from "./Milestone";

const Charts = () => {
  const options = [
    { id: 1, name: "Timeline", component: <Timeline /> },
    { id: 2, name: "Gaant Chart", component: <Gaant /> }, 
    { id: 3, name: "Another Chart", component: <Milestone /> }, 

  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="rounded-lg bg-white shadow-lg p-4 m-3 h-mx-3 mb-5 flex flex-col">
      <div className="flex items-start p-5">
        {options.map((option) => (
          <div
            key={option.id}
            className={`mr-5 ${
              selectedOption.id === option.id ? "border-b-2  border-PosFeedback" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option.name}
          </div>
        ))}
      </div>
      <div className="flex-grow">{selectedOption.component}</div>
    </div>
  );
};

export default Charts;
