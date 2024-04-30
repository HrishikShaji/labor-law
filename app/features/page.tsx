import Compliance from "../landing/components/compliance";
import Navbar from "../landing/components/navbar";
import Audit from "./components/audit";
import ComplianceTracking from "./components/compliance-tracking";
import ContactForm from "./components/contact-form";
import Dashboard from "./components/dashboard";
import GovernmentNotifications from "./components/government-notifications";
import Hero from "./components/hero";
import { MonthlyCompliance } from "./components/monthly-compliance";
import MonthlyReporting from "./components/monthly-reporting";
import RecordManagement from "./components/record-management";
import RegulatoryUpdates from "./components/regulatory-updates";
import RiskAssessment from "./components/risk-assessment";
import UserPermission from "./components/user-permission";

const Page = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<ComplianceTracking />
			<RecordManagement />
			<Audit />
			<GovernmentNotifications />
			<MonthlyCompliance />
			<RegulatoryUpdates />
			<RiskAssessment />
			<MonthlyReporting />
			<UserPermission />
			<Dashboard />
			<Compliance />
			<ContactForm />
		</div>
	);
};

export default Page;
