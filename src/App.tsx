import { useEffect } from 'react';
import { AppShell } from './components/Layout/AppShell';
import { ConfigForm } from './components/Editor/ConfigForm';
import { PortfolioPreview } from './components/Preview/PortfolioPreview';
import { usePortfolioStore } from './store/portfolioStore';
import { applyTheme } from './themes/definitions';

const isProductionMode = import.meta.env.VITE_PORTFOLIO_MODE === 'production';

function App() {
  const { activeTheme } = usePortfolioStore();

  useEffect(() => {
    applyTheme(activeTheme);
  }, [activeTheme]);

  if (isProductionMode) {
    return <PortfolioPreview />;
  }

  return (
    <AppShell
      editor={<ConfigForm />}
      preview={<PortfolioPreview />}
    />
  );
}

export default App;
