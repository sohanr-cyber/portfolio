import React, { useEffect, useState } from "react";
import styles from "../styles/Portfolio.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Portfolio = ({ projects, teches }) => {
  const [currentTech, setCurrentTech] = useState("All");
  const router = useRouter();
  const [AllProjects, setAllProjects] = useState([]);

  useEffect(() => {
    let projectslist = [];
    projects.forEach((item) => {
      projectslist.push({
        ...item.node,
        tech: item.node.tech.map((i) => i.name),
      });
    });
    setAllProjects(projectslist);
  }, []);

  const filter = (tech) => {
    let projectslist = [];
    projects.forEach((item) => {
      projectslist.push({
        ...item.node,
        tech: item.node.tech.map((i) => i.name),
      });
    });
    setAllProjects(projectslist.filter((p) => p.tech.includes(tech.name)));
  };

  return (
    <div className={styles.wrapper} id="Portfolio">
      {/* <div className={styles.container}> */}
      <div className={styles.heading}>
        My Creative <span>Portfolio</span> Section
      </div>

      <div className={styles.flex}>
        {[...teches.teches].reverse().map((tech) => (
          <div
            className={styles.item}
            onClick={() => {
              setCurrentTech(tech.name);
              filter(tech);
            }}
            style={{
              color: `${currentTech == tech.name ? "white" : ""}`,
            }}
          >
            {tech.name}
          </div>
        ))}
      </div>
      <div className={`${styles.flex} ${styles.projects}`}>
        {AllProjects.map((i, k) => (
          <div
            className={styles.card}
            onClick={() => router.push(`/project/${i.id}`)}
          >
            <Image
              src={i.photos[0].url}
              width={170}
              height={170}
              alt=""
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
