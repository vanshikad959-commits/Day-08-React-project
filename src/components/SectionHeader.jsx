// Reusable heading block used by every section.
export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <header className={`section-header section-header--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  );
}
