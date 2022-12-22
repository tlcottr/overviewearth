import React from "react";
import DataCluster from "../DataCluster";
import Logo from "../Logo";

const Header = () => {
  return (
    <div className="font-sans flex flex-row justify-between items-center">
      <Logo />
      <div className="">
        <DataCluster />
      </div>
    </div>
  );
};

export default Header;
