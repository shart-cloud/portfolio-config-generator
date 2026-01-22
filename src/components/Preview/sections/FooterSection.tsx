import { usePortfolioStore } from '../../../store/portfolioStore';

export function FooterSection() {
  const { config } = usePortfolioStore();

  return (
    <footer className="footer-section">
      {config.footer.text && (
        <p className="footer-text">{config.footer.text}</p>
      )}
      <p className="footer-year">&copy; {config.footer.year}</p>
    </footer>
  );
}
