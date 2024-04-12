export const InspectionReport = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-5 bg-white rounded-md">
      <div className="flex flex-col gap-2 items-center bg-gray-200 rounded-md p-2">
        <h1>INSPECIONS REPORT & NOTICES</h1>
        <div className="h-[1px] bg-gray-400 w-full"></div>
        <h1 className="p-2 rounded-md bg-blue-800 text-white">340</h1>
        <h1>No of Cases</h1>
      </div>
      <div className="flex gap-5 p-5 justify-end">
        <div className="h-20 w-20 rounded-full bg-teal-500"></div>
      </div>
    </div>
  );
};
