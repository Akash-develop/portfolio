import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      {history.map((item) => (
        <article key={item.organisation} className={styles.job}>
          <div className={styles.jobHeader}>
            <img
              src={getImageUrl(item.imageSrc)}
              alt={`${item.organisation} logo`}
            />
            <div>
              <h3>{item.role}</h3>
              <p>
                {item.organisation}
                <span> | 4 Years</span>
              </p>
            </div>
          </div>
          {item.projects.map((project) => (
            <div key={project.title} className={styles.project}>
              <h4>
                {project.title}
                <span> | {project.subtitle}</span>
              </h4>
              <ul>
                {project.description.slice(0, 3).map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      ))}
    </section>
  );
};
