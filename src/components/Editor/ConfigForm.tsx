import { BasicInfoSection } from './sections/BasicInfoSection';
import { BioSection } from './sections/BioSection';
import { AvatarUpload } from './sections/AvatarUpload';
import { CtaSection } from './sections/CtaSection';
import { MetaSection } from './sections/MetaSection';
import { HighlightsSection } from './sections/HighlightsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import './ConfigForm.css';

export function ConfigForm() {
  return (
    <div className="config-form">
      <BasicInfoSection />
      <AvatarUpload />
      <BioSection />
      <CtaSection />
      <HighlightsSection />
      <ProjectsSection />
      <ContactSection />
      <MetaSection />
    </div>
  );
}
