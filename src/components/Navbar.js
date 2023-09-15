import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

const Navbar = () => {
  return (
    <div className="min-h-screen w-28 left-0 bg-primary flex justify-start items-center flex-col p-10">
       <Link to="/">
        <div className="text-3xl text-bold text-background pb-5 mb-20">DORA</div>
      </Link>
      <Link to="/">
        <DashboardIcon className="text-background " />
        <div className=" text-background mb-16 ">Dashboard</div>

      </Link>
      <Link to="/simulation">
        <PrecisionManufacturingIcon className="text-background " />
        <div className=" text-background mb-16 ">Simulation</div>

      </Link>
      <Link to="/calendar">
        <CalendarMonthIcon className="text-background" />
        <div className=" text-background mb-16 ">Scheduler</div>

      </Link>
      <Link to="/gis">
        <LocationOnIcon className="text-background " />
        <div className=" text-background mb-16 ">GIS</div>

      </Link>
    </div>
  );
};

export default Navbar;
