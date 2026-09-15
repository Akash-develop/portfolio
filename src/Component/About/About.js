import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.header}>
        <span className={styles.icon} aria-hidden="true">
          <img src={getImageUrl("about/cursorIcon.png")} alt="" />
        </span>
        <h2 className={styles.title}>Professional Summary</h2>
      </div>
      <div className={styles.body}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="Developer illustration"
        />
        <p className={styles.summary}>
          Software Developer with 4 years of hands-on experience developing
          production web applications and digital assessment products. Specialized
          in React.js, JavaScript, Redux Toolkit, REST API integration, and
          browser-based computer vision using OpenCV. Experienced in building
          scan-based exam workflows, reusable UI components, and
          performance-focused applications, with working knowledge of AWS (EC2,
          S3, IAM), Docker, and Git. Strong focus on clean architecture,
          problem-solving, and delivering production-ready features. Leverages
          Cursor through a self-funded monthly subscription for AI-assisted
          development, improving productivity and helping deliver client projects
          on time.
        </p>
      </div>
    </section>
  );
};
