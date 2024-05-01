import Image from "next/image";
import styles from "./Team.module.css";

const team = [
  {
    id: 1,
    name: "Dr.Amitava Ghosh",
    title: "Co-Founder & CEO",
    img: "/assets/person1.png",
  },
  {
    id: 2,
    name: "Swati Saksena Jha",
    title: "Co-Founder & COO",
    img: "/assets/person2.png",
  },
  {
    id: 3,
    name: "Supriyo Banerjee",
    title: "Co-Founder & Chief Regulatory Officer",
    img: "/assets/person3.png",
  },
  {
    id: 4,
    name: "Vivekanandan S",
    title: "Chief Compliance Officer",
    img: "",
  },
  {
    id: 5,
    name: "Vineet Singh",
    title: "Co-Founder & CEO",
    img: "",
  },
];

const Team = () => {
  return (
    <div className="flex flex-col gap-[100px] items-center py-[100px] px-[30px]">
      <h1 className="text-[30px] font-bold">Meet Our Team</h1>
      <div className="flex flex-col gap-14">
        <div className="flex   items-end font-bold">
          <button className="px-14 py-5 border-b-[3px] border-orange-500 whitespace-nowrap">
            Management Team
          </button>
          <button className="px-14 py-5 border-b-[3px] border-gray-500">
            Founders
          </button>
          <div className="w-full bg-gray-500 h-[3px]"></div>
        </div>
        <div className="grid grid-cols-4 gap-2 border-b-2 border-gray-500 pb-14">
          {team.map((person, i) => (
            <div key={i} className="h-full  w-full relative ">
              <div className="absolute z-20 pt-3 px-3 pb-5 top-0 left-0 h-full w-full flex flex-col justify-between">
                <h1 className="text-xl font-bold">{person.name}</h1>
                <h1 className="text-white">{person.title}</h1>
              </div>
              <Image
                src={person.img}
                height={1000}
                width={1000}
                alt="image"
                className={styles.image}
              />
              <div className={styles.gradient}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
