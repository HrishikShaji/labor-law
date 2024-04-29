import Link from "next/link";
import { Arrow } from "./Arrow";
import Image from "next/image";

export const Features = () => {
	return (
		<div className="w-full h-full p-10 ">
			<div className="flex flex-col gap-5 py-5 items-center shadow-two rounded-2xl">
				<div className="p-5 rounded-md  gap-4 flex">
					<div className="w-[60%] flex flex-col gap-4">
						<h1 className="text-[36px] w-[60%] font-bold">
							Empower Your Business with Cutting-Edge Features
						</h1>
						<div className="flex  items-center bg-[#F2F6FC] mt-4  p-10 rounded-2xl">
							<div className="flex flex-col gap-4">
								<h1 className="font-bold">
									COMPLIANCE TRACKING & BENCHMARKING:
								</h1>
								<p className="w-[80%]">{`Legum.AI  is a comprehensive platform designed for a seamless compliance tracking and benchmarking system to ensure that your`}</p>
								<Link
									className="underline-offset-2 underline font-bold"
									href="/"
								>
									Read More
								</Link>
							</div>
							<div className="h-[250px] w-[200px] flex-shrink-0 rounded-md ">
								<Image
									alt="image"
									src="/assets/imageSeven.png"
									height={1000}
									width={1000}
									className="h-full w-full object-contain"
								/>
							</div>
						</div>
						<div className="flex gap-4 h-full ">
							<div className="p-10 rounded-2xl border-[1px] flex items-center w-[60%] border-[#D1DEF1]">
								<div className="flex flex-col gap-4 ">
									<h1 className="font-bold">RECORD MANAGEMENT:</h1>
									<p className="w-[80%]">{`Legum.AI provides a record management feature on the platform ensuring that your confidential data is secure while`}</p>
									<Link
										className="underline-offset-2 underline font-bold"
										href="/"
									>
										Read More
									</Link>
								</div>
							</div>
							<div className="p-10 rounded-2xl border-[1px] w-[40%] h-full text-white bg-[#0D1024] flex items-center">
								<div className="flex flex-col gap-4 ">
									<h1 className="font-bold">AUDIT & MITIGATIONS:</h1>
									<p className="">{`Our 'Audit & Mitigation' feature is designed to provide tailored solutions for your compliance`}</p>
									<Link
										className="underline-offset-2 underline font-bold"
										href="/"
									>
										Read More
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="w-[40%] flex flex-col gap-4">
						<div className="rounded-2xl  border-[#D1DEF1] border-[1px] p-10 flex flex-col gap-4">
							<div className="rounded-md  h-[200px] w-full overflow-hidden">
								<Image
									alt="image"
									src="/assets/imageEight.png"
									height={1000}
									width={1000}
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="flex flex-col gap-4">
								<h1 className="font-bold">RECORD MANAGEMENT:</h1>
								<p className="w-[80%]">{`Legum.AI provides a record management feature on the platform ensuring that your confidential data is secure while`}</p>
								<Link
									className="underline-offset-2 underline font-bold"
									href="/"
								>
									Read More
								</Link>
							</div>
						</div>
						<div className="rounded-2xl border-[#D1DEF1] border-[1px] p-10 flex items-center gap-6">
							<div className="flex flex-col gap-4">
								<h1 className="font-bold">GOVERNMENT NOTIFICATIONS:</h1>
								<p className="w-[80%]">{`Legum.AI goes beyond just tracking and analysis; it also keeps you updated with the`}</p>
								<Link
									className="underline-offset-2 underline font-bold"
									href="/"
								>
									Read More
								</Link>
							</div>
							<div className=" rounded-md overflow-hidden bg-black w-[200px] h-[250px] flex-shrink-0">
								<Image
									alt="image"
									src="/assets/imageNine.png"
									height={1000}
									width={1000}
									className="h-full w-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
				<button className="rounded-3xl items-center flex gap-1 px-5 py-2 border-black border-2">
					See All
					<div className="w-5  -rotate-90">
						<Arrow color="black" />
					</div>
				</button>
			</div>
		</div>
	);
};
