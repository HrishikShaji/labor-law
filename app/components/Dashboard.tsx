import { Acts } from "./Acts";
import { Branches } from "./Branches";
import { Compliances } from "./Compliances";
import { DropDownsContainer } from "./DropDownsContainer";
import { InspectionReport } from "./InspectionReport";
import { MenuBar } from "./MenuBar";
import { PeriodicReturns } from "./PeriodicReturns";
import { Remittances } from "./Remittances";
import { TotalRegisters } from "./TotalRegisters";

export const Dashboard = () => {
  return (
    <div className="w-full  min-h-screen flex bg-gray-200 flex-col">
      <MenuBar />
      <div className="p-5 w-full bg-white flex gap-4 border-gray-400 border-b-[1px]">
        <div className="w-2 h-full rounded-md bg-blue-700"></div>
        <h1>Dashboard</h1>
      </div>
      <div className="flex w-full p-5 flex-col gap-5">
        <DropDownsContainer />
        <div className=" border-gray-400 border-b-[1px] "></div>
        <div className="flex gap-2  h-full ">
          <Acts />
          <Branches />
        </div>
        <Compliances />
        <div className="flex gap-5">
          <PeriodicReturns />
          <Remittances />
        </div>
        <div className="flex gap-5">
          <InspectionReport />
          <TotalRegisters />
        </div>
      </div>
    </div>
  );
};
