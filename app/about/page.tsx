import { Navbar } from "../landing/components/Navbar";
import Audit from "./components/audit";
import ComplianceTracking from "./components/compliance-tracking";
import Hero from "./components/hero";
import RecordManagement from "./components/record-management";

const Page = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<ComplianceTracking />
			<RecordManagement />
			<Audit />
		</div>
	);
};

export default Page;
