import React from "react";
import styles from "./Sidebar.module.css";
import { getImageUrl } from "../utils";

const items = [
  { id: "home", label: "Home", icon: "home" },
  { id: "experience", label: "Experience", icon: "work" },
  { id: "projects", label: "Projects", icon: "grid" },
  { id: "skills", label: "Skills", icon: "code" },
  { id: "education", label: "Education", icon: "edu" },
  { id: "contact", label: "Contact", icon: "mail" },
];

const icons = {
  home: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  work: (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M8 8 4 12l4 4M16 8l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  edu: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="m3 10 9-5 9 5-9 5-9-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M7 12.2V16c2.2 1.5 7.8 1.5 10 0v-3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
};

export const Sidebar = ({ open, active, onNavigate }) => {
  return (
    <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
      <a className={styles.brand} href="#home" onClick={() => onNavigate("home")}>
        <img src={getImageUrl("hero/Akash.png")} alt="" />
        <span>Akash P</span>
      </a>
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a
                className={active === item.id ? styles.active : ""}
                href={`#${item.id}`}
                onClick={() => onNavigate(item.id)}
              >
                {icons[item.icon]}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a className={styles.cta} href="#contact" onClick={() => onNavigate("contact")}>
        <span>
          Let’s build
          <br />
          something great!
        </span>
        <span className={styles.arrow}>→</span>
        <div className={styles.globe} aria-hidden="true" />
      </a>
    </aside>
  );
};
