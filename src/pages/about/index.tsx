import nilakshiAboutImg from '../../assets/nilakshi-about.png'
import btnBehanceImg from '../../assets/btn-behance.png'
import btnLinkedinImg from '../../assets/btn-linkedin.png'
import './about.css'

function AboutPage() {
  return (
    <div className="about-page-wrapper">
      <main className="about-main-container">
        {/* Left Column: Greeting, Bio, and Inline Connect */}
        <section className="about-text-column" aria-label="About Nilakshi">
          <h1 className="about-greeting-title">Hello, I&apos;m Nilakshi!</h1>

          <div className="about-story-group">
            <p className="about-story-p">
              I&apos;m a design student. Beyond design, Ultimate Frisbee has been one of my greatest
              teachers. It has shaped the way I collaborate, communicate, and approach challenges with
              empathy, discipline, and integrity, values that carry into every project I take on.
            </p>
            <p className="about-story-p">
              I love creating things that bring joy to others, whether it&apos;s a handcrafted gift, a
              photograph, or a thoughtfully designed experience. When I&apos;m away from the studio,
              you&apos;ll usually find me cycling, crocheting, reading, or listening to the same
              playlist on repeat.
            </p>
          </div>

          <h2 className="about-connect-heading">
            <span>Let&apos;s connect and create</span>
            <span>more!</span>
          </h2>

          <div className="about-connect-buttons-row">
            <a
              href="https://www.behance.net/nilakshigaikwad1"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-pill-link"
              aria-label="Nilakshi Gaikwad on Behance"
            >
              <img
                src={btnBehanceImg}
                alt="Behance — Nilakshi Gaikwad"
                className="connect-pill-img"
                width={194}
                height={52}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/nilakshi-gaikwad-69572b276/"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-pill-link"
              aria-label="Nilakshi Gaikwad on LinkedIn"
            >
              <img
                src={btnLinkedinImg}
                alt="LinkedIn — Nilakshi Gaikwad"
                className="connect-pill-img"
                width={194}
                height={52}
              />
            </a>
          </div>
        </section>

        {/* Right Column: Composite Image of Nilakshi on Grass with Mosaic Squares */}
        <section className="about-image-column" aria-label="Nilakshi Portrait">
          <div className="about-artwork-wrapper">
            <img
              src={nilakshiAboutImg}
              alt="Nilakshi standing in grass with artistic square mosaic accents"
              className="about-artwork-img"
              fetchPriority="high"
              decoding="async"
              width={450}
              height={612}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutPage
