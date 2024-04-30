import AwardsAndRecognitions from "./components/awards-recognitions";
import Compliance from "./components/compliance";
import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Updates from "./components/updates";

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
