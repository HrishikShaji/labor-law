export const Intro = () => {
	return (
		<div className="w-full h-full p-10 flex flex-col gap-10 items-center ">
			<h1 className="text-[36px] font-bold leading-none">Why Choose Us</h1>
			<p className="text-center w-[80%] leading-loose">{`
				Choose Legum.AI for your labor law compliance needs because we bring
				years of dedicated expertise to the table. Our platform offers precise
				tracking, ensuring you're always up-to-date with the latest regulations.
				With insightful analytics, Legum.AI provides you with the data you need
				to make informed decisions. Plus, our tailored solutions are designed to
				fit your specific compliance requirements, keeping you ahead of the game
				in managing labor law compliance.
			`}</p>
			<button className="px-5 py-2 bg-[#D64100] text-white rounded-3xl">
				Get Started
			</button>
			<div className="flex gap-3">
				<button className="w-[250px] flex items-center justify-center gap-2 text-xl font-bold rounded-md bg-[#FFF0DF] p-3">
					Effortless
				</button>
				<button className="w-[250px] flex items-center justify-center gap-2 text-xl font-bold rounded-md bg-[#FFF0DF] p-3">
					Enhanced
				</button>
				<button className="w-[250px] flex items-center justify-center gap-2 text-xl font-bold rounded-md bg-[#FFF0DF] p-3">
					Efficient
				</button>
			</div>
			<div className="grid grid-cols-2 gap-6">
				<div className="w-full p-10 rounded-2xl shadow-sm shadow-gray-500 flex flex-col justify-center gap-4">
					<h1 className="text-xl font-bold">Effortless</h1>
					<p className="leading-loose">
						{`

						Our platform's intuitive interface ensures easy navigation, while
						its streamlined design provides quick access to essential features.
						With simplified document organization, managing compliance documents
						becomes effortless. Stay on track with proactive notifications for
						upcoming tasks and deadlines.
						`}
					</p>
				</div>
				<div className="w-full h-full rounded-2xl bg-blue-500"></div>
			</div>
		</div>
	);
};
