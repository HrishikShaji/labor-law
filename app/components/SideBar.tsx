import Link from "next/link";

const sections = [
	{ title: "Dashboard", url: "/dashboard" },
	{ title: "Resources", url: "/resources" },
	{ title: "Manage Account", url: "/manage-account" },
	{ title: "Register", url: "/register" },
	{ title: "Social Security Benefits", url: "/social-security-benefits" },
	{ title: "Licenses & Registration", url: "/license-registration" },
	{ title: "Notices & Abstracts", url: "/notices" },
	{ title: "Remittances", url: "/remittances" },
	{ title: "Returns", url: "/returns" },
	{ title: "Reports", url: "/reports" },
	{ title: "Inspection & Notices", url: "/inspections" },
];

export const SideBar = () => {
	return (
		<div className="min-h-screen  flex flex-col bg-indigo-900">
			<div className="p-5">
				<h1 className="text-white font-semibold">Legum.ai</h1>
			</div>
			<div className="flex flex-col px-10 gap-2 mt-10">
				{sections.map((item, i) => (
					<Link
						key={i}
						href={item.url}
						className="p-2 text-white hover:bg-white hover:text-indigo-900 whitespace-nowrap rounded-md"
					>
						{item.title}
					</Link>
				))}
			</div>
			<div className="px-10 mt-20">
				<button className="w-full text-white border-t-[1px] border-gray-400 p-2">
					Log Out
				</button>
			</div>
		</div>
	);
};
