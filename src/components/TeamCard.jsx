import { FiArrowUpRight } from 'react-icons/fi';

// Reusable team member card. Clicking it asks the parent to open the modal.
export default function TeamCard({ member, onSelect }) {
  const { name, role, initials, color, skills } = member;

  return (
    <article className="card team-card">
      <button
        type="button"
        className="team-card__button"
        onClick={() => onSelect(member)}
        aria-label={`View profile of ${name}`}
      >
        <div className="avatar" style={{ background: color }}>
          {initials}
        </div>
        <h3 className="card__title">{name}</h3>
        <p className="team-card__role">{role}</p>
        <ul className="chips">
          {skills.slice(0, 2).map((skill) => (
            <li key={skill} className="chip">
              {skill}
            </li>
          ))}
        </ul>
        <span className="team-card__more">
          View profile <FiArrowUpRight />
        </span>
      </button>
    </article>
  );
}
