import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

// EXTRA FEATURE #5 – Scroll-to-Top button
// Appears after the user scrolls 400px down; shows reading progress as a ring.
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollTop > 400);
      setProgress(max > 0 ? Math.min(scrollTop / max, 1) : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      className={`scroll-top ${visible ? 'scroll-top--visible' : ''}`}
      onClick={scrollUp}
      aria-label="Scroll back to top"
      style={{ '--progress': `${progress * 360}deg` }}
      tabIndex={visible ? 0 : -1}
    >
      <span className="scroll-top__inner">
        <FiArrowUp />
      </span>
    </button>
  );
}
