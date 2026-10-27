// Toutes les infos des projets sont ici : la carte sur l'accueil
// et la page de détail (/projets/:slug) lisent ce fichier.
// Pour ajouter un projet, copie un objet et remplis les champs.
// Les images vont dans public/projects/ (ex : /projects/mercasport.png).

export interface ProjectItem {
  slug: string
  name: string
  tagline: string // une phrase pour la carte
  year: string
  team: string // ex : "Projet solo" ou "Équipe de 4"
  stack: string[]
  image?: string
  github?: string
  demo?: string
  context: string // le problème / le besoin
  role: string[] // ce que TOI tu as fait
  challenges: string[] // difficultés et comment tu les as résolues
  learnings: string[] // ce que tu as appris
}

export const projects: ProjectItem[] = [
  {
    slug: 'mercasport',
    name: 'Mercasport',
    tagline: 'Job board qui met en relation les sportifs et les clubs de sport.',
    year: '2026',
    team: 'Projet en équipe — EPITECH',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: '/Front-Mercasport.jpg',
    github: 'https://github.com/LopbeiroJoel/MERCASPORT-BETA',
    context:
      "Les clubs de sport ont du mal à trouver des profils (joueurs, coachs, staff) et les sportifs n'ont pas d'endroit dédié pour trouver des opportunités. Mercasport centralise les annonces des clubs et les profils des sportifs sur une même plateforme.",
    role: [
      'Création de la page d’accueil et de la page de détail d’une annonce (HTML, CSS, JS).',
      'Je me suis principalement occupé de la partie front-end, mais j’ai aussi participé à la conception de la base de données et à l’implémentation de certaines fonctionnalités back-end (PHP / MySQL).',
    ],
    challenges: [
      'Faire un site responsive et agréable à utiliser sur mobile, tablette et desktop.',
    ],
    learnings: [
      'Travailler en équipe sur un même dépôt Git (branches, merges).',
      'Appliquer les bonnes pratiques de développement web (HTML sémantique, CSS BEM, JS modulaire).',
    ],
  },
  {
    slug: 'digital-resume',
    name: 'Digital Resume',
    tagline: 'Mon CV en ligne, première version de ce site, développé en React et TypeScript.',
    year: '2026',
    team: 'Projet solo — EPITECH',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
    image: '/digital-resume.jpg',
    // lien vers la version d'origine dans l'historique Git
    github: 'https://github.com/tomawks/Portfolio/tree/af198f4',
    context:
      "Transformer mon CV papier en site web, dans le cadre de mon MSc à EPITECH, pour présenter mon parcours, mes compétences et mes expériences de façon plus vivante.",
    role: [
      'Conception et intégration de toute l’interface : profil, compétences, projets, expériences et contact.',
      'Navigation animée qui suit la section visible pendant le scroll (IntersectionObserver).',
      'Mise en page responsive mobile → tablette → desktop et thème sombre.',
    ],
    challenges: [
      'Faire glisser la “pilule” de navigation sous la section affichée, sans librairie : calcul de la position et de la largeur du lien actif en React.',
    ],
    learnings: [
      'Structurer une app React en composants réutilisables et typés avec TypeScript.',
      'Gérer le responsive avec des media queries mobile-first.',
    ],
  },
]
