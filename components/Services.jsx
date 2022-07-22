import React from "react";
import styles from "../styles/Services.module.css";
import Image from "next/image";

const services = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        My Awesome <span>Services</span>
      </div>
      <div className={styles.flex}>
        {[1, 2, 3, 3].map((i) => (
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image src="/assets/about01.png" width="110px" height="110px" />
            </div>
            <div className={styles.title}>Backend Developer</div>
            <div className={styles.sortdetails}>
              I amd a backend developer with a passion for building beautiful
              and functional we applications
            </div>
          </div>
        ))}
      </div>
      <div className={styles.btn}>
        <a href="">Download Resume</a>
      </div>
    </div>
  );
};

export default services;
