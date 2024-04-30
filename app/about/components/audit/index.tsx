import Link from "next/link";
import styles from "./Audit.module.css";
import Image from "next/image";

const Audit = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>Audit & Mitigation</h1>
				<p>{`'Audit & Mitigation' feature is designed to provide tailored solutions for your compliance  challenges, ensuring that your business remains highly labor law compliant.`}</p>
				<Link href="/" className={styles.link}>
					Read more
				</Link>
			</div>
			<div>
				<div className={styles.imageContainer}>
					<Image
						className={styles.imageOne}
						src="/assets/imageEighteen.png"
						height={1000}
						width={1000}
						alt="image"
					/>
					<Image
						className={styles.imageTwo}
						src="/assets/imageSeventeen.png"
						height={1000}
						width={1000}
						alt="image"
					/>
				</div>
			</div>
			<div className={styles.extraContainer}></div>
		</div>
	);
};

export default Audit;
