import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

const Topbar = () => {
  return (
    <div className="w-full h-20 flex justify-between bg-background p-4 border-b border-black">
      <div className="bg-white rounded-full w-1/3 flex justify-between overflow-hidden">
        <input
          type="text"
          className="bg-transparent flex items-start outline-none pl-5  placeholder-gray-500"
          placeholder="Tap to Search"
        />
        <button className="bg-searchGray pl-5 pr-5">
          <SearchIcon className="text-iconsLight"/>
        </button>
      </div>

      <div className="mr-1 ">
        <NotificationsNoneOutlinedIcon className="text-iconsDark mr-3 p-1" fontSize="large"/>
        <SettingsOutlinedIcon className="text-iconsDark mr-3 p-1" fontSize="large"/>
        <AccountBoxOutlinedIcon className="text-iconsDark mr-3 p-1" fontSize="large"/>
      </div>
    </div>
  );
};

export default Topbar;
