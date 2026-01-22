import { usePortfolioStore } from '../../../store/portfolioStore';
import { FormField } from '../common/FormField';
import { TextInput } from '../common/TextInput';
import { TextArea } from '../common/TextArea';
import { TagInput } from '../common/TagInput';

export function ProjectsSection() {
  const { config, updateProject, addProject, removeProject } = usePortfolioStore();

  return (
    <div className="editor-section">
      <div className="section-header">
        <h3 className="section-heading">Projects</h3>
        <button type="button" className="add-btn" onClick={addProject}>
          + Add Project
        </button>
      </div>
      <div className="section-fields">
        {config.projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-item-header">
              <span className="project-number">Project {index + 1}</span>
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeProject(index)}
                aria-label="Remove project"
              >
                &times;
              </button>
            </div>
            <div className="project-fields">
              <FormField label="Title" htmlFor={`project-title-${index}`}>
                <TextInput
                  id={`project-title-${index}`}
                  value={project.title}
                  onChange={(value) => updateProject(index, { title: value })}
                  placeholder="Project name"
                />
              </FormField>
              <FormField label="Description" htmlFor={`project-desc-${index}`}>
                <TextArea
                  id={`project-desc-${index}`}
                  value={project.description}
                  onChange={(value) => updateProject(index, { description: value })}
                  placeholder="Brief description of the project..."
                  rows={2}
                />
              </FormField>
              <FormField label="Tags">
                <TagInput
                  tags={project.tags}
                  onChange={(tags) => updateProject(index, { tags })}
                  placeholder="Add technologies..."
                />
              </FormField>
              <div className="project-links-row">
                <FormField label="Live URL" htmlFor={`project-link-${index}`}>
                  <TextInput
                    id={`project-link-${index}`}
                    value={project.link || ''}
                    onChange={(value) => updateProject(index, { link: value || undefined })}
                    placeholder="https://..."
                  />
                </FormField>
                <FormField label="GitHub URL" htmlFor={`project-github-${index}`}>
                  <TextInput
                    id={`project-github-${index}`}
                    value={project.github || ''}
                    onChange={(value) => updateProject(index, { github: value || undefined })}
                    placeholder="https://github.com/..."
                  />
                </FormField>
              </div>
            </div>
          </div>
        ))}
        {config.projects.length === 0 && (
          <p className="empty-message">No projects added yet.</p>
        )}
      </div>
    </div>
  );
}
