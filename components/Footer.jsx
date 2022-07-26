import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <h1>Connect With me</h1>
      <div className={styles.flex}>
        <div
          className={styles.link}
          onClick={() => router.push("https://github.com/sohanr-cyber")}
        >
          <Image src="/assets/github (1).png" width="32px" height="32px" />
        </div>
        <div
          className={styles.link}
          onClick={() =>
            router.push("https://www.linkedin.com/in/sohanur-sohan-3aa51919b")
          }
        >
          <Image src="/assets/linkedin.png" width="32px" height="32px" />
        </div>
        <div
          className={styles.link}
          onClick={() =>
            router.push(
              "https://www.facebook.com/profile.php?id=100066381262836"
            )
          }
        >
          <Image src="/assets/facebook (1).png" width="32px" height="32px" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
