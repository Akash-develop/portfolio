import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
const getImageUrl = (imageSrc) => {
  
  try {
    return require(`../../assets/${imageSrc}`);
  } catch (error) {
    return ""; // Fallback in case of an error
  }
};

export const Experience = () => {

  return (
    <section className={styles.container} id="Skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
   
      </div>
    </section>
  );
};
