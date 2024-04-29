import Link from "next/link";
import { Arrow } from "./Arrow";

export const Navbar = () => {
	return (
		<div className="w-full py-5 px-10 flex justify-between fixed top-0 z-20 items-center bg-[#00043C] text-white">
			<h1 className="text-xl">LOGO</h1>
			<div className="flex gap-4">
				<div>
					<Link href="/">About us</Link>
				</div>
				<div>
					<Link href="/">Labour Codes</Link>
				</div>
				<div className="flex gap-1 items-center">
					<Link href="/">Industries</Link>
					<div className="w-5">
						<Arrow />
					</div>
				</div>
				<div>
					<Link href="/">HR Dossier</Link>
				</div>
				<div className="flex gap-1 items-center">
					<Link href="/">Services</Link>
					<div className="w-5">
						<Arrow />
					</div>
				</div>
				<div className="flex gap-1 items-center">
					<Link href="/">Products</Link>
					<div className="w-5">
						<Arrow />
					</div>
				</div>
				<div className="flex gap-1 items-center">
					<Link href="/">Resources</Link>
					<div className="w-5">
						<Arrow />
					</div>
				</div>
				<div className="flex gap-1 items-center">
					<Link href="/">Library</Link>
					<div className="w-5">
						<Arrow />
					</div>
				</div>
			</div>
			<div className="flex gap-4">
				<button>Sign In</button>
				<button className="rounded-3xl py-2 px-5 bg-[#D64100] ">
					Register
				</button>
			</div>
		</div>
	);
};
