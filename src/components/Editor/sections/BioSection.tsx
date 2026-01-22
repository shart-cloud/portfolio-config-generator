import { usePortfolioStore } from '../../../store/portfolioStore';
import { FormField } from '../common/FormField';
import { TextArea } from '../common/TextArea';

export function BioSection() {
  const { config, updateBio, addBio, removeBio } = usePortfolioStore();

  return (
    <div className="editor-section">
      <div className="section-header">
        <h3 className="section-heading">Bio</h3>
        <button type="button" className="add-btn" onClick={addBio}>
          + Add Paragraph
        </button>
      </div>
      <div className="section-fields">
        {config.bio.map((paragraph, index) => (
          <div key={index} className="repeatable-item">
            <FormField label={`Paragraph ${index + 1}`}>
              <TextArea
                value={paragraph}
                onChange={(value) => updateBio(index, value)}
                placeholder="Write about yourself..."
                rows={3}
              />
            </FormField>
            {config.bio.length > 1 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeBio(index)}
                aria-label="Remove paragraph"
              >
                &times;
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
