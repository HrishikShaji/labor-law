import Link from "next/link";
import { Arrow } from "./Arrow";

export const Updates = () => {
	return (
		<div className="h-full w-full p-10 flex flex-col gap-4">
			<div className="flex w-full justify-between items-center">
				<h1 className="text-[36px] font-bold">Compliance Updates</h1>
				<button className="rounded-3xl flex gap-1 items-center px-5 py-2 border-black border-[1px]">
					See All News & Updates
					<div className="w-5  -rotate-90">
						<Arrow color="black" />
					</div>
				</button>
			</div>
			<div className="flex gap-4">
				<div className="w-[60%] flex flex-col rounded-2xl overflow-hidden shadow-gray-500 shadow-sm">
					<div className="w-full bg-black h-[400px]"></div>
					<div className="p-5 flex flex-col gap-4">
						<span className="text-sm">Feb 19,2024</span>
						<h1 className="font-bold">{`Lorem ipsum dolor sit amet,  adipiscing elit.`}</h1>
						<p className="text-sm">{`Lorem ipsum dolor sit amet,  adipiscing elit. Donec tincidunt mi eu enim semper accumsan. Fusce vulputate neque eget dui vulputate, sed tristique diam pulvinar.`}</p>
						<Link className="underline underline-offset-2" href="/">
							Read More
						</Link>
					</div>
				</div>
				<div className="flex w-[40%] flex-col gap-4">
					<div className="w-full flex flex-col rounded-2xl overflow-hidden shadow-gray-500 shadow-sm">
						<div className="w-full bg-black h-[200px]"></div>
						<div className="p-5 flex flex-col gap-4">
							<span className="text-sm">Feb 19,2024</span>
							<h1 className="font-bold">{`Lorem ipsum dolor sit amet,  adipiscing elit.`}</h1>
						</div>
					</div>
					<div className="w-full flex flex-col rounded-2xl overflow-hidden shadow-gray-500 shadow-sm">
						<div className="w-full bg-black h-[200px]"></div>
						<div className="p-5 flex flex-col gap-4">
							<span className="text-sm">Feb 19,2024</span>
							<h1 className="font-bold">{`Lorem ipsum dolor sit amet,  adipiscing elit.`}</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
