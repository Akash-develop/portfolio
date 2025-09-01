import React from "react";

import styles from "./Projects.module.css";
import history from "../../data/history.json";

const getImageUrl = (imageSrc) => {
  try {
    return require(`../../assets/${imageSrc}`);
  } catch (error) {
    return ""; // Fallback in case of an error
  }
};

export const Projects = () => {
  return (
    <section className={styles.container} id="Experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.projects}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <div key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  <div className={styles.historyItemFlex}>
                    <div>
                      <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                      <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    </div>
                    <img
                      src={getImageUrl(historyItem.imageSrc)}
                      alt={`${historyItem.organisation} Logo`}
                      className={styles.ExperienceIcon}
                    />
                  </div>

                  {/* Experiences inside each role */}
                  {historyItem.experiences.map((exp, idx) => (
                    <div key={idx} className={styles.experienceBlock}>
                      <h4>{`${exp.title} | ${exp.organisation}`}</h4>
                      <p>{`${exp.startDate} - ${exp.endDate}`}</p>
                      <ul>
                        {exp.description.map((desc, i) => (
                          <li key={i} className={styles.experiencesUi}>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
