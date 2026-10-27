import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import type { ProjectItem } from '../data/projects'

export function ProjectCover({ project }: { project: ProjectItem }) {
  if (project.image) {
    return <img src={project.image} alt={`Aperçu de ${project.name}`} className="project__cover" />
  }
  // Pas d'image : on n'affiche rien
  return null
} 

function Project() {
  return (
    <section id="project" className="project">
      <h2 className="project__title">Projects</h2>
      <div className="project__grid">
        {projects.map((project) => (
          <Link key={project.slug} to={`/projets/${project.slug}`} className="project__card">
            <ProjectCover project={project} />
            <div className="project__body">
              <div className="project__meta">
                <span>{project.year}</span>
                <span>{project.team}</span>
              </div>
              <h3 className="project__name">{project.name}</h3>
              <p className="project__description">{project.tagline}</p>
              <div className="project__stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="project__badge">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="project__more">Voir le projet →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Project
