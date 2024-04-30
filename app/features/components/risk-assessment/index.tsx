import Link from "next/link";
import styles from "./RiskAssessment.module.css";
import Image from "next/image";

const RiskAssessment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Risk Assessment</h1>
        <p>{`   Legum.AI offers a unique feature of risk assessment tailored to your organization's HR and labour law  compliance challenges. Through comprehensive analysis, we identify potential risks and provide  timely solutions to mitigate them. 
Keeping our users informed about the latest compliance  requirements and best practices, the platform helps you avoid penalties due to non-compliance.  `}</p>
        <Link href="/" className={styles.link}>
          Read more
        </Link>
      </div>
      <div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.imageOne}
            src="/assets/imageTwentytwo.png"
            height={1000}
            width={1000}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;
