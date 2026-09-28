import React, { useEffect, useState } from "react";
import { profile } from "../data.js";
import { IconDownload } from "./Icons.jsx";

const sections = [
  { id: "profile", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close the mobile menu whenever the viewport grows back to desktop size.
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 860) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="navbar">
      <a href="#profile" className="navbar-brand" onClick={() => setMenuOpen(false)}>
        {profile.name}
      </a>

      <nav className="navbar-links" aria-label="Section navigation">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={active === s.id ? "is-active" : ""}
          >
            {s.label}
          </a>
        ))}
      </nav>

      <a className="navbar-resume" href="/resume.pdf" download>
        <IconDownload />
        Resume
      </a>

      <button
        type="button"
        className={`navbar-toggle ${menuOpen ? "is-open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`navbar-mobile ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Section navigation (mobile)">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? "is-active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <a className="navbar-resume navbar-resume-mobile" href="/resume.pdf" download onClick={() => setMenuOpen(false)}>
          <IconDownload />
          Download Resume
        </a>
      </div>
    </header>
  );
}
