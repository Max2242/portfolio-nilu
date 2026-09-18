import nilakshiHeroWebp from '../../assets/nilakshi-hero.webp'
import nilakshiHeroPng from '../../assets/nilakshi-hero.png'
import './dashboard.css'

function DashboardPage() {
  return (
    <section className="dashboard-hero" aria-label="Nilakshi — Product Designer Introduction">
      <div className="hero-content">
        <div className="hero-header-group">
          <p className="hero-role-tag">PRODUCT DESIGNER</p>
          <h1 className="hero-statement-title">
            <span>I OBSERVE.</span>
            <span>I QUESTION.</span>
            <span>I MAKE.</span>
          </h1>
        </div>

        <p className="hero-description">
          Product designer exploring<br />
          objects, systems &amp; experiences.
        </p>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-portrait-card">
          <picture>
            <source srcSet={nilakshiHeroWebp} type="image/webp" />
            <img
              src={nilakshiHeroPng}
              alt="Nilakshi smiling outdoors"
              className="hero-portrait-img"
              fetchPriority="high"
              decoding="async"
              width={1010}
              height={835}
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default DashboardPage
