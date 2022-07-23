import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div
      className={styles.wrapper}
      id="About"
      style={{
        backgroundImage: "url('/assets/wave3.jpg')",
        backgroundPosition: "left",
        backgroundOrigin: "padding-box",
        zIndex: "-1",
      }}
    >
      <h1>
        About <span>Me</span>
      </h1>
      <p>
        Hello ! My Name is Sohan and I enjoy creating thing that live on the
        internet My interest in web development started back in 2020 when I get
        admitted into University - turns out to learn python as my first
        programing language.Latter i learned django , and after that started
        MERN stack from some youtube channels .
      </p>
      <p>
        I also recently coded a voting/polling App and A google drive clone with
        Nextjs which is better than any other votting clone or google drive
        clone found in youtube.
      </p>
    </div>
  );
};

export default About;
