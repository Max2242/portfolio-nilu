import React from 'react'

import heroScrapbookWebp from '../../../assets/projects/casestudies/goboult/hero-scrapbook.webp'
import heroScrapbookPng from '../../../assets/projects/casestudies/goboult/hero-scrapbook.png'
import logoPillWebp from '../../../assets/projects/casestudies/goboult/logo-pill.webp'
import logoPillPng from '../../../assets/projects/casestudies/goboult/logo-pill.png'
import gridAirbudsWebp from '../../../assets/projects/casestudies/goboult/grid-airbuds.webp'
import gridAirbudsPng from '../../../assets/projects/casestudies/goboult/grid-airbuds.png'
import photoBoultBoxWebp from '../../../assets/projects/casestudies/goboult/photo-boult-box.webp'
import photoBoultBoxPng from '../../../assets/projects/casestudies/goboult/photo-boult-box.png'
import dielinePackagingWebp from '../../../assets/projects/casestudies/goboult/dieline-packaging.webp'
import dielinePackagingPng from '../../../assets/projects/casestudies/goboult/dieline-packaging.png'
import photoUnboxingWebp from '../../../assets/projects/casestudies/goboult/photo-unboxing.webp'
import photoUnboxingPng from '../../../assets/projects/casestudies/goboult/photo-unboxing.png'

export const CaseStudyGoboult: React.FC = () => {
  return (
    <div className="cs-article-container" id="casestudy-goboult">
      {/* 1. Hero Scrapbook Collage */}
      <section className="cs-hero-section">
        <div className="cs-hero-scrapbook-wrap">
          <picture>
            <source srcSet={heroScrapbookWebp} type="image/webp" />
            <img
              src={heroScrapbookPng}
              alt="GOBOULT Packaging Scrapbook Collage - Duration 2 Weeks"
              className="cs-hero-scrapbook-img"
            />
          </picture>
        </div>
      </section>

      {/* 2. Brand Context & Current Airbuds */}
      <section className="cs-section cs-split-brand-section">
        <div className="cs-brand-logo-col">
          <picture>
            <source srcSet={logoPillWebp} type="image/webp" />
            <img src={logoPillPng} alt="GOBOULT Brand Logo" className="cs-goboult-logo-img" />
          </picture>
          <span className="cs-caption-label">LOGO</span>
        </div>

        <div className="cs-brand-grid-col">
          <span className="cs-caption-label cs-text-right">CURRENT AIRBUDS BEING SOLD</span>
          <picture>
            <source srcSet={gridAirbudsWebp} type="image/webp" />
            <img
              src={gridAirbudsPng}
              alt="Current Boult airbuds lineup on sale"
              className="cs-airbuds-grid-img"
            />
          </picture>
        </div>
      </section>

      {/* 3. Existing Packaging & Key Issues */}
      <section className="cs-section">
        <div className="cs-heading-with-sub">
          <h2 className="cs-heading">Existing packaging</h2>
          <div className="cs-v-divider cs-divider-blue" />
          <p className="cs-subheading">
            The existing packaging relied heavily on dense text and stacked icons
            to communicate features, leaving little room for the product or the brand
            mark to breathe. Key issues:
          </p>
        </div>

        <div className="cs-split-issues-grid">
          <div className="cs-issue-image-col">
            <span className="cs-caption-label">CURRENT PACKAGING</span>
            <picture>
              <source srcSet={photoBoultBoxWebp} type="image/webp" />
              <img
                src={photoBoultBoxPng}
                alt="Current Boult X70 packaging box"
                className="cs-boult-box-img"
              />
            </picture>
          </div>

          <div className="cs-issue-pills-col">
            <div className="cs-blue-pill-card">
              <span className="cs-pill-dot">•</span>
              <p>No visual hierarchy</p>
            </div>

            <div className="cs-blue-pill-card">
              <span className="cs-pill-dot">•</span>
              <p>Fully opaque packaging, giving no product preview before purchase</p>
            </div>

            <div className="cs-blue-pill-card">
              <span className="cs-pill-dot">•</span>
              <p>Brand identity felt secondary to feature callouts</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. References Section */}
      <section className="cs-section">
        <div className="cs-heading-with-sub">
          <h2 className="cs-heading">References</h2>
          <div className="cs-v-divider cs-divider-blue" />
          <p className="cs-subheading">
            Looked at packaging across categories that use transparency as a design tool
            rather than an afterthought — where the window is placed to frame the product,
            not just expose it.
          </p>
        </div>
      </section>

      {/* 5. Final Design & Dieline */}
      <section className="cs-section">
        <h2 className="cs-heading">Final design</h2>

        <div className="cs-dieline-wrap">
          <picture>
            <source srcSet={dielinePackagingWebp} type="image/webp" />
            <img
              src={dielinePackagingPng}
              alt="Packaging dieline with technical certifications and transparent character window"
              className="cs-dieline-img"
            />
          </picture>
        </div>
      </section>

      {/* 6. Physical Unboxing Photography */}
      <section className="cs-section cs-unboxing-section">
        <div className="cs-unboxing-two-col">
          <div className="cs-unboxing-image-col">
            <picture>
              <source srcSet={photoUnboxingWebp} type="image/webp" />
              <img
                src={photoUnboxingPng}
                alt="Physical unboxing setup on cork desk with accessories and case"
                className="cs-unboxing-img"
              />
            </picture>
          </div>

          <div className="cs-unboxing-text-col">
            <h2 className="cs-handwritten-title cs-text-blue">GOBOULT</h2>
            <p className="cs-handwritten-sub">The final packaging.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
