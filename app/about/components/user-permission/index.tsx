import Link from "next/link";
import styles from "./UserPermission.module.css";
import Image from "next/image";

const UserPermission = () => {
	return (
		<div className={styles.container}>
			<div>
				<div className={styles.imageContainer}>
					<Image
						className={styles.imageOne}
						src="/assets/imageTwentyfour.png"
						height={1000}
						width={1000}
						alt="image"
					/>
				</div>
			</div>
			<div className={styles.extraContainer}></div>
			<div className={styles.content}>
				<h1>User Permission</h1>
				<p>{`  Legum.AI  offers a feature allowing only authorized users to access the  data on the  platform. This enables the maintenance of the security of the data stored in the platform along  with enabling complete access when required only to the authorized users from the  management.`}</p>
				<Link href="/" className={styles.link}>
					Read more
				</Link>
			</div>
		</div>
	);
};

export default UserPermission;
