import { usePortfolioStore } from '../../../store/portfolioStore';

export function HighlightsSection() {
  const { config } = usePortfolioStore();

  const validHighlights = config.highlights.filter((h) => h.trim());

  if (validHighlights.length === 0) {
    return null;
  }

  return (
    <section className="highlights-section">
      <h2 className="section-title">Highlights</h2>
      <div className="highlights-grid">
        {validHighlights.map((highlight, index) => (
          <div key={index} className="highlight-item">
            {highlight}
          </div>
        ))}
      </div>
    </section>
  );
}
