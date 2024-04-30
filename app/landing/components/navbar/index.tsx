import styles from "./Navbar.module.css";
import { Arrow } from "../icons/Arrow";

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<h1 className={styles.logo}>LOGO</h1>
			<div className={styles.menuItems}>
				<div>
					<a href="/">About us</a>
				</div>
				<div>
					<a href="/">Labour Codes</a>
				</div>
				<div className={styles.submenu}>
					<a href="/">Industries</a>
					<div className={styles.arrow}>
						<Arrow />
					</div>
				</div>
				<div>
					<a href="/">HR Dossier</a>
				</div>
				<div className={styles.submenu}>
					<a href="/">Services</a>
					<div className={styles.arrow}>
						<Arrow />
					</div>
				</div>
				<div className={styles.submenu}>
					<a href="/">Products</a>
					<div className={styles.arrow}>
						<Arrow />
					</div>
				</div>
				<div className={styles.submenu}>
					<a href="/">Resources</a>
					<div className={styles.arrow}>
						<Arrow />
					</div>
				</div>
				<div className={styles.submenu}>
					<a href="/">Library</a>
					<div className={styles.arrow}>
						<Arrow />
					</div>
				</div>
			</div>
			<div className={styles.actions}>
				<button>Sign In</button>
				<button className={styles.registerBtn}>Register</button>
			</div>
		</div>
	);
};

export default Navbar;
