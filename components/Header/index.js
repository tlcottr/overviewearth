import React from "react";
import DataCluster from "../DataCluster";
import Logo from "../Logo";

const Header = () => {
  return (
    <div className="font-sans flex flex-row justify-between items-center">
      <div className="hidden md:block">
        <Logo />
      </div>
      <div className="w-full md:w-[500px]">
        <DataCluster />
      </div>
    </div>
  );
};

export default Header;
