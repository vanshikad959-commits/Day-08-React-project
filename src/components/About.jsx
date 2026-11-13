import { FiCheck, FiAward, FiTarget, FiUsers } from 'react-icons/fi';
import SectionHeader from './SectionHeader.jsx';

export default function About({ title, description, points, highlight }) {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__visual">
          <div className="about__tile about__tile--main">
            <span className="about__big">{highlight.value}</span>
            <span>{highlight.label}</span>
          </div>
          <div className="about__tile">
            <FiTarget />
            <span>Mission-driven</span>
          </div>
          <div className="about__tile">
            <FiUsers />
            <span>Client-first</span>
          </div>
          <div className="about__tile about__tile--wide">
            <FiAward />
            <span>Quality code, reviewed on every pull request</span>
          </div>
        </div>

        <div className="about__content">
          <SectionHeader eyebrow="About Us" title={title} align="left" />
          <p className="about__text">{description}</p>
          <ul className="check-list">
            {points.map((point) => (
              <li key={point}>
                <span className="check-list__icon">
                  <FiCheck />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
