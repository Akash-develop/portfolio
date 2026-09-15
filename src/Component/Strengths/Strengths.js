import React from "react";
import styles from "./Strengths.module.css";
import { getImageUrl } from "../utils";

const strengths = [
  { label: "Clean Architecture", icon: "about/uiIcon.png" },
  { label: "Problem Solving", icon: "about/cursorIcon.png" },
  { label: "Performance Optimization", icon: "skills/optimization.png" },
  { label: "Team Collaboration", icon: "about/serverIcon.png" },
  { label: "On-time Delivery", icon: "skills/responsivedesign.png" },
];

export const Strengths = () => {
  return (
    <section className={styles.container} id="strengths">
      <div className={styles.header}>
        <span className={styles.icon} aria-hidden="true">
          <img src={getImageUrl("skills/responsivedesign.png")} alt="" />
        </span>
        <h2 className={styles.title}>Key Strengths</h2>
      </div>
      <ul className={styles.list}>
        {strengths.map((item) => (
          <li key={item.label} className={styles.pill}>
            <img
              className={item.icon.includes("optimization") ? styles.invert : ""}
              src={getImageUrl(item.icon)}
              alt=""
            />
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  );
};
