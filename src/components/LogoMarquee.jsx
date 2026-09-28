import React from "react";
import { techLogos } from "./TechLogos.jsx";

export default function LogoMarquee() {
  const items = [...techLogos, ...techLogos];

  return (
    <div className="marquee" aria-label="Technologies I work with">
      <div className="marquee-track">
        {items.map(({ name, Icon, color }, i) => (
          <span className="marquee-item" key={`${name}-${i}`}>
            <Icon style={{ color }} />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
