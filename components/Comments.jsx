import React, { useState } from "react";
import styles from "../styles/Project.module.css";
import { submitComment } from "../services";
import { useRouter } from "next/router";

const Comment = ({ comments }) => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const resp = await submitComment({
        name,
        email,
        content,
        id: router.query.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.Commentswrapper}>
      <div className={styles.heading}>Comments</div>
      <div className={styles.reviews}>
        {comments?.map((c, k) => (
          <div className={styles.review}>
            <div className={styles.content}>{c.content}</div>
            <div className={styles.email}>{c.email}</div>
            <div className={styles.name}>{c.name} </div>
          </div>
        ))}
      </div>
      <div className={styles.add}>
        <textarea
          className={styles.field}
          placeholder="Please write Some reviews About my Project"
          onChange={(e) => setContent(e.target.value)}
        />
        <div className={styles.btn} onClick={() => handleSubmit()}>
          Submit
        </div>
      </div>
      <div className={styles.title} style={{ textAlign: "center" }}>
        Thank You For Getting in Touch
      </div>
    </div>
  );
};

export default Comment;
