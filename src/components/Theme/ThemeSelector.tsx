import { ThemeName } from '../../types/portfolio';
import { themes } from '../../themes/definitions';
import { usePortfolioStore } from '../../store/portfolioStore';
import './ThemeSelector.css';

export function ThemeSelector() {
  const { activeTheme, setTheme } = usePortfolioStore();

  return (
    <div className="theme-selector">
      <label htmlFor="theme-select">Theme:</label>
      <select
        id="theme-select"
        value={activeTheme}
        onChange={(e) => setTheme(e.target.value as ThemeName)}
      >
        {Object.values(themes).map((theme) => (
          <option key={theme.name} value={theme.name}>
            {theme.label}
          </option>
        ))}
      </select>
    </div>
  );
}
