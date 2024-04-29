import Image from "next/image";

export const AwardsAndRecognitions = () => {
	return (
		<div className="w-full h-full p-10 grid grid-cols-4 gap-4">
			<div className="p-3 rounded-md flex flex-col gap-2 box">
				<div className="h-[150px] w-full rounded-md bg-black">
					<Image
						alt="image"
						src="/assets/imageFive.png"
						height={1000}
						width={1000}
						className="h-full w-full object-contain"
					/>
				</div>
				<span className="text-sm">February 23,2024</span>
				<h1 className="text-xl font-bold">Man of Excellence Award</h1>
				<p>{`The founder of Legum.AI, Dr. Amitava Ghosh, has made immense contribution to the field. This award was presented to him for his`}</p>
				<button className="p-2 border-black border-2 rounded-md w-full">
					Read more
				</button>
			</div>
			<div className="p-3 rounded-md flex flex-col gap-2 box">
				<div className="h-[150px] w-full rounded-md bg-black">
					<Image
						alt="image"
						src="/assets/imageSix.png"
						height={1000}
						width={1000}
						className="h-full w-full object-contain"
					/>
				</div>
				<span className="text-sm">February 23,2024</span>
				<h1 className="truncate text-xl font-bold">
					Most Promising Company of the year
				</h1>
				<p className="">{`With an accomplishment of 30% YOY in the first year itself, SSA has grown in a remarkable pace within one year with its impeccable `}</p>
				<button className="p-2 border-black border-2 rounded-md w-full">
					Read more
				</button>
			</div>
			<div className="col-span-2 flex flex-col justify-center gap-4">
				<h1 className="text-[36px] font-bold">Awards & Recognitions</h1>
				<p className="leading-loose w-[80%]">{`Led by seasoned experts in labor law, our founders are committed to excellence, ensuring that every aspect of our platform meets the highest standards. With a dedication to quality and a passion for innovation, they inspire us to continually soar higher and exceed expectations in the field of compliance management."`}</p>
			</div>
		</div>
	);
};
