import styles from "./Hero.module.css";

const Hero = () => {
	return (
		<div className={styles.container}>
			<h1>Features</h1>
			<p>
				Streamline compliance tracking, provide real-time updates, and mitigate
				risks with our labor law compliance management system.
			</p>
			<button>Get a Demo</button>
		</div>
	);
};

export default Hero;
