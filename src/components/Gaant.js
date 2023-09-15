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
      progress: 60, 
      isDisabled: false, 
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
    {
      start: new Date(2020, 1, 5), 
      end: new Date(2020, 1, 9),  
      name: "Task 2", 
      id: "Task 2", 
      type: "task",
      progress: 45, 
      isDisabled: false, 
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
  ];

  return (
    <div className="h-full flex justify-center items-center max-w-fit border-2 m-6">
      <div className="w-full ">
        <Gantt tasks={tasks} /> 
      </div>
    </div>
  );
};

export default Gaant;
