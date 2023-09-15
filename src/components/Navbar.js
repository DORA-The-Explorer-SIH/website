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
        <DashboardIcon className="text-background m-5" />
      </Link>
      <Link to="/simulation">
        <PrecisionManufacturingIcon className="text-background m-5" />
      </Link>
      <Link to="/calendar">
        <CalendarMonthIcon className="text-background m-5" />
      </Link>
      <Link to="/gis">
        <LocationOnIcon className="text-background m-5" />
      </Link>
    </div>
  );
};

export default Navbar;
