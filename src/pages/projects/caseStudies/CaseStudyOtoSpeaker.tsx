import React from 'react'

import heroScrapbookWebp from '../../../assets/projects/casestudies/oto_speaker/hero-scrapbook.webp'
import heroScrapbookPng from '../../../assets/projects/casestudies/oto_speaker/hero-scrapbook.png'
import mujiLogoWebp from '../../../assets/projects/casestudies/oto_speaker/muji-logo.webp'
import mujiLogoPng from '../../../assets/projects/casestudies/oto_speaker/muji-logo.png'
import sketchesNarrowingWebp from '../../../assets/projects/casestudies/oto_speaker/sketches-narrowing.webp'
import sketchesNarrowingPng from '../../../assets/projects/casestudies/oto_speaker/sketches-narrowing.png'
import renderBlueprintsWebp from '../../../assets/projects/casestudies/oto_speaker/render-blueprints.webp'
import renderBlueprintsPng from '../../../assets/projects/casestudies/oto_speaker/render-blueprints.png'
import photoKitchenWebp from '../../../assets/projects/casestudies/oto_speaker/photo-kitchen.webp'
import photoKitchenPng from '../../../assets/projects/casestudies/oto_speaker/photo-kitchen.png'
import catSpeakerWebp from '../../../assets/projects/casestudies/oto_speaker/cat-speaker.webp'
import catSpeakerPng from '../../../assets/projects/casestudies/oto_speaker/cat-speaker.png'

export const CaseStudyOtoSpeaker: React.FC = () => {
  return (
    <div className="cs-article-container" id="casestudy-oto-speaker">
      {/* 1. Hero Scrapbook Collage */}
      <section className="cs-hero-section">
        <div className="cs-hero-scrapbook-wrap">
          <picture>
            <source srcSet={heroScrapbookWebp} type="image/webp" />
            <img
              src={heroScrapbookPng}
              alt="OTO Speaker Scrapbook Collage - Duration 4 Weeks"
              className="cs-hero-scrapbook-img"
            />
          </picture>
        </div>
      </section>

      {/* 2. Objective Section with MUJI brand mark */}
      <section className="cs-section cs-split-two-col">
        <div className="cs-col-text">
          <h2 className="cs-heading">Objective</h2>
          <p className="cs-lead-bold">
            A short study in reading MUJI's design grammar, then designing
            something new inside it.
          </p>
          <p className="cs-body-p">
            Some projects start with a problem. This one started with a question,
            could I understand a brand well enough to design something new that still
            felt like theirs? I chose MUJI, spent time studying what makes their
            products recognizably MUJI, then sketched my way into a concept of my own.
          </p>
        </div>

        <div className="cs-col-visual cs-muji-logo-wrap">
          <picture>
            <source srcSet={mujiLogoWebp} type="image/webp" />
            <img src={mujiLogoPng} alt="MUJI 無印良品 Logo" className="cs-muji-logo-img" />
          </picture>
        </div>
      </section>

      {/* 3. Narrowing Down Section - Full uncropped sketches with overlapping pill badge */}
      <section className="cs-section cs-narrowing-section">
        <div className="cs-narrowing-container">
          <picture>
            <source srcSet={sketchesNarrowingWebp} type="image/webp" />
            <img
              src={sketchesNarrowingPng}
              alt="Ideation sketches: controllers, hair dryer, earbuds, and conical speaker form"
              className="cs-narrowing-full-img"
            />
          </picture>

          {/* Grey text pill badge positioned OVER the left of the image */}
          <div className="cs-narrowing-pill-badge">
            <p className="cs-narrowing-pill-text">
              I sketched two directions MUJI's existing products, then products they don't make,
              testing whether I could design within their language, not just observe it.
            </p>
            <p className="cs-narrowing-pill-text">
              The speaker held up best: it could hang, store, and play, doing three things without
              breaking restraint.
            </p>
          </div>
        </div>
      </section>

      {/* 4 & 5. Orthographic Blueprints & Final Lifestyle Flow (No white gap, white background step) */}
      <section className="cs-section cs-oto-showcase-flow">
        {/* Upper Part: Blueprint Diagram Canvas with Glass Card */}
        <div className="cs-blueprint-canvas">
          <picture>
            <source srcSet={renderBlueprintsWebp} type="image/webp" />
            <img
              src={renderBlueprintsPng}
              alt="OTO Speaker orthographic blueprints, CMF and callout diagram"
              className="cs-blueprint-full-img"
            />
          </picture>

          {/* Transparent rectangular glass card with thin white border and editable text */}
          <div className="cs-blueprint-glass-card">
            <div className="cs-blueprint-glass-quote">
              /a speaker that hangs, stores, and plays, nothing more<br />
              <span className="cs-blueprint-glass-quote-indent">than it needs to be.</span>
            </div>

            <p className="cs-blueprint-glass-desc">
              Built around a single cone form, OTO keeps its function visible.
              An acoustic mesh face, two buttons, a small compartment underneath for the things you'd otherwise misplace.
              No casing to hide the mechanics, no decoration beyond what the object requires.
            </p>
          </div>
        </div>

        {/* Lower Part: Lifestyle Section with continuous slate left, white step right, and overlapping kitchen photo */}
        <div className="cs-lifestyle-flow-row">
          {/* Left column: Continuous dark slate card with handwritten title, text, and cat sticker */}
          <div className="cs-final-side-text-card">
            <div className="cs-final-title-group">
              <h2 className="cs-handwritten-title">OTO Speaker</h2>
              <span className="cs-handwritten-sub">/ Speaker</span>
            </div>

            <p className="cs-final-side-desc">
              This was never really about designing a new product, it was about learning to read a brand
              closely enough to design inside it. Restraint as a discipline, not a look.
            </p>

            <p className="cs-final-side-desc">
              The last step, photographing an object and rendering it, was the same instinct in practice:
              taking something raw and giving it just enough polish to read as intentional, without
              over-producing it.
            </p>

            {/* Pinned cat sticker sitting on the bottom-left */}
            <div className="cs-cat-sticker-pin">
              <picture>
                <source srcSet={catSpeakerWebp} type="image/webp" />
                <img
                  src={catSpeakerPng}
                  alt="Cat sticker looking up attentively"
                  className="cs-cat-sticker-img"
                />
              </picture>
            </div>
          </div>

          {/* Right column: White background step container */}
          <div className="cs-lifestyle-white-step-wrap">
            {/* The Kitchen Photo overlapping to the left onto the slate card */}
            <div className="cs-final-side-photo-wrap">
              <picture>
                <source srcSet={photoKitchenWebp} type="image/webp" />
                <img
                  src={photoKitchenPng}
                  alt="OTO Speaker hung on kitchen wall next to wooden shelf"
                  className="cs-final-side-photo-img"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
