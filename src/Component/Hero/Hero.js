import React from "react";

import styles from "./Hero.module.css";
import Akash from "../../assets/hero/Akash.png";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akash</h1>
        <p className={styles.description}>
         Experienced React and Full-Stack Developer with 3.5+ years of combined technical experience. Developed scalable features using JavaScript (ES6+), React.js, Redux, and RESTful APIs, improving application performance by 30% and reducing database query execution time by 40%. Strong analytical background from CAD design experience, enabling innovative solutions for complex web applications and responsive UI development.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={Akash} alt="plus" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
