import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Skills from './component/Skills'
import Project from './component/Project'
import Experience from './component/Experience'
import Contact from './component/Contact'
import ProjectDetail from './pages/ProjectDetail'

function Home() {
  const { hash } = useLocation()

  // En revenant d'une page projet (ex : /#project), on descend à la bonne section
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    }
  }, [hash])

  return (
    <>
      <Header />
      <main>
        <Project />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projets/:slug" element={<ProjectDetail />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
