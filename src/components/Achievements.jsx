import React from "react";
import { achievements } from "../data.js";
import { IconRibbon } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <Reveal as="h2">
        <IconRibbon className="heading-icon" /> Achievements
      </Reveal>
      <ul className="ledger">
        {achievements.map((item, i) => (
          <Reveal as="li" key={item} delay={i * 80}>
            {item}
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
