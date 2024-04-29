import Image from "next/image";
import { Arrow } from "./Arrow";
import { Effiecient } from "./Efficient";
import { Effortless } from "./Effortless";
import { Enhanced } from "./Enhanced";
import styles from "./Intro.module.css";

export const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1 className={styles.title}>Why Choose Us</h1>
      <p className={styles.description}>
        {`

        Choose Legum.AI for your labor law compliance needs because we bring
        years of dedicated expertise to the table. Our platform offers precise
        tracking, ensuring you're always up-to-date with the latest regulations.
        With insightful analytics, Legum.AI provides you with the data you need
        to make informed decisions. Plus, our tailored solutions are designed to
        fit your specific compliance requirements, keeping you ahead of the game
        in managing labor law compliance.
				`}
      </p>
      <button className={styles.button}>
        Get Started
        <div className={styles.arrow}>
          <Arrow color="white" />
        </div>
      </button>
      <div className={styles.features}>
        <button className={styles.feature}>
          <div style={{ marginTop: "10px" }} className={styles.icon}>
            <Effortless />
          </div>
          <span className={styles.text}>Effortless</span>
        </button>
        <button className={styles.feature}>
          <div className={styles.icon}>
            <Enhanced />
          </div>
          <span className={styles.text}>Enhanced</span>
        </button>
        <button className={styles.feature}>
          <div
            style={{ marginTop: "10px", marginRight: "10px" }}
            className={styles.icon}
          >
            <Effiecient />
          </div>
          <span className={styles.text}>Efficient</span>
        </button>
      </div>
      <div className={styles.grid}>
        <div className={styles.content}>
          <h1 className={styles.subtitle}>Effortless</h1>
          <p className={styles.contentDescription}>
            {`

            Our platform's intuitive interface ensures easy navigation, while
            its streamlined design provides quick access to essential features.
            With simplified document organization, managing compliance documents
            becomes effortless. Stay on track with proactive notifications for
            upcoming tasks and deadlines.
						`}
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            height={1000}
            width={1000}
            src="/assets/imageTwo.png"
            alt="Image"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};
