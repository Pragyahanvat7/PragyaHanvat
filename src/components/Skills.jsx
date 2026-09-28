import React from "react";
import { skillGroups } from "../data.js";
import { IconCode } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

const groupColors = ["mint", "gold", "rust", "mint", "gold"];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal as="h2">
        <IconCode className="heading-icon" /> Skills
      </Reveal>
      <div className="skill-grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 80} className="skill-group">
            <p className="skill-label">{group.label}</p>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item} className={`tag-${groupColors[i % groupColors.length]}`}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
