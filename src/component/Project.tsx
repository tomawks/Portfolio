interface ProjectItem {
  name: string
  description: string
  stack: string[]
  github: string
}

function Project() {
  const leftColumn: ProjectItem[] = [
    {
      name: 'Digital Resume',
      description:
        'CV en ligne développé dans le cadre de mon MSc à EPITECH : nav animée, sections responsive, thème sombre.',
      stack: ['React', 'TypeScript', 'Vite', 'CSS'],
      github: '#',
    },
    {
      name: 'Projet à venir',
      description: 'Description à venir.',
      stack: ['Techno 1', 'Techno 2'],
      github: '#',
    },
  ]

  const rightColumn: ProjectItem[] = [
    {
      name: 'Mercasport',
      description: 'Job board pour les sportifs et les clubs de sport, développé en équipe dans le cadre de mon MSc à EPITECH.',
      stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/LopbeiroJoel/MERCASPORT-BETA',
    },
    {
      name: 'Projet à venir',
      description: 'Description à venir.',
      stack: ['Techno 1', 'Techno 2'],
      github: '#',
    },
  ]

  const renderProject = (project: ProjectItem) => (
    <a
      key={project.name}
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="project__card"
    >
      <h3 className="project__name">{project.name}</h3>
      <p className="project__description">{project.description}</p>
      <div className="project__stack">
        {project.stack.map((tech) => (
          <span key={tech} className="project__badge">
            {tech}
          </span>
        ))}
      </div>
    </a>
  )

  return (
    <section id="project" className="project">
      <h2 className="project__title">Project</h2>
      <div className="project__grid">
        <div>{leftColumn.map(renderProject)}</div>
        <div>{rightColumn.map(renderProject)}</div>
      </div>
    </section>
  )
}

export default Project