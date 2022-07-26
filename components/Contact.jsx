import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import { motion } from "framer-motion";

import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendMail = async () => {
    if (name == "" || email == "" || message == "") {
      return;
    }
    try {
      const res = await axios.post("/api/mail", {
        name,
        email,
        message,
      });

      res.status = 200
        ? setStatus("Email Send Successfully")
        : setStatus("Failed to Send Email");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.1, y: 10 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      className={styles.wrapper}
      id="Contact"
    >
      <h1 className={styles.heading}>Take a Coffe & Chat With Me</h1>
      <div className={styles.phone}>
        <div className={styles.logo}>
          <Image src="/assets/mobile.png" width="35px" height="35px" alt="" />
        </div>
        <div className={styles.number}>+8801744329811</div>
      </div>
      <div className={styles.email}>
        <div className={styles.logo}>
          <Image src="/assets/email.png" width="35px" height="35px" alt="" />
        </div>
        <div className={styles.number}>sohanur25800@gmail.com</div>
      </div>

      {status ? (
        <div className={styles.heading} style={{ textAlign: "center" }}>
          Thank You For Getting in Touch
        </div>
      ) : (
        <div className={styles.formContainer}>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className={styles.field}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={styles.field}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Your Message"
              className={styles.field}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            {status && <div>{status}</div>}

            <div className={styles.btn} onClick={(e) => sendMail()}>
              Send Message
            </div>
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default Contact;
