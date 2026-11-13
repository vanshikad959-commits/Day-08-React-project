// Reusable contact info card. Renders a link only when an href is provided.
export default function ContactInfoCard({ icon: Icon, label, value, href }) {
  return (
    <div className="contact-info-card">
      <div className="card__icon card__icon--sm">
        <Icon />
      </div>
      <div>
        <p className="contact-info-card__label">{label}</p>
        {href ? (
          <a href={href} className="contact-info-card__value">
            {value}
          </a>
        ) : (
          <p className="contact-info-card__value">{value}</p>
        )}
      </div>
    </div>
  );
}
