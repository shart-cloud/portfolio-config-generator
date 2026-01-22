import { usePortfolioStore } from '../../../store/portfolioStore';

export function ProjectsSection() {
  const { config } = usePortfolioStore();

  const validProjects = config.projects.filter((p) => p.title.trim());

  if (validProjects.length === 0) {
    return null;
  }

  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {validProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            {project.description && (
              <p className="project-description">{project.description}</p>
            )}
            {project.tags.length > 0 && (
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="project-links">
              {project.link && (
                <a href={project.link} className="project-link">
                  Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} className="project-link">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
