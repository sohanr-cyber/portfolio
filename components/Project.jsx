import React from "react";
import styles from "../styles/Project.module.css";
import ImageScroller from "react-image-scroller";
import Image from "next/image";
import { useRouter } from "next/router";

const Project = ({ project }) => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      {project.video ? (
        <>
          <div className={styles.video}>
            <video controls width="99%">
              <source src={project.video.url} type="video/mp4" />
            </video>
          </div>
        </>
      ) : (
        <>
          <Image src={project.photos[0].url} width={980} height={600} alt="" />
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
            github:
            <span onClick={() => router.push(project.git)}>{project.git}</span>
          </div>
        </>
      )}
      {project.preview && (
        <>
          {" "}
          <div className={styles.link}>
            preview:
            <span onClick={() => router.push(project.preview)}>
              {project.preview}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
