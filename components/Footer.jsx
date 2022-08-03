import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
      >
        Connect With me
      </motion.h1>
      <div className={styles.flex}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className={styles.link}
          onClick={() => router.push("https://github.com/sohanr-cyber")}
        >
          <Image src="/assets/github (1).png" width="32px" height="32px" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          className={styles.link}
          onClick={() =>
            router.push("https://www.linkedin.com/in/sohanur-sohan-3aa51919b")
          }
        >
          <Image src="/assets/linkedin.png" width="32px" height="32px" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className={styles.link}
          onClick={() =>
            router.push(
              "https://www.facebook.com/profile.php?id=100066381262836"
            )
          }
        >
          <Image src="/assets/facebook (1).png" width="32px" height="32px" />
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
