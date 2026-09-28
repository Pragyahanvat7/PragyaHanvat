import React from "react";
import { profile, impactStats } from "../data.js";
import HeroGraphic from "./HeroGraphic.jsx";
import StatCounter from "./StatCounter.jsx";
import LogoMarquee from "./LogoMarquee.jsx";

export default function Hero() {
  return (
    <section id="profile" className="section hero-section">
      <div className="hero">
        <div className="hero-text">
          <p className="hero-kicker reveal reveal-1">Software Engineer · Fintech &amp; Payments</p>
          <h1 className="reveal reveal-1">
            Secure payment systems, built to keep processing.
          </h1>
          <p className="hero-summary reveal reveal-2">{profile.summary}</p>
          <p className="hero-meta reveal reveal-3">
            Based in {profile.location} — {profile.phone}
          </p>
        </div>
        <div className="hero-art reveal reveal-2" aria-hidden="true">
          <HeroGraphic />
        </div>
      </div>

      <div className="stat-grid reveal reveal-3">
        {impactStats.map((stat, i) => (
          <StatCounter key={stat.label} value={stat.value} label={stat.label} delay={i * 100} />
        ))}
      </div>

      <div className="reveal reveal-3">
        <LogoMarquee />
      </div>
    </section>
  );
}
