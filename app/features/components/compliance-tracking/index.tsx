import Link from "next/link";
import styles from "./ComplianceTracking.module.css";
import Image from "next/image";

const ComplianceTracking = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>Compliance Tracking & Benchmarking</h1>
				<p>
					Legum.AI includes compliance tracking and benchmarking features,
					allowing you to compare your compliance performance against industry
					standards and best practices. This ensures that you have a complete
					understanding of what needs to be done, making compliance a seamless
					part of your operations
				</p>
				<Link href="/" className={styles.link}>
					Read more
				</Link>
			</div>
			<div className={styles.imageContainer}>
				<Image
					src="/assets/imageFifteen.png"
					height={1000}
					width={1000}
					alt="image"
					className={styles.image}
				/>
			</div>
		</div>
	);
};

export default ComplianceTracking;
