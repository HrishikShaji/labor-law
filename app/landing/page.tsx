import { AwardsAndRecognitions } from "./components/AwardsAndRecognitions";
import { Compliance } from "./components/Compliance";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Updates } from "./components/Updates";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <AwardsAndRecognitions />
      <Features />
      <Updates />
      <Compliance />
      <Footer />
    </div>
  );
};

export default Page;
