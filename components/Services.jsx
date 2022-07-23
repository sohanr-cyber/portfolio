import React from "react";
import styles from "../styles/Services.module.css";
import Image from "next/image";
import { services } from "../data";
const Services = () => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: "url('/assets/wave2.jpg')",
        backgroundPosition: "left",
        backgroundOrigin: "content",
        zIndex: "-1",
      }}
    >
      <div className={styles.heading}>
        My Awesome <span>Services</span>
      </div>
      <div className={styles.flex}>
        {services.map((service) => (
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image src={service.image} width="100px" height="90px" />
            </div>
            <div className={styles.title}>{service.title}</div>
            <div className={styles.sortdetails}>{service.description}</div>
          </div>
        ))}
      </div>
      <div className={styles.btn}>
        <a href="/assets/resume-f.pdf">Download Resume</a>
      </div>
    </div>
  );
};

export default Services;
