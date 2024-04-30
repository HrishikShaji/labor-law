import Link from "next/link";
import styles from "./Dashboard.module.css";
import Image from "next/image";

const Dashboard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>Dashboard</h1>
				<p>{`    Legum.AI platform features a comprehensive dashboard with accurate analysis, including  statistics and graphs, providing users with a quick and detailed overview of their compliance  status.  
Specific warning triggers are  integrated to ensure users remain on track with compliances, minimizing the risk of penalties and damages.  `}</p>
				<Link href="/" className={styles.link}>
					Read more
				</Link>
			</div>
			<div>
				<div className={styles.imageContainer}>
					<Image
						className={styles.imageOne}
						src="/assets/imageTwentysix.png"
						height={1000}
						width={1000}
						alt="image"
					/>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
