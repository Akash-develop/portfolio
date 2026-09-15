import React from "react";
import styles from "./Education.module.css";
import education from "../../data/education.json";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <h3>{education.degree}</h3>
      <p>{education.years}</p>
    </section>
  );
};
