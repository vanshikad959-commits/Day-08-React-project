import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import SectionHeader from './SectionHeader.jsx';

// EXTRA FEATURE #3 – FAQ Accordion (one question open at a time)
export default function FAQ({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section id="faq" className="section faq">
      <div className="container container--narrow">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know before starting a project with us."
        />

        <div className="accordion">
          {items.map(({ id, question, answer }) => {
            const isOpen = openId === id;
            return (
              <div key={id} className={`accordion__item ${isOpen ? 'accordion__item--open' : ''}`}>
                <h3>
                  <button
                    type="button"
                    className="accordion__trigger"
                    onClick={() => toggle(id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${id}`}
                    id={`faq-trigger-${id}`}
                  >
                    <span>{question}</span>
                    <FiPlus className="accordion__icon" />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${id}`}
                  className="collapse"
                  data-open={isOpen}
                >
                  <div className="collapse__inner">
                    <p className="accordion__answer">{answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
