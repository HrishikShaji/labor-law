"use client"
import Image from "next/image";
import styles from "./Intro.module.css";
import { Arrow } from "../icons/Arrow";
import { Efficient } from "../icons/Efficient";
import { Effortless } from "../icons/Effortless";
import { Enhanced } from "../icons/Enhanced";
import { useState } from "react";

const Intro = () => {
	const [feature, setFeature] = useState("effortless");
	return (
		<div className={styles.intro}>
			<h1 className={styles.title}>Why Choose Us</h1>
			<p className={styles.description}>
				{`

        Choose Legum.AI for your labor law compliance needs because we bring
        years of dedicated expertise to the table. Our platform offers precise
        tracking, ensuring you're always up-to-date with the latest regulations.
        With insightful analytics, Legum.AI provides you with the data you need
        to make informed decisions. Plus, our tailored solutions are designed to
        fit your specific compliance requirements, keeping you ahead of the game
        in managing labor law compliance.
				`}
			</p>
			<button className={styles.button}>
				Get Started
				<div className={styles.arrow}>
					<Arrow color="white" />
				</div>
			</button>
			<div className={styles.features}>
				<button
					onClick={() => setFeature("effortless")}
					className={styles.feature}
				>
					<div
						onClick={() => setFeature("effortless")}
						style={{ marginTop: "10px" }}
						className={styles.icon}
					>
						<Effortless />
					</div>
					<span className={styles.text}>Effortless</span>
				</button>
				<button
					onClick={() => setFeature("enhanced")}
					className={styles.feature}
				>
					<div className={styles.icon}>
						<Enhanced />
					</div>
					<span className={styles.text}>Enhanced</span>
				</button>
				<button
					onClick={() => setFeature("efficient")}
					className={styles.feature}
				>
					<div
						style={{ marginTop: "10px", marginRight: "10px" }}
						className={styles.icon}
					>
						<Efficient />
					</div>
					<span className={styles.text}>Efficient</span>
				</button>
			</div>
			{feature === "effortless" ? <EffortlessFeature /> : null}
			{feature === "efficient" ? <EfficientFeature /> : null}
			{feature === "enhanced" ? <EnhancedFeature /> : null}
		</div>
	);
};

export default Intro;

const EffortlessFeature = () => {
	return (
		<div className={styles.grid}>
			<div className={styles.content}>
				<h1 className={styles.subtitle}>Effortless</h1>
				<p className={styles.contentDescription}>
					{`

            Our platform's intuitive interface ensures `}
					<span>easy navigation</span>
					{`, while
            its streamlined design provides quick access to essential features.
            With `}
					<span>simplified document organization</span>
					{`, managing compliance documents
            becomes effortless. Stay on track with `}
					<span>proactive notifications</span>
					{` for
            upcoming tasks and deadlines.
						`}
				</p>
			</div>
			<div className={styles.imageContainer}>
				<Image
					height={1000}
					width={1000}
					src="/assets/imageTwo.png"
					alt="Image"
					className={styles.image}
				/>
			</div>
		</div>
	);
};

const EnhancedFeature = () => {
	return (
		<div className={styles.grid}>
			<div className={styles.content}>
				<h1 className={styles.subtitle}>Enhanced</h1>
				<p className={styles.contentDescription}>
					{`Take your compliance management to the next level with our platform's `}
					<span>advanced features. Customizable compliance calendars</span>
					{` help you stay organized and manage tasks efficiently. Receive regular updates on regulatory changes, and conduct comprehensive risk assessments to identify and`}
					<span> mitigate potential compliance risks.</span>
				</p>
			</div>
			<div className={styles.imageContainer}>
				<Image
					height={1000}
					width={1000}
					src="/assets/imageThree.png"
					alt="Image"
					className={styles.image}
				/>
			</div>
		</div>
	);
};

const EfficientFeature = () => {
	return (
		<div className={styles.grid}>
			<div className={styles.content}>
				<h1 className={styles.subtitle}>Efficient</h1>
				<p className={styles.contentDescription}>
					{`
Streamline your compliance processes with our platform's efficient tools.`}{" "}
					<span>Track compliance progress </span>and
					<span> completion status</span> for various tasks and requirements,
					ensuring nothing is overlooked. Gain valuable insights into your
					compliance status with our
					<span> insightful dashboard and detailed reporting.</span>
				</p>
			</div>
			<div className={styles.imageContainer}>
				<Image
					height={1000}
					width={1000}
					src="/assets/imageFour.png"
					alt="Image"
					className={styles.image}
				/>
			</div>
		</div>
	);
};
