import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../utils";

export const ProjectCard = ({
  project: { title, subtitle, blurb, source, imageSrc },
}) => {
  return (
    <article className={styles.container}>
      <img className={styles.image} src={getImageUrl(imageSrc)} alt="" />
      <div>
        <h3 className={styles.title}>
          {title} <span>{subtitle}</span>
        </h3>
        <p className={styles.blurb}>{blurb}</p>
        {source && (
          <a href={source} target="_blank" rel="noreferrer">
            <img src={getImageUrl("contact/githubIcon.png")} alt="" />
            GitHub →
          </a>
        )}
      </div>
    </article>
  );
};
