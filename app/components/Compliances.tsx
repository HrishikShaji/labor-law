const compliances = [
  {
    title: "Licenses & Registrations",
  },
  {
    title: "Abstracts & Notices",
  },
  {
    title: "Remittances",
  },
  {
    title: "Registers & Records",
  },
  {
    title: "Returns",
  },
];

export const Compliances = () => {
  return (
    <div className="flex flex-col gap-2 bg-white p-5 rounded-md w-full">
      <div className="flex justify-between w-full">
        <h1>Overall Compliances</h1>
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
      </div>
      <div className="grid grid-cols-5 gap-2 h-full w-full ">
        {compliances.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 p-5 rounded-md items-center bg-gray-200"
          >
            <div className="h-20 w-20 rounded-full bg-white"></div>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
