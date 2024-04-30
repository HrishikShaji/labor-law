import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>About Legum.AI</h1>
				<p>
					Stay compliant with labor laws effortlessly. Manage, track, and
					analyze data easily. Get real-time updates to avoid penalties.
					Simplify compliance and focus on growth.
				</p>
				<div className={styles.buttons}>
					<button className={styles.buttonOne}>Sign In</button>
					<button className={styles.buttonTwo}>Get a Demo</button>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<Image
					src="/assets/imageTwentyseven.png"
					height={1000}
					width={1000}
					alt="image"
					className={styles.image}
				/>
			</div>
		</div>
	);
};

export default Hero;
