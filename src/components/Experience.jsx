import React from "react";
import { experience } from "../data.js";
import { IconLayers } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal as="h2">
        <IconLayers className="heading-icon" /> Experience
      </Reveal>
      {experience.map((job, i) => (
        <Reveal as="article" key={job.org} delay={i * 90} className="role-card">
          <div className="role-header">
            <div>
              <h3>{job.role}</h3>
              <p className="role-org">
                {job.org} — {job.team} · {job.location}
              </p>
            </div>
            <p className="role-period">{job.period}</p>
          </div>
          <ul className="role-points">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>
      ))}
    </section>
  );
}
