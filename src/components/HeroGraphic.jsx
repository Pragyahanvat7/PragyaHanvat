import React from "react";

export default function HeroGraphic() {
  return (
    <svg
      className="hero-graphic"
      viewBox="0 0 340 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of an upward transaction trend line"
    >
      <g stroke="#223029" strokeWidth="1">
        <line x1="20" y1="30" x2="20" y2="190" />
        <line x1="20" y1="190" x2="320" y2="190" />
      </g>

      <path
        className="hg-area"
        d="M20 170 L80 150 L140 160 L200 100 L260 70 L320 40 L320 190 L20 190 Z"
        fill="url(#hgGradient)"
      />

      <path
        className="hg-trend"
        d="M20 170 L80 150 L140 160 L200 100 L260 70 L320 40"
        fill="none"
        stroke="#35C28F"
        strokeWidth="3"
      />

      <g className="hg-points">
        <circle className="hg-point" cx="20" cy="170" r="4" fill="#35C28F" />
        <circle className="hg-point" cx="80" cy="150" r="4" fill="#E4B363" />
        <circle className="hg-point" cx="140" cy="160" r="4" fill="#35C28F" />
        <circle className="hg-point" cx="200" cy="100" r="4" fill="#D96C4F" />
        <circle className="hg-point" cx="260" cy="70" r="4" fill="#E4B363" />
        <circle className="hg-point" cx="320" cy="40" r="5" fill="#35C28F" />
      </g>

      <defs>
        <linearGradient id="hgGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#35C28F" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#35C28F" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
