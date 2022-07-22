import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Image from "next/image";
import styles from "../styles/Experiance.module.css";

const Experiance = () => {
  return (
    <div className={styles.wrapper} id="Experiance">
      <h1 className={styles.heading}>Skills & Experiance</h1>
      <div className={styles.flex}>
        <div className={styles.item}>
          <CircularProgressbarWithChildren
            value={66}
            strokeWidth={9}
            styles={buildStyles({
              textColor: "red",
              pathColor: "#c9d5fd",
              trailColor: "rgb(81, 133, 255)",
            })}
          >
            <div className={styles.imageWrapper}>
              <Image
                width="40px"
                height="40px"
                src="/assets/redux.png"
                alt=""
              />
            </div>
          </CircularProgressbarWithChildren>
        </div>

        <div className={styles.item}>
          <CircularProgressbarWithChildren
            value={100-90}
            strokeWidth={7}
            styles={buildStyles({
              textColor: "red",
              pathColor: "#c9d5fd",
              trailColor: "rgb(81, 133, 255)",
            })}
          >
            <div className={styles.imageWrapper}>
              <Image width="40px" height="40px" src="/assets/html.png" alt="" />
            </div>
          </CircularProgressbarWithChildren>
        </div>

        <div className={styles.item}>
          <CircularProgressbarWithChildren
            value={100 - 75}
            strokeWidth={7}
            styles={buildStyles({
              textColor: "red",
              pathColor: "#c9d5fd",
              trailColor: "rgb(81, 133, 255)",
            })}
          >
            <div className={styles.imageWrapper}>
              <Image
                width="40px"
                height="40px"
                src="/assets/python.png"
                alt=""
              />
            </div>
          </CircularProgressbarWithChildren>
        </div>

        <div className={styles.item}>
          <CircularProgressbarWithChildren
            value={100 - 60}
            strokeWidth={7}
            styles={buildStyles({
              textColor: "red",
              pathColor: "#c9d5fd",
              trailColor: "rgb(81, 133, 255)",
            })}
          >
            <div className={styles.imageWrapper}>
              <Image width="40px" height="40px" src="/assets/sass.png" alt="" />
            </div>
          </CircularProgressbarWithChildren>
        </div>

        <div className={styles.item}>
          <CircularProgressbarWithChildren
            value={100 - 80}
            strokeWidth={7}
            styles={buildStyles({
              textColor: "red",
              pathColor: "#c9d5fd",
              trailColor: "rgb(81, 133, 255)",
            })}
          >
            <div className={styles.imageWrapper}>
              <Image
                width="40px"
                height="40px"
                src="/assets/javascript.png"
                alt=""
              />
            </div>
          </CircularProgressbarWithChildren>
        </div>

        <div className={styles.item}>
          <CircularProgressbarWithChildren
            value={100 - 25}
            strokeWidth={7}
            styles={buildStyles({
              textColor: "red",
              pathColor: "#c9d5fd",
              trailColor: "rgb(81, 133, 255)",
            })}
          >
            <div className={styles.imageWrapper}>
              <Image width="40px" height="40px" src="/assets/git.png" alt="" />
            </div>
          </CircularProgressbarWithChildren>
        </div>

        <div className={styles.item}>
          <CircularProgressbarWithChildren
            value={100 - 80}
            strokeWidth={7}
            styles={buildStyles({
              textColor: "red",
              pathColor: "#c9d5fd",
              trailColor: "rgb(81, 133, 255)",
            })}
          >
            <div className={styles.imageWrapper}>
              <Image width="40px" height="40px" src="/assets/css.png" alt="" />
            </div>
          </CircularProgressbarWithChildren>
        </div>

        <div className={styles.item}>
          <CircularProgressbarWithChildren
            value={100 - 20}
            strokeWidth={7}
            styles={buildStyles({
              textColor: "red",
              pathColor: "#c9d5fd",
              trailColor: "rgb(81, 133, 255)",
            })}
          >
            <div className={styles.imageWrapper}>
              <Image width="40px" height="40px" src="/assets/cpp.png" alt="" />
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
