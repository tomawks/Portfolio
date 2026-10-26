import { useState, useRef, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Header() {
  const [active, setActive] = useState('profile')
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLUListElement>(null)

  const links = [
    { id: 'profile', label: 'Profile' },
    { id: 'project', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const activeLink = navRef.current?.querySelector<HTMLAnchorElement>(`a[data-id="${active}"]`)
    if (activeLink) {
      setPillStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      })
    }
  }, [active])

  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link.id))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.5 } // la section doit être visible à 50% pour être considérée "active"
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])


  return (
    <header>
      <nav>
        <ul ref={navRef}>
          <span className="nav__pill" style={{ left: pillStyle.left, width: pillStyle.width }} />
          {links.map((link) => (
            <li key={link.id}>
              
                <a href={`#${link.id}`}
                data-id={link.id}
                className={active === link.id ? 'active' : ''}
                onClick={() => setActive(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <section id="profile">
        <h1 className="header__title">Thomas COELHO</h1>
        <img src="/DSC08355-2.jpg" alt="photo de profil" className='header__photo'/> 
         <div className="header__socials">      
            <a href="https://github.com/tomawks" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
          </a>
        <a href="https://www.linkedin.com/in/thomas-coelho-017740253/" target="_blank" rel="noreferrer">
           <FaLinkedin /> LinkedIn
        </a>
        </div>
         <div className="mac-window">
          <div className="mac-window__bar">
            <span className="mac-window__dot mac-window__dot--red"></span>
            <span className="mac-window__dot mac-window__dot--yellow"></span>
            <span className="mac-window__dot mac-window__dot--green"></span>
        </div>
        <p className="mac-window__content">
          Développeur en formation à EPITECH (Master of Science), je conçois des applications web en React, TypeScript et PHP. Issu d'un BTS MCO, j'apporte aussi un vrai sens du client et du terrain.<br></br>
          <span className="mac-window__note">Je recherche une alternance à partir de janvier 2027 — rythme 2 semaines école / 4 semaines entreprise.</span>
       </p>
      </div>
      </section>
    </header>
  )
}

export default Header