export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <span className="project-icon">{project.icon}</span>
        <span className={`project-status ${project.status === 'Completed' ? 'completed' : ''}`}>
          {project.status}
        </span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.highlights && (
        <ul className="project-highlights">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
      <div className="project-techs">
        {project.tech.map((t) => (
          <span key={t} className="tech-tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
