import Link from "next/link";
import { Arrow } from "./Arrow";
import Image from "next/image";

import styles from "./Features.module.css";

export const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.mainSection}>
          <div className={styles.leftContainer}>
            <h1 className={styles.primaryTitle}>
              Empower Your Business with Cutting-Edge Features
            </h1>
            <div className={styles.cardOne}>
              <div className={styles.cardContent}>
                <h1>COMPLIANCE TRACKING & BENCHMARKING:</h1>
                <p>{`Legum.AI  is a comprehensive platform designed for a seamless compliance tracking and benchmarking system to ensure that your`}</p>
                <Link className={styles.link} href="/">
                  Read More
                </Link>
              </div>
              <div className={styles.imageOne}>
                <Image
                  alt="image"
                  src="/assets/imageSeven.png"
                  height={1000}
                  width={1000}
                  className={styles.image}
                />
              </div>
            </div>
            <div className={styles.leftInnerContainer}>
              <div className={styles.cardTwo}>
                <div className={styles.cardContent}>
                  <h1>RECORD MANAGEMENT:</h1>
                  <p>{`Legum.AI provides a record management feature on the platform ensuring that your confidential data is secure while`}</p>
                  <Link className={styles.link} href="/">
                    Read More
                  </Link>
                </div>
              </div>
              <div className={styles.cardThree}>
                <div className={styles.cardContent}>
                  <h1>AUDIT & MITIGATIONS:</h1>
                  <p className="">{`Our 'Audit & Mitigation' feature is designed to provide tailored solutions for your compliance`}</p>
                  <Link className={styles.link} href="/">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.cardFour}>
              <div className={styles.imageTwo}>
                <Image
                  alt="image"
                  src="/assets/imageEight.png"
                  height={1000}
                  width={1000}
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <h1>RECORD MANAGEMENT:</h1>
                <p>{`Legum.AI provides a record management feature on the platform ensuring that your confidential data is secure while`}</p>
                <Link className={styles.link} href="/">
                  Read More
                </Link>
              </div>
            </div>
            <div className={styles.cardFive}>
              <div className={styles.cardContent}>
                <h1>GOVERNMENT NOTIFICATIONS:</h1>
                <p>{`Legum.AI goes beyond just tracking and analysis; it also keeps you updated with the`}</p>
                <Link className={styles.link} href="/">
                  Read More
                </Link>
              </div>
              <div className={styles.imageThree}>
                <Image
                  alt="image"
                  src="/assets/imageNine.png"
                  height={1000}
                  width={1000}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
        <button className={styles.button}>
          See All
          <div className={styles.icon}>
            <Arrow color="black" />
          </div>
        </button>
      </div>
    </div>
  );
};
