import { FiChevronDown, FiCheck } from 'react-icons/fi';

// Reusable card – receives all its data and behaviour through props.
export default function ServiceCard({ service, isExpanded, onToggle }) {
  const { id, icon: Icon, title, summary, details, price, popular, category } = service;
  const detailsId = `service-details-${id}`;

  return (
    <article className={`card service-card ${isExpanded ? 'service-card--open' : ''}`}>
      {/* Conditional rendering: badge only for popular services */}
      {popular && <span className="badge">Popular</span>}

      <div className="card__icon">
        <Icon />
      </div>
      <span className="service-card__category">{category}</span>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{summary}</p>

      <div id={detailsId} className="collapse" data-open={isExpanded}>
        <div className="collapse__inner">
          <ul className="service-card__details">
            {details.map((item) => (
              <li key={item}>
                <FiCheck /> {item}
              </li>
            ))}
          </ul>
          <p className="service-card__price">{price}</p>
        </div>
      </div>

      <button
        type="button"
        className="link-btn"
        onClick={() => onToggle(id)}
        aria-expanded={isExpanded}
        aria-controls={detailsId}
      >
        {isExpanded ? 'Hide details' : 'View details'}
        <FiChevronDown className={`chevron ${isExpanded ? 'chevron--up' : ''}`} />
      </button>
    </article>
  );
}
