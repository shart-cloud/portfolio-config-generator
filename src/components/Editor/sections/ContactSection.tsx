import { usePortfolioStore } from '../../../store/portfolioStore';
import { FormField } from '../common/FormField';
import { TextInput } from '../common/TextInput';

export function ContactSection() {
  const { config, updateContact, addContact, removeContact } = usePortfolioStore();

  return (
    <div className="editor-section">
      <div className="section-header">
        <h3 className="section-heading">Contact Links</h3>
        <button type="button" className="add-btn" onClick={addContact}>
          + Add Contact
        </button>
      </div>
      <div className="section-fields">
        {config.contacts.map((contact, index) => (
          <div key={index} className="contact-item">
            <div className="contact-item-header">
              <span className="contact-number">Contact {index + 1}</span>
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeContact(index)}
                aria-label="Remove contact"
              >
                &times;
              </button>
            </div>
            <div className="contact-fields">
              <FormField label="Platform" htmlFor={`contact-platform-${index}`}>
                <TextInput
                  id={`contact-platform-${index}`}
                  value={contact.platform}
                  onChange={(value) => updateContact(index, { platform: value })}
                  placeholder="e.g., GitHub, LinkedIn, Email"
                />
              </FormField>
              <FormField label="URL" htmlFor={`contact-url-${index}`}>
                <TextInput
                  id={`contact-url-${index}`}
                  value={contact.url}
                  onChange={(value) => updateContact(index, { url: value })}
                  placeholder="https://... or mailto:..."
                />
              </FormField>
              <FormField label="Display Label" htmlFor={`contact-label-${index}`}>
                <TextInput
                  id={`contact-label-${index}`}
                  value={contact.label}
                  onChange={(value) => updateContact(index, { label: value })}
                  placeholder="e.g., github.com/username"
                />
              </FormField>
            </div>
          </div>
        ))}
        {config.contacts.length === 0 && (
          <p className="empty-message">No contact links added yet.</p>
        )}
      </div>
    </div>
  );
}
