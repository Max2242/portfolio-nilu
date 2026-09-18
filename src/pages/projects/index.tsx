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
import './projects.css'

interface ProjectItem {
  id: string
  number: string
  numClass: string
  cardClass: string
  title: string
  category: string
  webp: string
  png: string
  alt: string
}

const projectsData: ProjectItem[] = [
  {
    id: '360-palette',
    number: '01',
    numClass: 'num-01',
    cardClass: 'card-01',
    title: '360 Palette',
    category: 'Water Color Holder',
    webp: paletteWebp,
    png: palettePng,
    alt: '360 Palette — Water Color Holder project preview',
  },
  {
    id: 'muji',
    number: '02',
    numClass: 'num-02',
    cardClass: 'card-02',
    title: 'Muji',
    category: 'Product Render',
    webp: mujiWebp,
    png: mujiPng,
    alt: 'Muji — Product Render project preview',
  },
  {
    id: 'ecomove',
    number: '03',
    numClass: 'num-03',
    cardClass: 'card-03',
    title: 'Ecomove',
    category: 'App',
    webp: ecomoveWebp,
    png: ecomovePng,
    alt: 'Ecomove — App project preview',
  },
  {
    id: 'convertable-pinboard',
    number: '04',
    numClass: 'num-04',
    cardClass: 'card-04',
    title: 'Convertable Pinboard',
    category: 'College Product',
    webp: pinboardWebp,
    png: pinboardPng,
    alt: 'Convertable Pinboard — College Product project preview',
  },
  {
    id: 'goboult',
    number: '05',
    numClass: 'num-05',
    cardClass: 'card-05',
    title: 'Goboult',
    category: 'Packaging',
    webp: goboultWebp,
    png: goboultPng,
    alt: 'Goboult — Packaging project preview',
  },
]

function ProjectsPage() {
  return (
    <section className="projects-container" aria-label="Featured Projects Portfolio">
      <div className="projects-list" role="list">
        {projectsData.map((project) => (
          <article
            key={project.id}
            className="project-row"
            role="listitem"
            tabIndex={0}
            aria-label={`${project.number} ${project.title}, ${project.category}`}
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
