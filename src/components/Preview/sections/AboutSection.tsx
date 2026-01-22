import { usePortfolioStore } from '../../../store/portfolioStore';

export function AboutSection() {
  const { config } = usePortfolioStore();

  if (config.bio.length === 0 || (config.bio.length === 1 && !config.bio[0])) {
    return null;
  }

  return (
    <section className="about-section">
      <h2 className="section-title">About</h2>
      <div className="bio-paragraphs">
        {config.bio.map((paragraph, index) => (
          paragraph && <p key={index} className="bio-paragraph">{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
