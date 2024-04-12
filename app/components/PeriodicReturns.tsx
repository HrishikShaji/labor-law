export const PeriodicReturns = () => {
  return (
    <div className="p-5 rounded-md flex flex-col gap-2 h-[678px] w-full bg-white">
      <h1>Periodic Returns Compliance Status</h1>
      <div className="flex gap-5">
        <div className="flex gap-2 items-center">
          <div className="h-4 w-4 rounded-md bg-green-500"></div>
          <h1>Completed</h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-4 w-4 rounded-md bg-red-500"></div>
          <h1>Not Completed</h1>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-md h-full"></div>
    </div>
  );
};
