import Link from "next/link";
import { Goto } from "./Goto";
import { Legum } from "./Legum";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.columns}>
          <div className={styles.firstColumn}>
            <div>
              <Legum />
            </div>
            <p>
              Lorem ipsum dolor sit amet, adipiscing elit. Donec tincidunt mi eu
              enim semper accumsan.
            </p>
          </div>

          <div className={styles.column}>
            <h1>Company</h1>
            <div className={styles.innerColumn}>
              <Link href="/">Introduction</Link>
              <Link href="/">About the owners</Link>
              <Link href="/">Audit Report</Link>
              <Link href="/">Careers</Link>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.column}>
            <h1>Services</h1>
            <div className={styles.innerColumn}>
              <Link href="/">Tracking</Link>
              <Link href="/">Reporting</Link>
              <Link href="/">Data Storage</Link>
              <Link href="/">HR Compliance tool</Link>
              <Link href="/">Payroll Management</Link>
              <Link href="/">Leave Management</Link>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.column}>
            <h1>Indutries</h1>
            <div className={styles.innerColumn}>
              <Link href="/">Manufacturing Companies</Link>
              <Link href="/">IT & BPO</Link>
              <Link href="/">ITES</Link>
              <Link href="/">E-Comm</Link>
              <Link href="/">Services</Link>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.lastColumn}>
            <h1>Help & Feedback</h1>
            <button>
              Contact Us
              <div>
                <Goto />
              </div>
            </button>
          </div>
        </div>
        <div className={styles.footerText}>
          <h1>© 2024 Law Compliance is registered trademarks of now inc</h1>
          <h1>Terms and Privacy • Terms of Use • Cookie Policy</h1>
        </div>
      </div>
    </div>
  );
};
