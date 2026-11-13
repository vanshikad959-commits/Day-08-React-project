import { useState } from 'react';
import SectionHeader from './SectionHeader.jsx';
import ServiceCard from './ServiceCard.jsx';

export default function Services({ items, categories }) {
  // STATE FEATURE #3 – Service Details Toggle (only one card open at a time)
  const [expandedId, setExpandedId] = useState(null);
  // Bonus state: category filter tabs
  const [activeCategory, setActiveCategory] = useState('All');

  const handleToggle = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  const handleCategory = (category) => {
    setActiveCategory(category);
    setExpandedId(null);
  };

  const visibleServices =
    activeCategory === 'All' ? items : items.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeader
          eyebrow="What We Do"
          title="Services built for growth"
          subtitle="From the first wireframe to production cloud infrastructure — pick what you need."
        />

        <div className="tabs" role="tablist" aria-label="Filter services">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`tab ${activeCategory === category ? 'tab--active' : ''}`}
              onClick={() => handleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {visibleServices.length > 0 ? (
          <div className="grid grid--3">
            {visibleServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isExpanded={expandedId === service.id}
                onToggle={handleToggle}
              />
            ))}
          </div>
        ) : (
          <p className="empty-state">No services in this category yet.</p>
        )}
      </div>
    </section>
  );
}
