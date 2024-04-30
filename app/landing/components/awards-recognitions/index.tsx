import Image from "next/image";
import styles from "./AwardsAndRecognitions.module.css";

const AwardsAndRecognitions = () => {
	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<div className={styles.imageContainer}>
					<Image
						height={1000}
						width={1000}
						src="/assets/imageFive.png"
						alt="image"
					/>
				</div>
				<span className={styles.date}>February 23, 2024</span>
				<h1 className={styles.title}>Man of Excellence Award</h1>
				<p className={styles.description}>
					The founder of Legum.AI, Dr. Amitava Ghosh, has made immense
					contribution to the field. This award was presented to him for his
				</p>
				<button className={styles.button}>Read more</button>
			</div>
			<div className={styles.box}>
				<div className={styles.imageContainer}>
					<Image
						height={1000}
						width={1000}
						src="/assets/imageSix.png"
						alt="image"
					/>
				</div>
				<span className={styles.date}>February 23, 2024</span>
				<h1 className={styles.title}>Most Promising Company of the year</h1>
				<p className={styles.description}>
					With an accomplishment of 30% YOY in the first year itself, SSA has
					grown in a remarkable pace within one year with its impeccable
				</p>
				<button className={styles.button}>Read more</button>
			</div>
			<div className="col-span-2 flex flex-col justify-center gap-4">
				<h1 className={styles.title}>Awards & Recognitions</h1>
				<p className={styles.description}>
					Led by seasoned experts in labor law, our founders are committed to
					excellence, ensuring that every aspect of our platform meets the
					highest standards. With a dedication to quality and a passion for
					innovation, they inspire us to continually soar higher and exceed
					expectations in the field of compliance management.
				</p>
			</div>
		</div>
	);
};

export default AwardsAndRecognitions;
