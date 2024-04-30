import Link from "next/link";
import styles from "./MonthlyReporting.module.css";
import Image from "next/image";

const MonthlyReporting = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.imageOne}
            src="/assets/imageTwentythree.png"
            height={1000}
            width={1000}
            alt="image"
          />
        </div>
      </div>
      <div className={styles.content}>
        <h1>Monthly Reporting</h1>
        <p>{`  Legum.AI offers a unique monthly reporting feature, providing users with a clear understanding of  their compliance status month on month. 
With detailed reports on key compliance metrics and activities, one can  track the progress and identify areas of improvement. `}</p>
        <Link href="/" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default MonthlyReporting;
