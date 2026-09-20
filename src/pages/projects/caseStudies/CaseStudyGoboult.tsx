import React from 'react'

import heroScrapbookWebp from '../../../assets/projects/casestudies/goboult/hero-scrapbook.webp'
import heroScrapbookPng from '../../../assets/projects/casestudies/goboult/hero-scrapbook.png'
import logoPillWebp from '../../../assets/projects/casestudies/goboult/logo-pill.webp'
import logoPillPng from '../../../assets/projects/casestudies/goboult/logo-pill.png'
import gridAirbudsWebp from '../../../assets/projects/casestudies/goboult/grid-airbuds.webp'
import gridAirbudsPng from '../../../assets/projects/casestudies/goboult/grid-airbuds.png'
import photoBoultBoxWebp from '../../../assets/projects/casestudies/goboult/photo-boult-box.webp'
import photoBoultBoxPng from '../../../assets/projects/casestudies/goboult/photo-boult-box.png'
import dielinePackagingPng from '../../../assets/projects/casestudies/goboult/dieline-packaging.png'
import photoUnboxingPng from '../../../assets/projects/casestudies/goboult/photo-unboxing.png'

import refNotesEarbudsPng from '../../../assets/projects/casestudies/goboult/ref-notes-earbuds.png'
import refNoteCardPng from '../../../assets/projects/casestudies/goboult/ref-note-card.png'
import refIsportHeadphonePng from '../../../assets/projects/casestudies/goboult/ref-isport-headphone.png'
import refRiceSpoonPng from '../../../assets/projects/casestudies/goboult/ref-rice-spoon.png'
import refOpenMicPng from '../../../assets/projects/casestudies/goboult/ref-open-mic.png'
import refPeaPodPng from '../../../assets/projects/casestudies/goboult/ref-pea-pod.png'
import refChickenEggsPng from '../../../assets/projects/casestudies/goboult/ref-chicken-eggs.png'
import refRicolaDropPng from '../../../assets/projects/casestudies/goboult/ref-ricola-drop.png'
import sketchIdeationPng from '../../../assets/projects/casestudies/goboult/sketch-ideation.png'

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
              alt="Grid of existing Boult airbuds cases"
              className="cs-airbuds-grid-img"
            />
          </picture>
        </div>
      </section>

      {/* 3. The Problem & Identifying Issues */}
      <section className="cs-section">
        <div className="cs-heading-with-sub">
          <h2 className="cs-heading">The Problem</h2>
          <div className="cs-v-divider cs-divider-blue" />
          <p className="cs-subheading">
            Current Boult packaging had high feature density but low emotional connection.
          </p>
        </div>

        <h3 className="cs-subheading-tag">Issues Identified</h3>

        <div className="cs-split-issues-grid">
          <div className="cs-issue-photo-col">
            <picture>
              <source srcSet={photoBoultBoxWebp} type="image/webp" />
              <img
                src={photoBoultBoxPng}
                alt="Front retail box of existing Boult Airbass"
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
          <h2 className="cs-heading cs-heading-purple">References</h2>
          <div className="cs-v-divider cs-divider-gold" />
          <p className="cs-subheading">
            Looked at packaging across categories that use transparency as a design tool rather
            than an afterthought — where the window is placed to frame the product, not just expose
            it.
          </p>
        </div>

        <div className="cs-goboult-references-container">
          {/* Row 1: 4 references */}
          <div className="cs-goboult-ref-row cs-goboult-ref-row-1">
            <div className="cs-goboult-ref-card cs-ref-notes">
              <img
                src={refNotesEarbudsPng}
                alt="Notes earphone packaging framing earbuds as a musical treble clef"
                className="cs-goboult-ref-img"
                loading="lazy"
              />
            </div>
            <div className="cs-goboult-ref-card cs-ref-note-card">
              <img
                src={refNoteCardPng}
                alt="Noté cards packaging forming musical eighth notes with earbuds and wires"
                className="cs-goboult-ref-img"
                loading="lazy"
              />
            </div>
            <div className="cs-goboult-ref-card cs-ref-isport">
              <img
                src={refIsportHeadphonePng}
                alt="Monster iSport athlete headphones yellow packaging insert framing the earphones"
                className="cs-goboult-ref-img"
                loading="lazy"
              />
            </div>
            <div className="cs-goboult-ref-card cs-ref-rice-spoon">
              <img
                src={refRiceSpoonPng}
                alt="Rice scoop packaging featuring illustrated rice bowl with wood spoon framed as serving"
                className="cs-goboult-ref-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Row 2: 4 references */}
          <div className="cs-goboult-ref-row cs-goboult-ref-row-2">
            <div className="cs-goboult-ref-card cs-ref-open-mic">
              <img
                src={refOpenMicPng}
                alt="Open mic night microphone packaging held through die-cut finger holes"
                className="cs-goboult-ref-img"
                loading="lazy"
              />
            </div>
            <div className="cs-goboult-ref-card cs-ref-pea-pod">
              <img
                src={refPeaPodPng}
                alt="Pea pod green packaging framing tennis balls like peas in a pod"
                className="cs-goboult-ref-img"
                loading="lazy"
              />
            </div>
            <div className="cs-goboult-ref-card cs-ref-chicken-eggs">
              <img
                src={refChickenEggsPng}
                alt="Cardboard hen egg carton framing eggs inside die-cut chicken body"
                className="cs-goboult-ref-img"
                loading="lazy"
              />
            </div>
            <div className="cs-goboult-ref-card cs-ref-ricola">
              <img
                src={refRicolaDropPng}
                alt="Ricola cough drop wrapper unfolding to reveal unwrapped singer throat"
                className="cs-goboult-ref-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sketch & Ideation Section */}
      <section className="cs-section cs-goboult-sketch-section">
        <div className="cs-heading-with-sub">
          <h2 className="cs-heading">Sketch</h2>
          <div className="cs-v-divider cs-divider-cyan" />
          <p className="cs-subheading">
            Looked at packaging across categories that use transparency as a design tool rather
            than an afterthought — where the window is placed to frame the product, not just expose
            it.
          </p>
        </div>

        <div className="cs-goboult-sketch-wrap">
          <img
            src={sketchIdeationPng}
            alt="GoBoult packaging ideation sketch - integrating transparent character window framing airbuds"
            className="cs-goboult-sketch-img"
            loading="lazy"
          />
        </div>
      </section>

      {/* 6. Final Design & Dieline */}
      <section className="cs-section cs-goboult-final-section">
        <div className="cs-heading-with-sub">
          <h2 className="cs-heading cs-heading-purple">Final design</h2>
          <div className="cs-v-divider cs-divider-gold" />
          <p className="cs-subheading">
            The pack is made from recycled kraft board. Its raw, natural look also carries the
            sustainability idea behind the design.
          </p>
        </div>

        <div className="cs-goboult-dieline-wrap">
          <img
            src={dielinePackagingPng}
            alt="GoBoult final packaging dieline made from recycled kraft board with transparent character window"
            className="cs-goboult-dieline-img"
            loading="lazy"
          />
        </div>
      </section>

      {/* 7. Final Showcase: Full Bleed Unboxing Photo on Left + Brand Typography on Right */}
      <div className="cs-goboult-showcase-bleed-wrap">
        <section className="cs-goboult-showcase-inner">
          <div className="cs-goboult-showcase-photo-col">
            <img
              src={photoUnboxingPng}
              alt="GoBoult final packaging physical unboxing with retail competitor boxes"
              className="cs-goboult-unboxing-img"
              loading="lazy"
            />
          </div>

          <div className="cs-goboult-showcase-text-col">
            <h2 className="cs-goboult-showcase-title">GOBOULT</h2>
            <p className="cs-goboult-showcase-subtitle">The final packaging.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
