import Image from "next/image";
import styles from "./RecordManagement.module.css";
import { Tick } from "@/app/landing/components/icons/Tick";

const RecordManagement = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          alt="image"
          src="/assets/imageSixteen.png"
          height={1000}
          width={1000}
        />
      </div>
      <div className={styles.content}>
        <h1>Record Management</h1>
        <p>{` Legum.AI provides a record management feature on the platform ensuring that your confidential  data is secure while being easily accessible for compliance tracking and analysis.`}</p>
        <div className={styles.grid}>
          <div>
            <div className={styles.icon}>
              <Tick />
            </div>
            <h2>{`Systematic data storage, ensuring  compliance with data protection regulations.`}</h2>
          </div>
          <div>
            <div className={styles.icon}>
              <Tick />
            </div>
            <h2>{`Downloadable  Government-issued forms for filling`}</h2>
          </div>
          <div>
            <div className={styles.icon}>
              <Tick />
            </div>
            <h2>{`Forms and Data can  be downloaded in PDF, Excel, or Word formats.`}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordManagement;
