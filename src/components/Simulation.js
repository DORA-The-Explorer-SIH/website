import React, { useState, useEffect } from "react";
import "./Simulation.css";
import BarChart from "./BarChart"; // Import the BarChart component
import PieChart from "./PieChart"; // Import the PieChart component
import Topbar from "./Topbar";
import HeatMap from "./HeatMap";

const getRandomOptionIndex = (options) =>
  Math.floor(Math.random() * options.length);
const getRandomValue = () => Math.floor(Math.random() * 100); // Function to generate a random value

const Simulation = () => {
  const availabilityOptions = ["Select", "Option 1", "Option 2", "Option 3"];
  const weatherOptions = ["Select", "Sunny", "Rainy", "Cloudy"];
  const locationOptions = ["Select", "Location 1", "Location 2", "Location 3"];

  const [inputs, setInputs] = useState({
    availability_of_resources: getRandomOptionIndex(availabilityOptions),
    weather_condition: getRandomOptionIndex(weatherOptions),
    location: getRandomOptionIndex(locationOptions),
    number_of_workers: getRandomValue(),
    budget_allocated: getRandomValue(),
    estimated_completion_time: getRandomValue(),
    delay_in_inspections: getRandomValue(),
    delay_in_material_approval: getRandomValue(),
    shortage_of_laborers: getRandomValue(),
    inadequate_equipment: getRandomValue(),
  });

  const colors = [
    "#FF5733",
    "#FFCC00",
    "#33FF57",
    "#3399FF",
    "#FF33FF",
    "#FFFF33",
    "#33FFFF",
    "#9966CC",
    "#FF9900",
    "#66CC99",
  ];

  const features = [
    "availability_of_resources",
    "weather_condition",
    "location",
    "number_of_workers",
    "budget_allocated",
    "estimated_completion_time",
    "delay_in_inspections",
    "delay_in_material_approval",
    "shortage_of_laborers",
    "inadequate_equipment",
  ];

  const renderColorCircles = () => {
    return (
      <div style={{ display: "flex flex-col ", alignItems: "center" }}>
        {colors.map((color, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: color,
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                marginRight: "5px",
              }}
            ></div>
            <span>{features[index]}</span>
          </div>
        ))}
      </div>
    );
  };

  const [output, setOutput] = useState(null);

  useEffect(() => {
    calculateOutput();
  }, [inputs]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: parseInt(value) });
  };

  const calculateOutput = () => {
    const sum = Object.values(inputs).reduce((acc, val) => acc + val, 0);
    setOutput(sum);
  };

  return (
    <div className="">
      <Topbar />
      <div className="flex justify-between bg-background items-center space-x-8 p-4">
        <div className="w-2/5 max-h-full p-2 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
            <div className="grid grid-cols-2 gap-6">
              {Object.keys(inputs).map((inputKey) => (
                <div key={inputKey} className="flex flex-col">
                  <label
                    htmlFor={inputKey}
                    className="block font-medium text-primary mb-1"
                  >
                    {inputKey.replace(/_/g, " ")}:
                  </label>
                  {inputKey === "number_of_workers" ||
                  inputKey === "budget_allocated" ||
                  inputKey === "estimated_completion_time" ||
                  inputKey === "delay_in_inspections" ||
                  inputKey === "delay_in_material_approval" ||
                  inputKey === "shortage_of_laborers" ||
                  inputKey === "inadequate_equipment" ? (
                    <input
                      type="number"
                      id={inputKey}
                      name={inputKey}
                      value={inputs[inputKey]}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg p-2"
                    />
                  ) : (
                    <select
                      id={inputKey}
                      name={inputKey}
                      value={inputs[inputKey]}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg p-2"
                    >
                      {inputKey === "availability_of_resources"
                        ? availabilityOptions.map((option, index) => (
                            <option key={option} value={index}>
                              {option}
                            </option>
                          ))
                        : inputKey === "weather_condition"
                        ? weatherOptions.map((option, index) => (
                            <option key={option} value={index}>
                              {option}
                            </option>
                          ))
                        : locationOptions.map((option, index) => (
                            <option key={option} value={index}>
                              {option}
                            </option>
                          ))}
                    </select>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className="bg-white mt-10 p-4 rounded-lg shadow-lg">
              Delay Caused :{" "}
              <span className="text-xl text-bold">{output} days</span>
            </div>
          </div>
        </div>

        <div className="w-fit ">
          <div className="flex flex-col justify-between">
            <div className="flex  mb-2">
              <div className="w-1/2 mr-2">
                <BarChart data={Object.values(inputs)} />
              </div>
              <div className="w-1/2">
                <HeatMap data={Object.values(inputs)} />
              </div>
            </div>

            <div className="w-full h-fit">
              <div className="bg-white p-3 rounded shadow">
                <div className="flex">
                  <div className="w-2/3">
                    <PieChart data={Object.values(inputs)} colors={colors} />
                  </div>
                  <div className="w-1/3 flex flex-col mt-5">
                    {renderColorCircles()}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
