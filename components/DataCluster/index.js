import React from "react";
import PageSizeTracker from "/components/PageSizeTracker";
import ThemeToggler from "/components/ThemeToggler";
import Comparison from "/components/Comparison";
import Toggle from "/components/Toggle";

const DataCluster = () => {
  return (
    <div className="font-medium flex flex-col justify-between items-center text-xs border-[color:var(--primary)] border-r border-l border-solid">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="px-3 py-2 border-[color:var(--primary)] border-r border-solid">
          <PageSizeTracker />
        </div>
        <div className="px-3 py-2 uppercase">
          <ThemeToggler />
        </div>
      </div>
      <hr className="border-[0.5px] border-[color:var(--primary)] w-full"></hr>
      <div className="w-full flex flex-row justify-between items-center uppercase">
        <div className="px-3 py-2 border-r border-[color:var(--primary)] border-solid">
          <Comparison />
        </div>
        <div className="px-4 py-2">
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default DataCluster;
