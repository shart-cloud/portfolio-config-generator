import { usePortfolioStore } from '../../../store/portfolioStore';
import { FormField } from '../common/FormField';
import { TextInput } from '../common/TextInput';

export function CtaSection() {
  const { config, updateCtaPrimary, updateCtaSecondary } = usePortfolioStore();

  return (
    <div className="editor-section">
      <h3 className="section-heading">Call to Action</h3>
      <div className="section-fields">
        <div className="cta-group">
          <span className="cta-label">Primary CTA</span>
          <div className="cta-fields">
            <FormField label="Label" htmlFor="cta-primary-label">
              <TextInput
                id="cta-primary-label"
                value={config.ctaPrimary.label}
                onChange={(value) => updateCtaPrimary({ label: value })}
                placeholder="e.g., View Resume"
              />
            </FormField>
            <FormField label="URL" htmlFor="cta-primary-url">
              <TextInput
                id="cta-primary-url"
                value={config.ctaPrimary.url}
                onChange={(value) => updateCtaPrimary({ url: value })}
                placeholder="e.g., /resume.pdf"
              />
            </FormField>
          </div>
        </div>
        <div className="cta-group">
          <span className="cta-label">Secondary CTA</span>
          <div className="cta-fields">
            <FormField label="Label" htmlFor="cta-secondary-label">
              <TextInput
                id="cta-secondary-label"
                value={config.ctaSecondary.label}
                onChange={(value) => updateCtaSecondary({ label: value })}
                placeholder="e.g., Get in Touch"
              />
            </FormField>
            <FormField label="URL" htmlFor="cta-secondary-url">
              <TextInput
                id="cta-secondary-url"
                value={config.ctaSecondary.url}
                onChange={(value) => updateCtaSecondary({ url: value })}
                placeholder="e.g., #contact"
              />
            </FormField>
          </div>
        </div>
      </div>
    </div>
  );
}
