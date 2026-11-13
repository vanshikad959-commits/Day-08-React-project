import { useEffect, useRef } from 'react';
import { FiX, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';

// EXTRA FEATURE #4 – Team Modal
// Closes on the X button, the Escape key, or a click on the dark overlay.
export default function TeamModal({ member, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden'; // lock background scroll
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const { name, role, initials, color, bio, skills, socials } = member;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="icon-btn modal__close" onClick={onClose} aria-label="Close profile">
          <FiX />
        </button>

        <div className="avatar avatar--lg" style={{ background: color }}>
          {initials}
        </div>
        <h3 id="modal-title" className="modal__name">{name}</h3>
        <p className="team-card__role">{role}</p>
        <p className="modal__bio">{bio}</p>

        <h4 className="modal__subhead">Skills</h4>
        <ul className="chips chips--center">
          {skills.map((skill) => (
            <li key={skill} className="chip">
              {skill}
            </li>
          ))}
        </ul>

        <div className="socials socials--center">
          <a href={socials.linkedin} aria-label={`${name} on LinkedIn`}>
            <FiLinkedin />
          </a>
          <a href={socials.twitter} aria-label={`${name} on Twitter`}>
            <FiTwitter />
          </a>
          <a href={socials.github} aria-label={`${name} on GitHub`}>
            <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
