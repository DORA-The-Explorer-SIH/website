import React from "react";
import Pratyaksh from "../../assets/PratyakshLogo.png";
import JharLogo from "../../assets/jharLogo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TopNavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white flex  justify-between  w-full py-4 px-4">
      <div className="flex items-start justify-center">
        <img className="w-72" src={JharLogo} alt="" />
      </div>
      <div className="flex flex-col items-center  justify-center">
        {" "}
        <img className="w-80" src={Pratyaksh} alt="" />
        <div className="flex gap-12 justify-center  font-semibold">
          <Link className="hover:text-primary" to="/">
            About
          </Link>
          <Link className="hover:text-primary" to="/">
            Services
          </Link>
          <Link className="hover:text-primary" to="/">
            Blog
          </Link>
          <Link className="hover:text-primary" to="/">
            Contact
          </Link>
          <Link className="hover:text-primary" to="/">
            FAQ
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 ml-32 h-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="px-4 font-bold rounded-sm border border-primary text-primary py-1"
        >
          Get Started
        </button>
        <button className="px-4 bg-primary text-white font-bold py-1 rounded-sm ">
          Login
        </button>
      </div>
    </nav>
  );
};

export default TopNavBar;
