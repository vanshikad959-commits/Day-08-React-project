import { useState, useEffect } from 'react';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

// EXTRA FEATURE #1 – Animated Hero
// Floating gradient blobs (CSS keyframes) + a word that rotates every 2.2 s (useState + setInterval).
export default function Hero({
  eyebrow,
  titleStart,
  rotatingWords,
  titleEnd,
  subtitle,
  primaryCta,
  secondaryCta,
}) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(timer); // cleanup when the component unmounts
  }, [rotatingWords.length]);

  return (
    <section id="home" className="hero">
      <div className="hero__blob hero__blob--one" aria-hidden="true" />
      <div className="hero__blob hero__blob--two" aria-hidden="true" />
      <div className="hero__blob hero__blob--three" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="pill fade-up">
            <span className="pill__dot" /> {eyebrow}
          </span>

          <h1 className="hero__title fade-up delay-1">
            {titleStart}{' '}
            {/* key change re-mounts the span so the CSS animation replays */}
            <span key={wordIndex} className="hero__word gradient-text">
              {rotatingWords[wordIndex]}
            </span>
            {titleEnd}
          </h1>

          <p className="hero__subtitle fade-up delay-2">{subtitle}</p>

          <div className="hero__ctas fade-up delay-3">
            <a href={`#${primaryCta.target}`} className="btn btn--primary">
              {primaryCta.label} <FiArrowRight />
            </a>
            <a href={`#${secondaryCta.target}`} className="btn btn--ghost">
              {secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hero__visual fade-up delay-2" aria-hidden="true">
          <div className="mock-window">
            <div className="mock-window__bar">
              <span /> <span /> <span />
            </div>
            <pre className="mock-window__code">
              <code>
                <span className="tok-key">function</span> <span className="tok-fn">App</span>() {'{'}
                {'\n'}  <span className="tok-key">const</span> [theme, setTheme] ={' '}
                <span className="tok-fn">useState</span>(<span className="tok-str">'light'</span>);
                {'\n'}  <span className="tok-key">return</span> (
                {'\n'}    &lt;<span className="tok-tag">Navbar</span> <span className="tok-attr">theme</span>={'{'}theme{'}'} /&gt;
                {'\n'}    &lt;<span className="tok-tag">Hero</span> /&gt;
                {'\n'}    &lt;<span className="tok-tag">Services</span> <span className="tok-attr">items</span>={'{'}services{'}'} /&gt;
                {'\n'}  );
                {'\n'}{'}'}
              </code>
            </pre>
          </div>
          <div className="float-card float-card--top">
            <FiCheckCircle /> 98 Lighthouse score
          </div>
          <div className="float-card float-card--bottom">
            <strong>6</strong> reusable components
          </div>
        </div>
      </div>
    </section>
  );
}
