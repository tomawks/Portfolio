function Skills() {
  const leftColumn = [
    {
      title: 'Language',
      skills: ['Python', 'Java', 'JavaScript', 'PHP'],
    },
    {
      title: 'Développement web',
      skills: ['HTML/CSS', 'React', 'Vue.js', 'Next.js', 'API REST'],
    },
    {
      title: 'Bases de données',
      skills: ['SQL', 'PostgreSQL', 'MySQL', 'NoSQL'],
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'Docker Compose', 'Jenkins', 'Kubernetes'],
    },
  ]

  const rightColumn = [
    {
      title: 'Data & IA',
      skills: ['Analyse et visualisation de données', 'Jupyter Notebook', 'NLP'],
    },
    {
      title: 'Cybersécurité',
      skills: ['Sécurité informatique', 'Analyse de vulnérabilités'],
    },
    {
      title: 'Méthodes & outils',
      skills: ['Git', 'UML', 'Programmation orientée objet', 'Agile', 'Gestion de projet'],
    },
    {
      title: 'Bureautique',
      skills: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Canva'],
    },
  ]

  const renderCategory = (category: { title: string; skills: string[] }) => (
    <div key={category.title} className="skills__category">
      <h3 className="skills__category-title">{category.title}</h3>
      <div className="skills__badges">
        {category.skills.map((skill) => (
          <span key={skill} className="skills__badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )

  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__grid">
        <div>{leftColumn.map(renderCategory)}</div>
        <div>{rightColumn.map(renderCategory)}</div>
      </div>
    </section>
  )
}

export default Skills