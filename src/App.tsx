import { type ReactElement, useState } from 'react'
import AboutPage from './pages/about'
import DashboardPage from './pages/dashboard'
import PhotographyPage from './pages/photography'
import ProjectsPage from './pages/projects'
import UltimatePage from './pages/ultimate'
import './App.css'

type Page = 'dashboard' | 'projects' | 'photography' | 'ultimate' | 'about'

const pages: { key: Page; label: string }[] = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'projects', label: 'Projects' },
  { key: 'photography', label: 'Photography' },
  { key: 'ultimate', label: 'Ultimate' },
  { key: 'about', label: 'About' },
]

const pageComponents: Record<Page, ReactElement> = {
  dashboard: <DashboardPage />,
  projects: <ProjectsPage />,
  photography: <PhotographyPage />,
  ultimate: <UltimatePage />,
  about: <AboutPage />,
}

function App() {
  const [activePage, setActivePage] = useState<Page>('dashboard')

  return (
    <main className="app">
      <nav className="app-nav" aria-label="Portfolio pages">
        {pages.map((page) => (
          <button
            key={page.key}
            type="button"
            className={activePage === page.key ? 'active' : ''}
            onClick={() => setActivePage(page.key)}
          >
            {page.label}
          </button>
        ))}
      </nav>
      {pageComponents[activePage]}
    </main>
  )
}

export default App
