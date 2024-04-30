import Link from "next/link";
import styles from "./RegulatoryUpdates.module.css";
import Image from "next/image";

const RegulatoryUpdates = () => {
	return (
		<div className={styles.container}>
			<div>
				<div className={styles.imageContainer}>
					<Image
						className={styles.imageOne}
						src="/assets/imageTwentyone.png"
						height={1000}
						width={1000}
						alt="image"
					/>
				</div>
			</div>
			<div className={styles.extraContainer}></div>
			<div className={styles.content}>
				<h1>Regulatory Updates</h1>
				<p>{`  Legum.AI offers a unique feature of regulatory updates, keeping users informed and on track with  their compliance management. 
Stay up-to-date with the latest changes  in labor laws and regulations, ensuring that your organization remains compliant at all times. 
The platform provides timely notifications and alerts for important updates, allowing you to take  proactive measures to address any changes. `}</p>
				<Link href="/" className={styles.link}>
					Read more
				</Link>
			</div>
		</div>
	);
};

export default RegulatoryUpdates;
