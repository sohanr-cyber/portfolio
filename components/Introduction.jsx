import React, { useState } from "react";
import styles from "../styles/Introduction.module.css";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <div className={styles.wrapper} id="Introduction">
      <motion.div
        className={styles.about}
        whileInView={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.9 }}
      >
        <motion.div
        // whileInView={{ scale: [0, 1] }}
        // transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className={styles.name}>Radnom Name</div>
          <div className={styles.work}>
            Full-stack Developer & UI/UX Designer
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className={`${styles.circle} ${styles.circle1}`}
        whileInView={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        className={`${styles.circle} ${styles.circle2}`}
        whileInView={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </div>
  );
};

export default Introduction;
