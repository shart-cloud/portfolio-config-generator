import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { HighlightsSection } from './sections/HighlightsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { FooterSection } from './sections/FooterSection';
import './preview.css';

export function PortfolioPreview() {
  return (
    <div className="portfolio-preview">
      <div className="preview-container">
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}
