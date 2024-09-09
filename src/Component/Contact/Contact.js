import React from "react";

import styles from "./Contact.module.css";

const getImageUrl = (imageSrc) => {
  try {
    return require(`../../assets/${imageSrc}`);
  } catch (error) {
    return ""; // Fallback in case of an error
  }
};
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="https://akash.p02.dev@gmail.com">akash.p02.dev@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/akash-p-762381325">linkedin.com/akash-p</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/akash-p</a>
        </li>
      </ul>
    </footer>
  );
};
