import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.groups}>
        {skills.map((group) => (
          <div key={group.title} className={styles.group}>
            <h3>{group.title}</h3>
            <ul>
              {group.pills.map((pill) => (
                <li key={pill}>{pill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
