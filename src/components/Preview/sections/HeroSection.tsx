import { usePortfolioStore } from '../../../store/portfolioStore';

export function HeroSection() {
  const { config, avatarPreviewUrl } = usePortfolioStore();

  return (
    <section className="hero-section">
      {avatarPreviewUrl ? (
        <img src={avatarPreviewUrl} alt={config.name} className="hero-avatar" />
      ) : (
        <div className="hero-avatar-placeholder">
          {config.name.charAt(0).toUpperCase()}
        </div>
      )}
      <h1 className="hero-name">{config.name || 'Your Name'}</h1>
      <p className="hero-title">{config.title || 'Your Title'}</p>
      <p className="hero-tagline">{config.tagline || 'Your tagline goes here'}</p>
      <div className="hero-ctas">
        {config.ctaPrimary.label && (
          <a href={config.ctaPrimary.url} className="cta-primary">
            {config.ctaPrimary.label}
          </a>
        )}
        {config.ctaSecondary.label && (
          <a href={config.ctaSecondary.url} className="cta-secondary">
            {config.ctaSecondary.label}
          </a>
        )}
      </div>
    </section>
  );
}
