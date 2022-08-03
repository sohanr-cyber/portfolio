import React from "react";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className={styles.wrapper}
      id="About"
      style={{
        backgroundImage: "url('/assets/wave3.jpg')",
        backgroundPosition: "center",
        zIndex: "-1",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        About <span>Me</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        Hello ! My Name is Sohan and I enjoy creating thing that live on the
        internet My interest in web development started back in 2020 when I get
        admitted into University - turns out to learn python as my first
        programing language.Latter i learned django , and after that started
        MERN stack from some youtube channels .
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        I also recently coded a voting/polling App and A google drive clone with
        Nextjs which is better than any other votting clone or google drive
        clone found in youtube.
      </motion.p>
    </div>
  );
};

export default About;
