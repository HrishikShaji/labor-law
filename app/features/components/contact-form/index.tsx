import styles from "./ContactForm.module.css";

const ContactForm = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>Find out how Legum.AI can ease your Compliance Management!</h1>
				<p>Fill out the form and we’ll contact you to set up a time to chat.</p>
			</div>
			<div className={styles.formContainer}>
				<div className={styles.rectangle}></div>
				<form>
					<div className={styles.row}>
						<div className={styles.item}>
							<label>First Name *</label>
							<input />
						</div>

						<div className={styles.item}>
							<label>Last Name *</label>
							<input />
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.item}>
							<label>Company Name *</label>
							<input />
						</div>

						<div className={styles.item}>
							<label>Job Title *</label>
							<input />
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.item}>
							<label>Company Email *</label>
							<input />
						</div>

						<div className={styles.item}>
							<label>Phone *</label>
							<input />
						</div>
					</div>
					<div className={styles.lastRow}>
						<label>I have employees in multiple states *</label>
						<div className={styles.radioContainer}>
							<input type="radio" />
							<label>Yes</label>
							<input type="radio" />
							<label>No</label>
						</div>
					</div>
					<button className={styles.button}>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
