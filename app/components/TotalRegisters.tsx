export const TotalRegisters = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-5 bg-white rounded-md">
      <div className="flex flex-col gap-2 items-center bg-gray-200 rounded-md p-2">
        <h1>TOTAL REGISTERS APPLICABLE</h1>
        <div className="h-[1px] bg-gray-400 w-full"></div>
        <h1 className="p-2 rounded-md bg-blue-800 text-white">340</h1>
        <h1>No of Registers</h1>
      </div>
      <div className="flex gap-5 h-full">
        <div className=" w-full bg-gray-200 h-full rounded-md"></div>
        <div className=" w-full bg-gray-200 h-full rounded-md"></div>
      </div>
    </div>
  );
};
