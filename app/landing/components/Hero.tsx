export const Hero = () => {
	return (
		<div className="h-screen px-10 w-full bg-[#00043C] text-white ">
			<div className="w-full h-full relative">
				<div className="flex flex-col gap-6 w-[60%] pt-40 items-start">
					<h1 className="text-[66px] hellix-bold leading-tight">
						Efficiency Driven <span className="text-[#D64100]">Compliance</span>{" "}
						Management Solution
					</h1>
					<p className="text-[20px] w-[80%]">
						Legum.ai can improve the Compliance Management process by improving
						reaction and adoption times, which will minimize fines and
						compliance risks. The platform ability will be top process and
						analyze data at unprecedented speed and significantly it will
						enhance the efficiency of regulatory compliance efforts.
					</p>
					<button className="px-5 py-2 mt-4 rounded-3xl bg-[#D64100]">
						Request a Demo
					</button>
				</div>
				<div className="absolute bottom-0 right-0 h-[77%] w-[34%] bg-[#D64100] rounded-t-3xl"></div>
			</div>
		</div>
	);
};
