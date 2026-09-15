import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { ResumeScene } from "./ResumeScene";
import { getImageUrl } from "../utils";

const stack = [
  { label: "React", src: "skills/react.png" },
  { label: "Node.js", src: "skills/node.png" },
  { label: "MongoDB", src: "skills/mongodb.png" },
  { label: "Redux", src: "skills/redux.svg" },
  { label: "JavaScript" },
];

export const Hero = () => {
  const [showScene, setShowScene] = useState(
    () => typeof window !== "undefined" && window.innerWidth > 768
  );

  useEffect(() => {
    const onResize = () => setShowScene(window.innerWidth > 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section className={styles.container} id="home">
      <div className={styles.profile}>
        <div className={styles.identity}>
          <img
            className={styles.portrait}
            src={getImageUrl("hero/Akash.png")}
            alt="Akash P"
          />
          <div>
            <h1 className={styles.title}>Akash P</h1>
            <p className={styles.role}>Software Developer</p>
          </div>
        </div>
        <p className={styles.tagline}>
          Building fast, scalable and user-friendly web applications with
          modern technologies.
        </p>
        <ul className={styles.stack}>
          {stack.map((item) => (
            <li key={item.label}>
              {item.src && <img src={getImageUrl(item.src)} alt="" />}
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      {showScene && (
        <div className={styles.visual}>
          <ResumeScene />
        </div>
      )}
    </section>
  );
};
