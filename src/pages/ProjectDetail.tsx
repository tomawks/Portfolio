import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { projects } from '../data/projects'
import { ProjectCover } from '../component/Project'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <main className="detail">
        <Link to="/#project" className="detail__back">
          <FaArrowLeft /> Retour aux projets
        </Link>
        <h1>Projet introuvable</h1>
      </main>
    )
  }

  const sections = [
    { title: 'Mon rôle', items: project.role },
    { title: 'Difficultés rencontrées', items: project.challenges },
    { title: "Ce que j'ai appris", items: project.learnings },
  ]

  return (
    <main className="detail">
      <Link to="/#project" className="detail__back">
        <FaArrowLeft /> Retour aux projets
      </Link>

      <header className="detail__header">
        <div className="project__meta">
          <span>{project.year}</span>
          <span>{project.team}</span>
        </div>
        <h1 className="detail__title">{project.name}</h1>
        <p className="detail__tagline">{project.tagline}</p>
        <div className="project__stack detail__stack">
          {project.stack.map((tech) => (
            <span key={tech} className="project__badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="detail__links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              <FaGithub /> Code source
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt /> Démo en ligne
            </a>
          )}
        </div>
      </header>

      <ProjectCover project={project} />

      <section className="detail__section">
        <h2>Contexte</h2>
        <p>{project.context}</p>
      </section>

      {sections.map((section) => (
        <section key={section.title} className="detail__section">
          <h2>{section.title}</h2>
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  )
}

export default ProjectDetail
