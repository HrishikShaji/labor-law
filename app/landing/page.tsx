import { AwardsAndRecognitions } from "./components/AwardsAndRecognitions";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";

const Page = () => {
  return (
    <div className="w-full  h-full flex flex-col">
      <Navbar />
      <Hero />
      <Intro />
      <AwardsAndRecognitions />
      <Features />
    </div>
  );
};

export default Page;
