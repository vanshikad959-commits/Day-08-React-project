import SectionHeader from './SectionHeader.jsx';
import FeatureCard from './FeatureCard.jsx';

export default function Features({ items }) {
  return (
    <section id="features" className="section features">
      <div className="container">
        <SectionHeader
          eyebrow="Why Skyloom"
          title="Everything a modern web app needs"
          subtitle="The same reasons we chose React for our clients' migrations."
        />

        <div className="grid grid--3">
          {items.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
