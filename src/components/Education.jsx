import React from "react";
import { education } from "../data.js";
import { IconCap } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

export default function Education() {
  return (
    <section id="education" className="section">
      <Reveal as="h2">
        <IconCap className="heading-icon" /> Education
      </Reveal>
      <ul className="education-list">
        {education.map((item, i) => (
          <Reveal as="li" key={item.degree} delay={i * 90}>
            <div className="timeline-when">{item.period}</div>
            <div>
              <h3>{item.degree}</h3>
              <p className="timeline-org">{item.school}</p>
              <p className="education-detail">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
