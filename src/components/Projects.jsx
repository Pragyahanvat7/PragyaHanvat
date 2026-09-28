import React from "react";
import { projects } from "../data.js";
import { IconChart } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal as="h2">
        <IconChart className="heading-icon" /> Projects
      </Reveal>
      <div className="project-list">
        {projects.map((project, i) => (
          <Reveal as="article" key={project.name} delay={i * 90} className="project-row">
            <div className="project-heading">
              <h3>{project.name}</h3>
              <p className="project-org">{project.year}</p>
            </div>
            <div className="project-detail">
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="project-stack">
                {project.stack.map((tech, j) => (
                  <code key={tech} className={`stack-tag stack-tag-${j % 3}`}>
                    {tech}
                  </code>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
