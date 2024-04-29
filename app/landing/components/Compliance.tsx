import Image from "next/image";
import { Indeed } from "./Indeed";
import { Instagram } from "./Instagram";
import { X } from "./X";

export const Compliance = () => {
	return (
		<div className="px-5">
			<div className="w-full shadow-two rounded-l-2xl bg-[#0B091C] text-white p-5 pl-10 flex flex-col">
				<div className="flex gap-5  py-5 items-center border-b-[1px] border-white">
					<div className="flex flex-col gap-5 ">
						<h1 className="text-[60px] leading-none font-bold w-[80%]">
							Easy Compliance Management
						</h1>
						<p className="leading-loose w-[80%]">{`Our software can do the transformation of compliance management processes to save from potential financial and regulatoryrisks. Our software will helpyou to identify, assess, and mitigate potential risks and in the process alignyou with the industry regulations and standards.`}</p>
						<div className="flex gap-5">
							<button className="px-5 py-2 rounded-3xl border-white border-[1px]">
								Sign In
							</button>
							<button className="px-5 py-2 rounded-3xl bg-[#D64100]">
								Register
							</button>
						</div>
					</div>
					<div className="flex-shrink-0 h-[400px] w-[300px] rounded-xl gradient">
						<Image
							alt="image"
							src="/assets/imageThirteen.png"
							height={1000}
							width={1000}
							className="h-full w-full object-cover"
						/>
					</div>
				</div>
				<div className="flex w-full items-center justify-between py-4">
					<div className="flex flex-col gap-2">
						<h1>support@legumai.com</h1>
						<h1>support@legumai.com</h1>
					</div>
					<div className="flex gap-6">
						<div className=" w-12 ">
							<Indeed />
						</div>
						<div className=" w-12 ">
							<X />
						</div>
						<div className=" w-12 ">
							<Instagram />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
