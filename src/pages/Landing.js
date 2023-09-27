import React from "react";
import { TopNavBar } from "../components";
import BG from "../assets/bg.jpg";
import Description from "../components/Landing/Description";

const Landing = () => {
  return (
    <>
      {" "}
      <section
        className="h-3/4 md:h-screen"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center", // Center the background image
        }}
      >
        {" "}
        <TopNavBar />
        <div className=" flex items-center justify-center mt-64 ">
          <p className="bg-white opacity-90 p-4 text-lg font-bold text-black">
            {" "}
            Real-Time Progress Monitoring, AI Scheduling, and Smart
            Decision-Making
          </p>
        </div>
      </section>
      <section className=" py-6">
        <Description />
      </section>
      {/* <section className="h-1/2 bg-searchGray">
        <p>Contact Us</p>
      </section> */}
    </>
  );
};

export default Landing;
