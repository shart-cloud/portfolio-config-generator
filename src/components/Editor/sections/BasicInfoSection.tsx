import { usePortfolioStore } from '../../../store/portfolioStore';
import { FormField } from '../common/FormField';
import { TextInput } from '../common/TextInput';

export function BasicInfoSection() {
  const { config, updateConfig } = usePortfolioStore();

  return (
    <div className="editor-section">
      <h3 className="section-heading">Basic Info</h3>
      <div className="section-fields">
        <FormField label="Name" htmlFor="name">
          <TextInput
            id="name"
            value={config.name}
            onChange={(value) => updateConfig({ name: value })}
            placeholder="Your full name"
          />
        </FormField>
        <FormField label="Title" htmlFor="title">
          <TextInput
            id="title"
            value={config.title}
            onChange={(value) => updateConfig({ title: value })}
            placeholder="e.g., DevOps Engineer"
          />
        </FormField>
        <FormField label="Tagline" htmlFor="tagline">
          <TextInput
            id="tagline"
            value={config.tagline}
            onChange={(value) => updateConfig({ tagline: value })}
            placeholder="A brief description of what you do"
          />
        </FormField>
      </div>
    </div>
  );
}
