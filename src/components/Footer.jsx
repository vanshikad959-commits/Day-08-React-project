export default function Footer({ company, columns, socials }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="brand">
            <span className="brand__logo" aria-hidden="true">S</span>
            <span className="brand__name">{company.name}</span>
          </a>
          <p>{company.tagline}.</p>
          <div className="socials">
            {socials.map(({ id, icon: Icon, label, href }) => (
              <a key={id} href={href} aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="footer__col">
            <h4>{column.title}</h4>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={`#${link.target}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__col">
          <h4>Get in touch</h4>
          <ul>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>{company.phone}</li>
            <li>{company.address}</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {company.name}. All rights reserved.
        </p>
        <p>Built with React + Vite for the ApexLark FSD Internship – Day 8</p>
      </div>
    </footer>
  );
}
