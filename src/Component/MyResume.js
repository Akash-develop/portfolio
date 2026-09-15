import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import { Hero } from "./Hero/Hero";
import { Experience } from "./Experience/Experience";
import { Education } from "./Education/Education";
import { Skills } from "./Skills/Skills";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import styles from "./App.module.css";
import { getImageUrl } from "./utils";

function MyResume() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "experience", "projects", "skills", "education", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] }
    );
    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  const onNavigate = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div className={styles.shell}>
      {menuOpen && (
        <button
          className={styles.backdrop}
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <Sidebar open={menuOpen} active={active} onNavigate={onNavigate} />
      <div className={styles.main}>
        <header className={styles.mobileBar}>
          <a className={styles.mobileBrand} href="#home">
            <img src={getImageUrl("hero/Akash.png")} alt="" />
            Akash P
          </a>
          <button
            className={styles.menuBtn}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <img
              src={getImageUrl(menuOpen ? "nav/closeIcon.png" : "nav/menuIcon.png")}
              alt=""
            />
          </button>
        </header>
        <Hero />
        <div className={styles.columns}>
          <div className={styles.primary}>
            <Experience />
            <Education />
            <Skills />
          </div>
          <div className={styles.secondary}>
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyResume;
