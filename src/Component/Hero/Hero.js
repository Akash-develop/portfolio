import React from "react";

import styles from "./Hero.module.css";
import Akash from "../../assets/hero/Akash.png";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akash</h1>
        <p className={styles.description}>
          2 years experienced Knowledgeable and skilled software development
          professional offering advanced abilities in wide range of programming
          languages. Quickly understands requirements for new systems and writes
          clean and reusable code. Familiar with testing, debugging and
          correcting problems found in existing software systems, complex
          project management & coordination work very efficiently to deliver
          results.
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
