import React from "react";

const Overview = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg  m-3 h-32 flex justify-around items-center">
      <div className="font-semibold flex flex-col justify-center pr-20 text-3xl border-r-2 border-black">
        Sukoon
      </div>
      <div className=" px-5 flex flex-col font-medium justify-center">
        <span className="text-3xl text-PosFeedback">48%</span>
        <span>Completed</span>
      </div>
      <div className=" px-5 flex flex-col font-medium justify-center">
        <span className="text-3xl text-PosFeedback">0</span>
        <span>Behind Schedule</span>
      </div>
      <div className=" px-5 flex flex-col font-medium justify-center">
        <span className="text-3xl text-black">64</span>
        <span>Days Left</span>
      </div>
      <div className=" px-5 flex flex-col font-medium justify-center">
        <span className="text-3xl text-NegFeedback">$89</span>
        <span>Remaining</span>
      </div>
    </div>
  );
};

export default Overview;
