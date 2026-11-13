// Reusable feature card – pure presentational component driven by props.
export default function FeatureCard({ icon: Icon, title, text, index }) {
  return (
    <article className="card feature-card" style={{ '--i': index }}>
      <div className="card__icon card__icon--soft">
        <Icon />
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
    </article>
  );
}
