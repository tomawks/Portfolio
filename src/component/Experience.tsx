interface ExperienceItem {
  role: string
  place: string
  period: string
  description: string
}

function Experience() {
  const professional: ExperienceItem[] = [
    {
      role: 'Alternant Chef de rang',
      place: "L'Ancienne Douane",
      period: '10/2022 - 08/2026',
      description: 'Accueil et conseil clientèle, prise de commande, service des mets, service du vin, barman.',
    },
  
    {
      role: "Assistant d'aide à la réservation de séminaire",
      place: 'Hôtel et SPA Régent Petite-France Strasbourg',
      period: '04/2023 - 07/2023',
      description: 'Accueil et accompagnement des clients, répondre aux demandes spécifiques des clients, organisation de séminaires et création de devis',
    },
  ]

  const academic: ExperienceItem[] = [
    {
      role: 'Formation Master Of Science',
      place: 'EPITECH Strasbourg',
      period: '09/2026 - 09/2029',
      description: "Formation en cours d'apprentissage",
    },
      {
      role: 'BTS Management Commercial Opérationnel (MCO)',
      place: 'ESARC Strasbourg',
      period: '09/2023 - 06/2026',
      description: 'Obtention du BTS Management Commercial Opérationnel.',
    },
  ]

  const renderExperience = (item: ExperienceItem, index: number) => (
    <div key={index} className="experience__card">
      <div className="experience__header">
        <h3 className="experience__role">{item.role}</h3>
        <span className="experience__period">{item.period}</span>
      </div>
      <p className="experience__place">{item.place}</p>
      <p className="experience__description">{item.description}</p>
    </div>
  )

  return (
    <section id="experience" className="experience">
      <h2 className="experience__title">Experience</h2>
      <div className="experience__grid">
        <div>
          <h3 className="experience__column-title">Expérience professionnelle</h3>
          {professional.map(renderExperience)}
        </div>
        <div>
          <h3 className="experience__column-title">Parcours scolaire</h3>
          {academic.map(renderExperience)}
        </div>
      </div>
    </section>
  )
}

export default Experience