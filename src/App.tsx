import './App.css'
import Header from './component/Header'
import Skills from './component/Skills'
import Project from './component/Project'
import Experience from './component/Experience'
import Contact from './component/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Skills />
        <Project />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default App