import Image from "next/image";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Efficiency Driven{" "}
            <span className={styles.highlight}>Compliance</span> Management
            Solution
          </h1>
          <p className={styles.description}>
            Legum.ai can improve the Compliance Management process by improving
            reaction and adoption times, which will minimize fines and
            compliance risks. The platform ability will be top process and
            analyze data at unprecedented speed and significantly it will
            enhance the efficiency of regulatory compliance efforts.
          </p>
          <button className={styles.btn}>Request a Demo</button>
        </div>
        <div className={styles.image}>
          <img src="/assets/imageOne.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
