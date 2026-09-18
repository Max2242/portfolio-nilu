import { type ReactElement, useState } from 'react'
import AboutPage from './pages/about'
import DashboardPage from './pages/dashboard'
import PhotographyPage from './pages/photography'
import ProjectsPage from './pages/projects'
import UltimatePage from './pages/ultimate'
import logoImg from './assets/logo.png'
import './App.css'

type Page = 'dashboard' | 'projects' | 'photography' | 'ultimate' | 'about'

const navLinks: { key: Page; label: string }[] = [
  { key: 'projects', label: 'PROJECTS' },
  { key: 'photography', label: 'PHOTOGRAPHY' },
  { key: 'ultimate', label: 'ULTIMATE' },
  { key: 'about', label: 'ABOUT' },
]

const pageComponents: Record<Page, ReactElement> = {
  dashboard: <DashboardPage />,
  projects: <ProjectsPage />,
  photography: <PhotographyPage />,
  ultimate: <UltimatePage />,
  about: <AboutPage />,
}

function App() {
  const [activePage, setActivePage] = useState<Page>(() => {
    const hash = window.location.hash.replace('#', '') as Page
    if (['dashboard', 'projects', 'photography', 'ultimate', 'about'].includes(hash)) {
      return hash
    }
    return 'dashboard'
  })

  const navigateTo = (page: Page) => {
    setActivePage(page)
    window.location.hash = page === 'dashboard' ? '' : page
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <nav className="nav-pill" aria-label="Main Navigation">
          <button
            type="button"
            className={`nav-brand ${activePage === 'dashboard' ? 'active' : ''}`}
            onClick={() => navigateTo('dashboard')}
            aria-label="nilakshi home"
          >
            <img src={logoImg} alt="nilakshi" className="brand-logo-img" />
          </button>

          <div className="nav-links">
            {navLinks.map((item) => (
              <button
                key={item.key}
                type="button"
                className={`nav-link-btn ${activePage === item.key ? 'active' : ''}`}
                onClick={() => navigateTo(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="app-content">
        {pageComponents[activePage]}
      </main>
    </div>
  )
}

export default App
