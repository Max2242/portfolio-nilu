import { useState, useEffect, useCallback } from 'react'
import paletteWebp from '../../assets/projects/360-palette.webp'
import palettePng from '../../assets/projects/360-palette.png'
import mujiWebp from '../../assets/projects/muji.webp'
import mujiPng from '../../assets/projects/muji.png'
import ecomoveWebp from '../../assets/projects/ecomove.webp'
import ecomovePng from '../../assets/projects/ecomove.png'
import pinboardWebp from '../../assets/projects/pinboard.webp'
import pinboardPng from '../../assets/projects/pinboard.png'
import goboultWebp from '../../assets/projects/goboult.webp'
import goboultPng from '../../assets/projects/goboult.png'

// Full Vertical Case Study Visuals (Figma Nodes 1-358, 1-469, 1-508, 1-591, 1-744)
import caseStudyPaletteWebp from '../../assets/projects/casestudy-360-palette.webp'
import caseStudyPalettePng from '../../assets/projects/casestudy-360-palette.png'
import caseStudySpeakerWebp from '../../assets/projects/casestudy-oto-speaker.webp'
import caseStudySpeakerPng from '../../assets/projects/casestudy-oto-speaker.png'
import caseStudyEcomoveWebp from '../../assets/projects/casestudy-ecomove.webp'
import caseStudyEcomovePng from '../../assets/projects/casestudy-ecomove.png'
import caseStudyPinboardWebp from '../../assets/projects/casestudy-convertable-pinboard.webp'
import caseStudyPinboardPng from '../../assets/projects/casestudy-convertable-pinboard.png'
import caseStudyGoboultWebp from '../../assets/projects/casestudy-goboult.webp'
import caseStudyGoboultPng from '../../assets/projects/casestudy-goboult.png'

import './projects.css'

interface ProjectItem {
  id: string
  number: string
  numClass: string
  cardClass: string
  title: string
  detailTitle: string
  category: string
  duration: string
  nodeId: string
  webp: string
  png: string
  caseStudyWebp: string
  caseStudyPng: string
  alt: string
  caseStudyAlt: string
}

const projectsData: ProjectItem[] = [
  {
    id: '360-palette',
    number: '01',
    numClass: 'num-01',
    cardClass: 'card-01',
    title: '360 Palette',
    detailTitle: '360 Palette',
    category: 'Water Color Holder',
    duration: 'Duration: 4 Weeks',
    nodeId: '1-358',
    webp: paletteWebp,
    png: palettePng,
    caseStudyWebp: caseStudyPaletteWebp,
    caseStudyPng: caseStudyPalettePng,
    alt: '360 Palette — Water Color Holder project preview',
    caseStudyAlt: '360 Palette complete case study: Objective, Redesign of water container, palette, and brush holder, form exploration sketches, in use demonstration, and final product',
  },
  {
    id: 'muji',
    number: '02',
    numClass: 'num-02',
    cardClass: 'card-02',
    title: 'Muji',
    detailTitle: 'OTO Speaker',
    category: 'Product Render',
    duration: 'Duration: 4 Weeks',
    nodeId: '1-469',
    webp: mujiWebp,
    png: mujiPng,
    caseStudyWebp: caseStudySpeakerWebp,
    caseStudyPng: caseStudySpeakerPng,
    alt: 'Muji — Product Render project preview',
    caseStudyAlt: 'OTO Speaker complete case study: MUJI design grammar exploration, narrowing down ideation sketches, CAD blueprint diagram, and minimal interior product photography',
  },
  {
    id: 'ecomove',
    number: '03',
    numClass: 'num-03',
    cardClass: 'card-03',
    title: 'Ecomove',
    detailTitle: 'ECOMOVE',
    category: 'App',
    duration: 'Duration: 3 Weeks',
    nodeId: '1-508',
    webp: ecomoveWebp,
    png: ecomovePng,
    caseStudyWebp: caseStudyEcomoveWebp,
    caseStudyPng: caseStudyEcomovePng,
    alt: 'Ecomove — App project preview',
    caseStudyAlt: 'ECOMOVE complete case study: Rewarding sustainable travel to campus, user gap analysis, target student persona, paper sketches to digital wireframes, and final mobile UI flow',
  },
  {
    id: 'convertable-pinboard',
    number: '04',
    numClass: 'num-04',
    cardClass: 'card-04',
    title: 'Convertable Pinboard',
    detailTitle: 'ConverPinboard',
    category: 'College Product',
    duration: 'Duration: 3 Weeks',
    nodeId: '1-591',
    webp: pinboardWebp,
    png: pinboardPng,
    caseStudyWebp: caseStudyPinboardWebp,
    caseStudyPng: caseStudyPinboardPng,
    alt: 'Convertable Pinboard — College Product project preview',
    caseStudyAlt: 'ConverPinboard complete case study: Survey research and pie charts, student and staff personas, user journey map, physical joinery mockups, mechanism prototyping, and classroom render',
  },
  {
    id: 'goboult',
    number: '05',
    numClass: 'num-05',
    cardClass: 'card-05',
    title: 'Goboult',
    detailTitle: 'GOBOULT',
    category: 'Packaging',
    duration: 'Duration: 2 Weeks',
    nodeId: '1-744',
    webp: goboultWebp,
    png: goboultPng,
    caseStudyWebp: caseStudyGoboultWebp,
    caseStudyPng: caseStudyGoboultPng,
    alt: 'Goboult — Packaging project preview',
    caseStudyAlt: 'GOBOULT complete case study: Audio product packaging redesign, existing packaging audit, packaging references moodboard, mascot sketch exploration, dieline design, and physical packaging boxes',
  },
]

function getProjectIdFromHash(): string | null {
  const hash = window.location.hash.replace('#', '')
  if (hash.startsWith('projects/')) {
    const rawId = hash.replace('projects/', '')
    if (rawId === 'oto-speaker') return 'muji'
    const found = projectsData.find((p) => p.id === rawId)
    return found ? found.id : null
  }
  return null
}

function ProjectsPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(() => getProjectIdFromHash())
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleHash = () => {
      setSelectedProjectId(getProjectIdFromHash())
    }
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  // Scroll to top whenever the selected project changes
  useEffect(() => {
    if (selectedProjectId) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [selectedProjectId])

  // Track scroll position for floating back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const selectProject = useCallback((id: string) => {
    setSelectedProjectId(id)
    window.location.hash = `projects/${id}`
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const clearProject = useCallback(() => {
    setSelectedProjectId(null)
    window.location.hash = 'projects'
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const activeIndex = projectsData.findIndex((p) => p.id === selectedProjectId)
  const activeProject = activeIndex >= 0 ? projectsData[activeIndex] : null
  const nextProjectItem = activeIndex >= 0 ? projectsData[(activeIndex + 1) % projectsData.length] : null

  const nextProject = useCallback(() => {
    if (activeIndex === -1) return
    const nextIdx = (activeIndex + 1) % projectsData.length
    selectProject(projectsData[nextIdx].id)
  }, [activeIndex, selectProject])

  const prevProject = useCallback(() => {
    if (activeIndex === -1) return
    const prevIdx = (activeIndex - 1 + projectsData.length) % projectsData.length
    selectProject(projectsData[prevIdx].id)
  }, [activeIndex, selectProject])

  // Keyboard navigation when in detail view
  useEffect(() => {
    if (!activeProject) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearProject()
      } else if (e.key === 'ArrowRight') {
        nextProject()
      } else if (e.key === 'ArrowLeft') {
        prevProject()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeProject, clearProject, nextProject, prevProject])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // --- DETAIL VIEW: VERTICAL SCROLL CASE STUDY ---
  if (activeProject) {
    return (
      <section
        className="casestudy-page-container"
        aria-label={`${activeProject.title} case study`}
      >
        {/* Sticky Top Navigation Bar */}
        <header className="casestudy-sticky-bar">
          <div className="casestudy-bar-content">
            <button
              type="button"
              className="casestudy-back-btn"
              onClick={clearProject}
              aria-label="Back to projects list"
            >
              <span className="back-arrow" aria-hidden="true">←</span>
              <span>BACK TO PROJECTS</span>
            </button>

            <div className="casestudy-badge-title">
              <span className="casestudy-num-tag">{activeProject.number}</span>
              <span className="casestudy-name-tag">{activeProject.detailTitle}</span>
              <span className="casestudy-dot" aria-hidden="true">•</span>
              <span className="casestudy-category-tag">{activeProject.category}</span>
            </div>

            <div className="casestudy-stepper">
              <button
                type="button"
                className="casestudy-step-arrow"
                onClick={prevProject}
                aria-label="Previous project case study"
              >
                ‹
              </button>
              <span className="casestudy-step-indicator">
                {activeProject.number} / {String(projectsData.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                className="casestudy-step-arrow"
                onClick={nextProject}
                aria-label="Next project case study"
              >
                ›
              </button>
            </div>
          </div>
        </header>

        {/* Scrollable Case Study Body */}
        <main className="casestudy-body">
          <article className="casestudy-canvas-wrap" tabIndex={0} aria-label={activeProject.caseStudyAlt}>
            <picture>
              <source srcSet={activeProject.caseStudyWebp} type="image/webp" />
              <img
                src={activeProject.caseStudyPng}
                alt={activeProject.caseStudyAlt}
                className="casestudy-img"
              />
            </picture>
          </article>

          {/* Next Project Footer Teaser Card */}
          {nextProjectItem && (
            <footer className="casestudy-footer-nav">
              <div
                className="next-project-card"
                role="button"
                tabIndex={0}
                onClick={() => selectProject(nextProjectItem.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    selectProject(nextProjectItem.id)
                  }
                }}
                aria-label={`Next Project: ${nextProjectItem.number} ${nextProjectItem.title}. Click to view.`}
              >
                <div className="next-project-meta">
                  <span className="next-label">NEXT CASE STUDY</span>
                  <h3 className="next-title">
                    <span className="next-num">{nextProjectItem.number}</span>
                    {nextProjectItem.title}
                  </h3>
                  <span className="next-cat">{nextProjectItem.category} • {nextProjectItem.duration}</span>
                </div>
                <div className="next-arrow-circle" aria-hidden="true">
                  →
                </div>
              </div>
            </footer>
          )}
        </main>

        {/* Floating Back to Top Button */}
        {showScrollTop && (
          <button
            type="button"
            className="casestudy-scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of case study"
          >
            ↑
          </button>
        )}
      </section>
    )
  }

  // --- PROJECTS LIST VIEW (Frame 16) ---
  return (
    <section className="projects-container" aria-label="Featured Projects Portfolio">
      <div className="projects-list" role="list">
        {projectsData.map((project) => (
          <article
            key={project.id}
            className="project-row"
            role="button"
            tabIndex={0}
            onClick={() => selectProject(project.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                selectProject(project.id)
              }
            }}
            aria-label={`${project.number} ${project.title}, ${project.category}. Click to view case study.`}
          >
            <div className="project-info">
              <span className={`project-numeral ${project.numClass}`} aria-hidden="true">
                {project.number}
              </span>
              <div className="project-details">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-category">{project.category}</p>
              </div>
            </div>

            <div className="project-visual">
              <picture>
                <source srcSet={project.webp} type="image/webp" />
                <img
                  src={project.png}
                  alt={project.alt}
                  className={`project-card-img ${project.cardClass}`}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage

