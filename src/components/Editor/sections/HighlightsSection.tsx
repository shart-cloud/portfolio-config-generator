import { usePortfolioStore } from '../../../store/portfolioStore';
import { FormField } from '../common/FormField';
import { TextInput } from '../common/TextInput';

export function HighlightsSection() {
  const { config, updateHighlight, addHighlight, removeHighlight } = usePortfolioStore();

  return (
    <div className="editor-section">
      <div className="section-header">
        <h3 className="section-heading">Highlights</h3>
        <button type="button" className="add-btn" onClick={addHighlight}>
          + Add Highlight
        </button>
      </div>
      <div className="section-fields">
        {config.highlights.map((highlight, index) => (
          <div key={index} className="repeatable-item inline">
            <FormField label={`Highlight ${index + 1}`}>
              <TextInput
                value={highlight}
                onChange={(value) => updateHighlight(index, value)}
                placeholder="e.g., AWS Certified"
              />
            </FormField>
            <button
              type="button"
              className="remove-btn"
              onClick={() => removeHighlight(index)}
              aria-label="Remove highlight"
            >
              &times;
            </button>
          </div>
        ))}
        {config.highlights.length === 0 && (
          <p className="empty-message">No highlights added yet.</p>
        )}
      </div>
    </div>
  );
}
