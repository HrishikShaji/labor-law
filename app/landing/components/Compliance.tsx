import Image from "next/image";
import { Indeed } from "./Indeed";
import { Instagram } from "./Instagram";
import { X } from "./X";
import styles from "./Compliance.module.css";

export const Compliance = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.wrapper}>
          <div className={styles.sectionOne}>
            <h1>Easy Compliance Management</h1>
            <p>{`Our software can do the transformation of compliance management processes to save from potential financial and regulatoryrisks. Our software will helpyou to identify, assess, and mitigate potential risks and in the process alignyou with the industry regulations and standards.`}</p>
            <div className={styles.buttons}>
              <button className={styles.buttonOne}>Sign In</button>
              <button className={styles.buttonTwo}>Register</button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              alt="image"
              src="/assets/imageThirteen.png"
              height={1000}
              width={1000}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <div className={styles.contacts}>
            <h1>support@legumai.com</h1>
            <h1>support@legumai.com</h1>
          </div>
          <div className={styles.icons}>
            <div>
              <Indeed />
            </div>
            <div>
              <X />
            </div>
            <div>
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
