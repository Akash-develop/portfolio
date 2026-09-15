import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="#home">
        <img src={getImageUrl("hero/Akash.png")} alt="" />
        P. Akash
      </a>
      <button
        className={styles.menuBtn}
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <img
          src={getImageUrl(menuOpen ? "nav/closeIcon.png" : "nav/menuIcon.png")}
          alt=""
        />
      </button>
      <ul
        className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <li>
          <a href="#about">Summary</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a className={styles.resume} href="/P_Akash_Resume.pdf" download>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
