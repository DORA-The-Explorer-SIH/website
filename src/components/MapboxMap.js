import React, { useState } from "react";
import GisKey1 from "../assets/Gis1.png";
import GisKey2 from "../assets/Gis2.png";
import GisKey4 from "../assets/Gis4.png";

function MapboxMap() {
  const [selectedContent, setSelectedContent] = useState(1);

  const handleButtonClick = (contentNumber) => {
    setSelectedContent(contentNumber);
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <ul className="flex w-full justify-evenly p-4 bg-background">
        <li className="text-md text-bold shadow-md p-2 bg-white">
          <button onClick={() => handleButtonClick(1)}>
            Progress Completion (in %)
          </button>
        </li>
        <li className="text-md text-bold shadow-md p-2 bg-white">
          <button onClick={() => handleButtonClick(2)}>
            Cement Available (in Kgs)
          </button>
        </li>
        <li className="text-md text-bold shadow-md p-2 bg-white">
          <button onClick={() => handleButtonClick(3)}>
            Funds allocated (in Cr.)
          </button>
        </li>
        <li className="text-md text-bold shadow-md p-2 bg-white">
          <button onClick={() => handleButtonClick(4)}>
            Delay (in months)
          </button>
        </li>
      </ul>
      {selectedContent === 1 && (
        <div className="flex h-full ">
          <iframe
            src="/gis/qgis2web_2023_09_16-02_36_09_432995/index.html"
            width="900px"
            height="100%"
            title="Embedded Map"
          />
          <div className="flex flex-col items-center">
            <p className="text-sm pb-2 text-center">
              Map Key (Progress Completion (in %))
            </p>
            <img src={GisKey1} alt="Gis map key" className="w-fit h-fit" />
          </div>
        </div>
      )}

      {selectedContent === 2 && (
        <div className="flex h-full">
          <iframe
            src="/gis/qgis2web_2023_09_16-03_12_24_375613/index.html"
            width="900px"
            height="100%"
            title="Embedded Map"
          />
          <div className="flex flex-col items-center">
            <p className="text-sm pb-2 text-center">
              Map Key ( Cement Available (in Kgs) )
            </p>
            <img src={GisKey2} alt="Gis map key" className="w-fit h-fit" />
          </div>
        </div>
      )}
      {selectedContent === 3 && (
        <div className="flex h-full">
          <iframe
            src="/gis/qgis2web_2023_09_16-03_14_48_177820/index.html"
            width="900px"
            height="100%"
            title="Embedded Map"
          />
          <div className="flex flex-col items-center">
            <p className="text-sm pb-2 text-center">
              Heat Map ( Funds allocated (in Cr.) )
            </p>
          </div>
        </div>
      )}
      {selectedContent === 4 && (
        <div className="flex h-full ">
          <iframe
            src="/gis/qgis2web_2023_09_16-03_16_08_674467/index.html"
            width="900px"
            height="100%"
            title="Embedded Map"
          />
          <div className="flex flex-col items-center">
            <p className="text-sm pb-2 text-center">
              Map Key (Delay (in months))
            </p>
            <img src={GisKey4} alt="Gis map key" className="w-fit h-fit" />
          </div>
        </div>
      )}
    </div>
  );
}

export default MapboxMap;
