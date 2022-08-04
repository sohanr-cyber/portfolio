import React, { useEffect, useState } from "react";
import styles from "../styles/Portfolio.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

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
        {[...teches.teches].map((tech) => (
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
      <motion.div
        // initial={{ opacity: 0.1, x: 100 }}
        // whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        className={`${styles.flex} ${styles.projects}`}
      >
        {AllProjects.map((i, k) => (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0.1, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1 },
              }}
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
            </motion.div>
          </AnimatePresence>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
