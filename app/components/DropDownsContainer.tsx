const dropdowns = [
  {
    title: "Legal Entity Name",
    text: "Legum.ai",
  },
  {
    title: "Branch",
    text: "Branch Name",
  },
  {
    title: "Location",
    text: "Select Location",
  },
  {
    title: "State",
    text: "Select State",
  },
  {
    title: "Month & Year",
    text: "Select Month & Year",
  },
];

export const DropDownsContainer = () => {
  return (
    <div className=" grid grid-cols-5 w-full gap-2 ">
      {dropdowns.map((item, i) => (
        <div key={i} className="flex flex-col gap-2 ">
          <h1>{item.title}</h1>
          <div className="p-2 rounded-md bg-white">
            <h1>{item.text}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
