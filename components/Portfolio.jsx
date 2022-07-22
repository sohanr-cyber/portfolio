import React, { useState } from "react";
import styles from "../styles/Portfolio.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Portfolio = ({ projects }) => {
  const [currentTech, setCurrentTech] = useState("All");
  const router = useRouter();
  console.log(projects);

  const techs = () => {
    let allTech = ["All"];
    projects.forEach((project) => {
      project.tech?.forEach((tech, index) => {
        !allTech.includes(tech) && allTech.push(tech);
      });
    });
    return allTech;
  };

  console.log(projects);
  return (
    <div className={styles.wrapper} id="Portfolio">
      {/* <div className={styles.container}> */}
      <div className={styles.heading}>
        My Creative <span>Portfolio</span> Section
      </div>

      <div className={styles.flex}>
        {techs().map((tech) => (
          <div
            className={styles.item}
            onClick={() => setCurrentTech(tech)}
            style={{
              color: `${currentTech == tech ? "white" : ""}`,
            }}
          >
            {tech}
          </div>
        ))}
      </div>
      <div className={`${styles.flex} ${styles.projects}`}>
        {currentTech != "All"
          ? projects
              .filter((project) => project.tech.includes(currentTech))
              .map((i, k) => (
                <div
                  className={styles.card}
                  onClick={() => router.push(`/project/${i.id}`)}
                >
                  <div className={styles.pic}>
                    <Image
                      src={i.photos[0].url}
                      width={170}
                      height={170}
                      alt=""
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>{i.title}</div>
                    {/* <div className={styles.details}>
                A Modern UI/UX Portfolio website
              </div> */}
                  </div>
                </div>
              ))
          : projects.map((i, k) => (
              <div
                className={styles.card}
                onClick={() => router.push(`/project/${i.id}`)}
              >
                <Image
                  src={i.photos[0].url}
             
                   width={170}
                  height={170}    alt=""
                  className={styles.image}
                />

                <div className={styles.info}>
                  <div className={styles.name}>{i.title}</div>
          
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Portfolio;
