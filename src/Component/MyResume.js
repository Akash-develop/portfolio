import React from 'react';
import { About } from './About/About';
import { Navbar } from './Navbar/Navbar';
import { Experience } from './Experience/Experience';
import { Hero } from './Hero/Hero';
import { Projects } from './Projects/Projects';
import { Contact } from './Contact/Contact';
import styles from "./App.module.css";

function MyResume() {
  return (
<div className={styles.App}>
<Navbar />
<Hero />
<About />
<Experience />
<Projects />
<Contact />
</div>
  );
}

export default MyResume ;
