import { ThemeSelector } from '../Theme/ThemeSelector';
import { usePortfolioStore } from '../../store/portfolioStore';
import { exportPortfolio } from '../../utils/export';
import './Header.css';

export function Header() {
  const { config, avatarFile, activeTheme } = usePortfolioStore();

  const handleExport = async () => {
    await exportPortfolio(config, avatarFile, activeTheme);
  };

  return (
    <header className="app-header">
      <div className="header-title">
        <h1>Portfolio Config Generator</h1>
        <span className="header-subtitle">DevOps Edition</span>
      </div>
      <div className="header-actions">
        <ThemeSelector />
        <button className="export-btn" onClick={handleExport}>
          Export ZIP
        </button>
      </div>
    </header>
  );
}
