import Link from "next/link";
import styles from "./GovernmentNotifications.module.css";
import Image from "next/image";

const GovernmentNotifications = () => {
	return (
		<div className={styles.container}>
			<div>
				<div className={styles.imageContainer}>
					<Image
						className={styles.imageOne}
						src="/assets/imageNineteen.png"
						height={1000}
						width={1000}
						alt="image"
					/>
				</div>
			</div>
			<div className={styles.extraContainer}></div>
			<div className={styles.content}>
				<h1>Government Notifications</h1>
				<p>{` Legum.AI goes beyond just tracking and analysis; it also keeps you updated with the latest  government notices and regulatory changes. By providing real-time updates on compliance rules  and regulations, you can stay ahead of the curve and take proactive steps to ensure your  business remains highly compliant.`}</p>
				<Link href="/" className={styles.link}>
					Read more
				</Link>
			</div>
		</div>
	);
};

export default GovernmentNotifications;
