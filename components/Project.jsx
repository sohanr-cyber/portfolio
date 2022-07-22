import React from "react";
import styles from "../styles/Project.module.css";
import ImageScroller from "react-image-scroller";
import Image from "next/image";

const Project = ({ project }) => {
  return (
    <div className={styles.wrapper}>
      {project.video ? (
        <>
          {" "}
          <div className={styles.video}>
            <video controls width="90%">
              <source src={project.video.url} type="video/mp4" />
            </video>
          </div>
        </>
      ) : (
        <>
          <Image src={project.photos[0].url} width={600} height={500} alt="" />
        </>
      )}

      <div className={styles.title}>{project.title}</div>
      <div className={styles.description}>{project.description} </div>

      <div className={styles.tags}>
        {project.tags.map((i, k) => (
          <span>{i}</span>
        ))}
      </div>
      {project.git && (
        <>
          {" "}
          <div className={styles.link}>
            github:<span>{project.git}</span>
          </div>
        </>
      )}
      {project.preview && (
        <>
          {" "}
          <div className={styles.link}>
            preview:<span>{project.preview}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
