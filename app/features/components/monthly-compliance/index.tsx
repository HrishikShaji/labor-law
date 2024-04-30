import Link from "next/link";
import Image from "next/image";
import styles from "./MonthlyCompliance.module.css";

export const MonthlyCompliance = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>Monthly Compliance Calendar</h1>
				<p>{`Compliance calendar feature on the platform provides a  comprehensive schedule of compliance-related tasks and deadlines, ensuring that your  organization stays on top of its obligations. 
The calendar highlights key dates for filing returns,  submitting reports, conducting audits, and other critical compliance activities. 
One can easily track and manage all the compliance tasks in one place,  reducing the risk of missing deadlines and incurring penalties. `}</p>
				<Link href="/" className={styles.link}>
					Read more
				</Link>
			</div>
			<div className={styles.extraContainer}>
				<div className={styles.imageContainer}>
					<Image
						className={styles.imageOne}
						src="/assets/imageTwenty.png"
						height={1000}
						width={1000}
						alt="image"
					/>
				</div>
			</div>
		</div>
	);
};

export default MonthlyCompliance;
