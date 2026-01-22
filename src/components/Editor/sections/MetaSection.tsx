import { usePortfolioStore } from '../../../store/portfolioStore';
import { FormField } from '../common/FormField';
import { TextInput } from '../common/TextInput';
import { TextArea } from '../common/TextArea';

export function MetaSection() {
  const { config, updateMeta, updateFooter } = usePortfolioStore();

  return (
    <div className="editor-section">
      <h3 className="section-heading">SEO & Footer</h3>
      <div className="section-fields">
        <FormField label="Page Title" htmlFor="meta-title" hint="For browser tab and search results">
          <TextInput
            id="meta-title"
            value={config.meta.title}
            onChange={(value) => updateMeta({ title: value })}
            placeholder="Your Name - Your Title"
          />
        </FormField>
        <FormField label="Meta Description" htmlFor="meta-description" hint="For search engine results">
          <TextArea
            id="meta-description"
            value={config.meta.description}
            onChange={(value) => updateMeta({ description: value })}
            placeholder="A brief description for search engines..."
            rows={2}
          />
        </FormField>
        <FormField label="Footer Text" htmlFor="footer-text">
          <TextInput
            id="footer-text"
            value={config.footer.text}
            onChange={(value) => updateFooter({ text: value })}
            placeholder="e.g., Built with React & TypeScript"
          />
        </FormField>
        <FormField label="Footer Year" htmlFor="footer-year">
          <TextInput
            id="footer-year"
            value={String(config.footer.year)}
            onChange={(value) => updateFooter({ year: parseInt(value) || new Date().getFullYear() })}
            placeholder="2024"
          />
        </FormField>
      </div>
    </div>
  );
}
