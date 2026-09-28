import React, { useEffect, useRef, useState } from "react";

// Pulls the leading integer out of a label like "1000+" or "50%" so we can
// animate up to it, then re-appends whatever suffix (+, %, etc.) was there.
function parseValue(raw) {
  const match = raw.match(/^([\d,]+)(.*)$/);
  if (!match) return { target: 0, suffix: raw };
  return { target: Number(match[1].replace(/,/g, "")), suffix: match[2] };
}

export default function StatCounter({ value, label, delay = 0 }) {
  const { target, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const start = performance.now();

          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="stat-card" style={{ transitionDelay: `${delay}ms` }}>
      <p className="stat-value">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="stat-label">{label}</p>
    </div>
  );
}
