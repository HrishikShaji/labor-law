import ContactForm from "../features/components/contact-form";
import Compliance from "../landing/components/compliance";
import Footer from "../landing/components/footer";
import Navbar from "../landing/components/navbar";
import Hero from "./components/hero";
import Team from "./components/team";

const Page = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Team />
			<ContactForm />
			<Compliance />
			<Footer />
		</div>
	);
};

export default Page;
