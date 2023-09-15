import React from "react";
import { Gantt } from "gantt-task-react"; // Corrected import

import "gantt-task-react/dist/index.css";

const Gaant = () => {
  let tasks = [
    {
      start: new Date(2020, 1, 1),
      end: new Date(2020, 1, 2),
      name: "Ideation", 
      id: "Task 0", 
      type: "task",
      progress: 100,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
    {
      start: new Date(2020, 1, 3), 
      end: new Date(2020, 1, 4),  
      name: "Planning", 
      id: "Task 1", 
      type: "task",
      progress: 90, 
      isDisabled: false, 
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
    {
      start: new Date(2020, 1, 5), 
      end: new Date(2020, 2, 9),  
      name: "Foundation", 
      id: "Task 2", 
      type: "task",
      progress: 20, 
      isDisabled: false, 
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
  ];

  return (
    <div className="h-full flex justify-center items-center w-full">
      <div className="w-full">
        <Gantt tasks={tasks} /> 
      </div>
    </div>
  );
};

export default Gaant;
