import React from "react";

import styles from "./Hero.module.css";
import Akash from "../../assets/hero/Akash.png";
export const Hero = () => {

  const about = `Hi, I’m Akash from Ayanavaram, Chennai.
As a software developer I have 3 years of hands-on experience in React.js, specializing in building reusable, readable, and optimized web applications for better performance.

I’ve also worked with LLMs (Large Language Models) and API integrations to develop AI-powered features. Recently, I implemented RAG (Retrieval-Augmented Generation) to enhance data interaction and feed dynamic information into AI systems for smarter responses.

At DigiVal IT Solutions, I improved application performance by 30% and reduced database query execution time by 40% through thoughtful design and optimization. My background in CAD design has honed my analytical and problem-solving skills, enabling me to deliver innovative solutions for complex web projects.

I'm always eager to explore new technologies and best practices—especially in ReactJS, DevOps, and cloud-native development (Docker, Kubernetes). Let's connect if you want to build robust, user-centric digital products or discuss the latest in frontend engineering!`
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akash</h1>
        <p className={styles.description}>
          {about}
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
