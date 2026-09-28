import React from "react";
import Navbar from "./components/Navbar.jsx";
import Backdrop from "./components/Backdrop.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import BackToTop from "./components/BackToTop.jsx";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="content">
        <Backdrop />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}
