import { useState, useEffect, useRef } from 'react';

// One animated number. Counts from 0 to `value` once `start` becomes true.
function StatCounter({ value, suffix, label, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1600; // ms
    const startTime = performance.now();
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return (
    <div className="stat">
      <span className="stat__value">
        {count}
        {suffix}
      </span>
      <span className="stat__label">{label}</span>
    </div>
  );
}

// EXTRA FEATURE #2 – Dynamic Stats Counter
// Counters start only when the section scrolls into view (IntersectionObserver).
export default function Stats({ items }) {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={sectionRef} aria-label="Company statistics">
      <div className="container stats__grid">
        {items.map((stat) => (
          <StatCounter key={stat.id} {...stat} start={visible} />
        ))}
      </div>
    </section>
  );
}
