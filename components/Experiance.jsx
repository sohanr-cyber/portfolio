import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Image from "next/image";
import styles from "../styles/Experiance.module.css";
import { data } from "../data";

const Experiance = () => {
  return (
    <div className={styles.wrapper} id="Experiance">
      <h1 className={styles.heading}>Skills & Experiance</h1>
      <div className={styles.flex}>
        {data.map((item) => (
          <div className={styles.item}>
            <CircularProgressbarWithChildren
              value={item.value}
              strokeWidth={9}
              styles={buildStyles({
                textColor: "red",
                pathColor: "gold",
                trailColor: "lightgrey",
              })}
            >
              <div className={styles.imageWrapper}>
                <Image width="40px" height="40px" src={item.src} alt="" />
              </div>
            </CircularProgressbarWithChildren>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiance;
