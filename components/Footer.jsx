import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Connect With me</h1>
      <div className={styles.flex}>
        <div className={styles.link} onClick={() => router.push("/")}>
          <Image src="/assets/github (1).png" width="32px" height="32px" />
        </div>
        <div className={styles.link} onClick={() => router.push("/")}>
          <Image src="/assets/linkedin.png" width="32px" height="32px" />
        </div>
        <div className={styles.link} onClick={() => router.push("/")}>
          <Image src="/assets/facebook (1).png" width="32px" height="32px" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
