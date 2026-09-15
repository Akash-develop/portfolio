import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../utils";

export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.header}>
        <h2>Contact</h2>
        <a className={styles.share} href="/P_Akash_Resume.pdf" download aria-label="Download resume">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 4v10M8 10l4 4 4-4M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <ul className={styles.links}>
        <li>
          <img src={getImageUrl("contact/emailIcon.png")} alt="" />
          <a href="mailto:akash.p02.dev@gmail.com">akash.p02.dev@gmail.com</a>
        </li>
        <li>
          <span className={styles.pin}>☎</span>
          <a href="tel:+916374142625">+91 6374142625</a>
        </li>
        <li>
          <span className={styles.pin}>📍</span>
          Chennai, India
        </li>
        <li>
          <img src={getImageUrl("contact/githubIcon.png")} alt="" />
          <a href="https://github.com/Akash-develop" target="_blank" rel="noreferrer">
            github.com/Akash-develop
          </a>
        </li>
        <li>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
          <a href="https://www.linkedin.com/in/akash-p-762381325" target="_blank" rel="noreferrer">
            linkedin.com/in/akash-p
          </a>
        </li>
      </ul>
    </section>
  );
};
