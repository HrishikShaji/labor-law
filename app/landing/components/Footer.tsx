import Link from "next/link";

export const Footer = () => {
	return (
		<div className="p-10 h-full">
			<div className="flex flex-col  h-full gap-6 text-[#00043C]">
				<div className="flex  justify-evenly h-full gap-0">
					<div className="flex flex-col gap-6 w-[20%]">
						<h1 className="text-xl font-bold">Legum.ai</h1>
						<p className="text-sm ">
							Lorem ipsum dolor sit amet, adipiscing elit. Donec tincidunt mi eu
							enim semper accumsan.
						</p>
					</div>

					<div className="flex flex-col gap-6 px-10">
						<h1 className="text-xl font-bold">Company</h1>
						<div className="flex flex-col text-sm gap-4">
							<Link href="/">Introduction</Link>
							<Link href="/">About the owners</Link>
							<Link href="/">Audit Report</Link>
							<Link href="/">Careers</Link>
						</div>
					</div>
					<div className="h-[300px] w-[1px] bg-black"></div>
					<div className="flex flex-col gap-6 px-10 ">
						<h1 className="text-xl font-bold">Services</h1>
						<div className="flex flex-col text-sm gap-4 whitespace-nowrap">
							<Link href="/">Tracking</Link>
							<Link href="/">Reporting</Link>
							<Link href="/">Data Storage</Link>
							<Link href="/">HR Compliance tool</Link>
							<Link href="/">Payroll Management</Link>
							<Link href="/">Leave Management</Link>
						</div>
					</div>
					<div className="h-[300px] w-[1px] bg-black"></div>
					<div className="flex flex-col gap-6 px-10">
						<h1 className="text-xl font-bold">Indutries</h1>
						<div className="flex flex-col text-sm gap-4 whitespace-nowrap">
							<Link href="/">Manufacturing Companies</Link>
							<Link href="/">IT & BPO</Link>
							<Link href="/">ITES</Link>
							<Link href="/">E-Comm</Link>
							<Link href="/">Services</Link>
						</div>
					</div>
					<div className="h-[300px] w-[1px] bg-[#00043C]"></div>
					<div className="flex flex-col gap-6 pl-10 pr-5">
						<h1 className="text-xl font-bold">Help & Feedback</h1>
						<button className="w-full py-3 rounded-md text-white bg-[#00043C]">
							Contact Us
						</button>
					</div>
				</div>
				<div className="w-full flex justify-between border-t-[1px] py-4 border-[#00043C]">
					<h1>© 2024 Law Compliance is registered trademarks of now inc</h1>
					<h1>Terms and Privacy • Terms of Use • Cookie Policy</h1>
				</div>
			</div>
		</div>
	);
};
