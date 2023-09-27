import React, { useState } from "react";
import Pratyaksh from "../../assets/PratyakshLogo.png";
import JharLogo from "../../assets/jharLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const TopNavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const menuItems = [
    { label: "About", path: "/" },
    { label: "Services", path: "/" },
    { label: "Blog", path: "/" },
    { label: "Contact", path: "/" },
    { label: "FAQ", path: "/" },
  ];

  return (
    <nav className="bg-white flex flex-col gap-2 md:flex-row justify-between w-full py-4 px-4 py-2 md:px-4">
      <div className="hidden md:flex items-start justify-center">
        <img className="w-72" src={JharLogo} alt="" />
      </div>
      <div className="flex  flex-col items-start md:items-center justify-start md:justify-center">
        <div className="flex items-center justify-between w-full md:w-80">
          <img className="w-32 md:w-80" src={Pratyaksh} alt="" />
          <div className="md:hidden">
            <button className="text-xl" onClick={toggleMenu}>
              {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
        <div
          className={`${
            open ? "block" : "hidden"
          } md:flex p-2 flex flex-col md:flex-row gap-4 md:gap-12 justify-center items-start font-semibold bg-background w-full md:bg-transparent`}
        >
          {menuItems.map((item, index) => (
            <Link key={index} className="hover:text-primary" to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-start md:items-center justify-center gap-4 md:ml-32 h-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="px-4 font-bold rounded-sm border border-primary text-primary py-1"
        >
          Get Started
        </button>
        <button className="px-8 bg-primary text-white font-bold py-1 rounded-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default TopNavBar;
