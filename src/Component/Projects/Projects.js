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
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return (
                        <li key={id} className={styles.experiencesUi}>
                          {experience}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
