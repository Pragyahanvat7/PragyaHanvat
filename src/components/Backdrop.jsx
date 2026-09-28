import React from "react";

// Purely decorative, ambient background texture — aria-hidden so screen
// readers skip it entirely.
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop-glow backdrop-glow-a" />
      <div className="backdrop-glow backdrop-glow-b" />
      <svg className="backdrop-grid" width="100%" height="100%">
        <defs>
          <pattern id="dotgrid" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid)" />
      </svg>
    </div>
  );
}
