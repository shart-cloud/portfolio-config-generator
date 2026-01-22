import { usePortfolioStore } from '../../../store/portfolioStore';

export function ContactSection() {
  const { config } = usePortfolioStore();

  const validContacts = config.contacts.filter((c) => c.platform.trim());

  if (validContacts.length === 0) {
    return null;
  }

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contacts-grid">
        {validContacts.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            className="contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-platform">{contact.platform}</span>
            <span className="contact-label">{contact.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
