import Link from "next/link";
import Image from "next/image";
import styles from "./Updates.module.css";
import { Arrow } from "../icons/Arrow";

const Updates = () => {
	return (
		<div className={styles.container}>
			<div className={styles.headingContainer}>
				<h1>Compliance Updates</h1>
				<button>
					See All News & Updates
					<div className={styles.arrow}>
						<Arrow color="black" />
					</div>
				</button>
			</div>
			<div className={styles.innerContainer}>
				<div className={styles.cardOne}>
					<div className={styles.imageOne}>
						<Image
							alt="image"
							src="/assets/imageTen.png"
							height={1000}
							width={1000}
							className={styles.image}
						/>
					</div>
					<div className={styles.cardContent}>
						<span className={styles.date}>Feb 19,2024</span>
						<h1
							className={styles.title}
						>{`Lorem ipsum dolor sit amet,  adipiscing elit.`}</h1>
						<p
							className={styles.description}
						>{`Lorem ipsum dolor sit amet,  adipiscing elit. Donec tincidunt mi eu enim semper accumsan. Fusce vulputate neque eget dui vulputate, sed tristique diam pulvinar.`}</p>
						<Link className={styles.link} href="/">
							Read More
						</Link>
					</div>
				</div>
				<div className={styles.rightContainer}>
					<div className={styles.cardTwo}>
						<div className={styles.imageTwo}>
							<Image
								alt="image"
								src="/assets/imageEleven.png"
								height={1000}
								width={1000}
								className={styles.image}
							/>
						</div>
						<div className={styles.cardContent}>
							<span className={styles.date}>Feb 19,2024</span>
							<h1
								className={styles.title}
							>{`Lorem ipsum dolor sit amet,  adipiscing elit.`}</h1>
						</div>
					</div>
					<div className={styles.cardTwo}>
						<div className={styles.imageTwo}>
							<Image
								alt="image"
								src="/assets/imageTwelve.png"
								height={1000}
								width={1000}
								className={styles.image}
							/>
						</div>
						<div className={styles.cardContent}>
							<span className={styles.date}>Feb 19,2024</span>
							<h1
								className={styles.title}
							>{`Lorem ipsum dolor sit amet,  adipiscing elit.`}</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Updates;
