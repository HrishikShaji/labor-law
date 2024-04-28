import { AwardsAndRecognitions } from "./components/AwardsAndRecognitions";
import { Compliance } from "./components/Compliance";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Updates } from "./components/Updates";

const Page = () => {
  return (
    <div className="w-full  h-full flex flex-col">
      <Navbar />
      <Hero />
      <Intro />
      <AwardsAndRecognitions />
      <Features />
      <Updates />
      <Compliance />
    </div>
  );
};

export default Page;
