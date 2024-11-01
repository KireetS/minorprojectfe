import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { TbArcheryArrow } from "react-icons/tb";
import { GiStockpiles } from "react-icons/gi";
import { BiCoinStack } from "react-icons/bi";
const Sidebar = () => {
  return (
    <aside className="hidden   md:w-fit bg-secondary-color md:py-10 md:px-10 md:flex flex-col h-screen">
      <div className="text-white font-semibold flex flex-col  items-start justify-center space-y-6 text-lg">
        <div className="flex space-x-3 items-center">
          <MdSpaceDashboard />
          <span>Dashboard</span>
        </div>
        <div className="flex space-x-3 items-center">
          <BsCashCoin />
          <span>Expenses</span>
        </div>
        <div className="flex space-x-3 items-center">
          <TbArcheryArrow />
          <span>Goals</span>
        </div>
        <div className="flex space-x-3 items-center">
          <GiStockpiles />
          <span>Investments</span>
        </div>
        <div className="flex space-x-3 items-center">
          <BiCoinStack />
          <span>SIP calculator</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
