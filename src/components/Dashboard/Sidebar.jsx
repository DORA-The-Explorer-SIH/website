import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineRight, AiOutlineLeft, AiOutlineDown } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import Pratyaksh from "../../assets/pratyaksh_logo_white.png";
import Pratyaksh_icon from "../../assets/pratyaksh_icon_white.png";
import { SiSimpleanalytics } from "react-icons/si";
import { TbHeartRateMonitor, TbReport } from "react-icons/tb";
import { PiGraphDuotone } from "react-icons/pi";

// import axios from "axios";
// import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [reports, setReports] = useState(true);
  // const navigate = useNavigate();

  const toggleSidebar = () => {
    setCollapsed(!isCollapsed);
    setReports(true);
  };

  return (
    <div
      className={`p-6 sticky  h-screen bg-primary text-white transition-all flex flex-col justify-between ${
        isCollapsed ? "w-16" : "w-56"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          {isCollapsed ? (
            <img className="w-10" src={Pratyaksh_icon} alt="logo.png" />
          ) : (
            <Link to="/">
              <img className="w-32" src={Pratyaksh} alt="logo.png" />
            </Link>
          )}
          <button
            className="text-white hover:text-gray-400 transition duration-300"
            onClick={toggleSidebar}
          >
            {isCollapsed ? (
              <>
                <AiOutlineRight />
              </>
            ) : (
              <>
                <AiOutlineLeft />
              </>
            )}
          </button>
        </div>

        <Link to="" className="flex items-center gap-2 text-lg ">
          <RxDashboard />
          <span className={`text-sm ${isCollapsed ? "hidden" : ""} `}>
            Dashboard
          </span>
        </Link>
        <Link to="/dashboard/gis" className="flex items-center gap-2 text-lg">
          <TbHeartRateMonitor />
          <span className={`text-sm ${isCollapsed ? "hidden" : ""}`}>
            Monitoring
          </span>
        </Link>
        <Link to="" className="flex items-center gap-2 text-lg">
          <SiSimpleanalytics />
          <span className={`text-sm ${isCollapsed ? "hidden" : ""}`}>
            Analytics
          </span>
        </Link>
        <Link to="/dashboard/simulation" className="flex items-center gap-2 text-lg">
          <PiGraphDuotone />
          <span className={`text-sm ${isCollapsed ? "hidden" : ""}`}>
            Simulator
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/dashboard" className="flex items-center gap-2 text-lg">
            <TbReport />
            <span className={`text-sm ${isCollapsed ? "hidden" : ""}`}>
              Reports
            </span>
          </Link>
          <button
            className={`${isCollapsed ? "hidden" : ""}`}
            onClick={() => setReports(!reports)}
          >
            {reports ? <AiOutlineRight /> : <AiOutlineDown />}
          </button>
        </div>
        <div
          className={`${
            reports ? "hidden" : "flex"
          } text-sm gap-2 items-start pl-6 flex flex-col`}
        >
          <Link to=""> Daily</Link>
          <Link to=""> Weekly</Link>
          <Link to=""> Montly</Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p
          className={` text-start font-semibold ${isCollapsed ? "hidden" : ""}`}
        >
          Account
        </p>
        <p className="flex items-center gap-2 text-lg">
          <FaRegUserCircle />
          <span className={`text-sm ${isCollapsed ? "hidden" : ""}`}>
            Ishika Jain
          </span>
        </p>
        <button className="flex items-center gap-2 text-lg">
          <MdOutlineLogout />
          <span className={`text-sm ${isCollapsed ? "hidden" : ""}`}>
            Log Out
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
