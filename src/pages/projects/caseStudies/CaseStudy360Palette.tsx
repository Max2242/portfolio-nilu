import React from 'react'

// Import modular image assets
import heroScrapbookWebp from '../../../assets/projects/casestudies/360_palette/hero-scrapbook.webp'
import heroScrapbookPng from '../../../assets/projects/casestudies/360_palette/hero-scrapbook.png'
import productArtWebp from '../../../assets/projects/casestudies/360_palette/palette-product-art.webp'
import productArtPng from '../../../assets/projects/casestudies/360_palette/palette-product-art.png'
import waterContainerWebp from '../../../assets/projects/casestudies/360_palette/sketch-water-container.webp'
import waterContainerPng from '../../../assets/projects/casestudies/360_palette/sketch-water-container.png'
import paletteSketchWebp from '../../../assets/projects/casestudies/360_palette/sketch-palette.webp'
import paletteSketchPng from '../../../assets/projects/casestudies/360_palette/sketch-palette.png'
import brushHolderWebp from '../../../assets/projects/casestudies/360_palette/sketch-brush-holder.webp'
import brushHolderPng from '../../../assets/projects/casestudies/360_palette/sketch-brush-holder.png'
import gettingToFormWebp from '../../../assets/projects/casestudies/360_palette/sketches-getting-to-form.webp'
import gettingToFormPng from '../../../assets/projects/casestudies/360_palette/sketches-getting-to-form.png'
import inUseStep1Webp from '../../../assets/projects/casestudies/360_palette/in-use-step1.webp'
import inUseStep1Png from '../../../assets/projects/casestudies/360_palette/in-use-step1.png'
import inUseStep2Webp from '../../../assets/projects/casestudies/360_palette/in-use-step2.webp'
import inUseStep2Png from '../../../assets/projects/casestudies/360_palette/in-use-step2.png'
import inUseStep3Webp from '../../../assets/projects/casestudies/360_palette/in-use-step3.webp'
import inUseStep3Png from '../../../assets/projects/casestudies/360_palette/in-use-step3.png'
import showcasePhotoWebp from '../../../assets/projects/casestudies/360_palette/showcase-outdoor-palette.webp'
import showcasePhotoPng from '../../../assets/projects/casestudies/360_palette/showcase-outdoor-palette.png'
import catSittingWebp from '../../../assets/projects/casestudies/360_palette/cat-sitting.webp'
import catSittingPng from '../../../assets/projects/casestudies/360_palette/cat-sitting.png'

export const CaseStudy360Palette: React.FC = () => {
  return (
    <div className="cs-palette-page" id="casestudy-360-palette">
      {/* 1. Hero Scrapbook Collage */}
      <section className="cs-palette-hero-section">
        <div className="cs-hero-scrapbook-wrap">
          <picture>
            <source srcSet={heroScrapbookWebp} type="image/webp" />
            <img
              src={heroScrapbookPng}
              alt="360 Palette Scrapbook Collage - Duration 4 Weeks"
              className="cs-hero-scrapbook-img"
            />
          </picture>
        </div>
      </section>

      {/* 2. Objective Section */}
      <section className="cs-palette-section cs-objective-section">
        <div className="cs-palette-grid-row">
          <h2 className="cs-palette-heading cs-heading-left">Objective</h2>
        </div>

        {/* Olive Card Bleeding to Left Viewport Edge */}
        <div className="cs-bleed-left-wrap">
          <div className="cs-bleed-left-card cs-card-olive">
            <p className="cs-card-text">
              Most stationery cases are built to store, not to work from. This project started as an open brief to design a stationery/compass case, and narrowed, through research, into something more specific: a compact painting station for artists who work on the go.
            </p>
          </div>
        </div>

        {/* Centered Watercolor Palette Artwork */}
        <div className="cs-palette-product-visual">
          <picture>
            <source srcSet={productArtWebp} type="image/webp" />
            <img
              src={productArtPng}
              alt="360 Palette hexagonal layout with watercolor splash"
              className="cs-palette-product-art-img"
            />
          </picture>
        </div>
      </section>

      {/* 3. Redesign Section */}
      <section className="cs-palette-section cs-redesign-section">
        <div className="cs-palette-grid-row cs-justify-right">
          <h2 className="cs-palette-heading cs-heading-right">Redesign</h2>
        </div>

        {/* Olive Card Bleeding to Right Viewport Edge */}
        <div className="cs-bleed-right-wrap">
          <div className="cs-bleed-right-card cs-card-olive">
            <p className="cs-card-text">
              To design a compact, all-in-one watercolor palette that integrates water storage, brush storage, and color organization into a portable solution for artists on the go.
            </p>
          </div>
        </div>

        {/* 3 Redesign Columns */}
        <div className="cs-palette-grid-row">
          <div className="cs-redesign-cards-grid">
            {/* 1. Water Container */}
            <div className="cs-redesign-col">
              <div className="cs-col-header">
                <span className="cs-badge cs-badge-pink">1</span>
                <h3 className="cs-col-title">Water Container</h3>
              </div>
              <div className="cs-col-divider cs-divider-pink" />
              <div className="cs-sketch-card-box cs-box-pink">
                <picture>
                  <source srcSet={waterContainerWebp} type="image/webp" />
                  <img
                    src={waterContainerPng}
                    alt="Water container design wireframe sketch"
                    className="cs-sketch-img"
                  />
                </picture>
              </div>
            </div>

            {/* 2. Palette */}
            <div className="cs-redesign-col">
              <div className="cs-col-header">
                <span className="cs-badge cs-badge-orange">2</span>
                <h3 className="cs-col-title">Palette</h3>
              </div>
              <div className="cs-col-divider cs-divider-orange" />
              <div className="cs-sketch-card-box cs-box-orange">
                <picture>
                  <source srcSet={paletteSketchWebp} type="image/webp" />
                  <img
                    src={paletteSketchPng}
                    alt="Palette ergonomic thumb hole wireframe sketch"
                    className="cs-sketch-img"
                  />
                </picture>
              </div>
            </div>

            {/* 3. Brush Holder */}
            <div className="cs-redesign-col">
              <div className="cs-col-header">
                <span className="cs-badge cs-badge-cyan">3</span>
                <h3 className="cs-col-title">Brush Holder</h3>
              </div>
              <div className="cs-col-divider cs-divider-cyan" />
              <div className="cs-sketch-card-box cs-box-cyan">
                <picture>
                  <source srcSet={brushHolderWebp} type="image/webp" />
                  <img
                    src={brushHolderPng}
                    alt="Brush holder arrangement wireframe sketch"
                    className="cs-sketch-img"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Getting to the Form Section */}
      <section className="cs-palette-section cs-form-section">
        <div className="cs-palette-grid-row">
          <div className="cs-form-header-group">
            <h2 className="cs-palette-heading">Getting to the form</h2>
            <div className="cs-header-v-divider" />
            <p className="cs-form-subheading">
              Exploring the ways to bring together functions, water holder, palette, and brush holder into a compact and travel friendly form.
            </p>
          </div>
        </div>

        <div className="cs-palette-grid-row">
          <div className="cs-form-visual-wrap">
            <picture>
              <source srcSet={gettingToFormWebp} type="image/webp" />
              <img
                src={gettingToFormPng}
                alt="Getting to the form - shape exploration cutouts and radial mechanism sketches"
                className="cs-form-sketches-img"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* 5. In Use Section */}
      <section className="cs-palette-section cs-in-use-section">
        <div className="cs-palette-grid-row cs-justify-right">
          <div className="cs-in-use-header">
            <h2 className="cs-palette-heading cs-heading-right">In use</h2>
            <p className="cs-in-use-subheading">Simple steps to open and use your watercolor station.</p>
          </div>
        </div>

        {/* 3 Step Columns with Photos & Vertical Dividers */}
        <div className="cs-palette-grid-row">
          <div className="cs-in-use-grid-wrap">
            {/* Step 1: Hold it */}
            <div className="cs-in-use-step">
              <div className="cs-in-use-img-box">
                <picture>
                  <source srcSet={inUseStep1Webp} type="image/webp" />
                  <img
                    src={inUseStep1Png}
                    alt="Step 1: Hold it - Compact and lightweight design fits comfortably in your palm"
                    className="cs-in-use-img"
                  />
                </picture>
              </div>
              <div className="cs-step-content">
                <div className="cs-step-header">
                  <span className="cs-badge cs-badge-pink">1</span>
                  <h3 className="cs-step-title">Hold it</h3>
                </div>
                <p className="cs-step-text">
                  Compact and lightweight design fits comfortably in your palm
                </p>
              </div>
            </div>

            <div className="cs-in-use-v-divider" />

            {/* Step 2: Open the Cap */}
            <div className="cs-in-use-step">
              <div className="cs-in-use-img-box">
                <picture>
                  <source srcSet={inUseStep2Webp} type="image/webp" />
                  <img
                    src={inUseStep2Png}
                    alt="Step 2: Open the Cap - Remove the lid to unlock the redial comapartments"
                    className="cs-in-use-img"
                  />
                </picture>
              </div>
              <div className="cs-step-content">
                <div className="cs-step-header">
                  <span className="cs-badge cs-badge-orange">2</span>
                  <h3 className="cs-step-title">Open the Cap</h3>
                </div>
                <p className="cs-step-text">
                  Remove the lid to unlock the redial comapartments
                </p>
              </div>
            </div>

            <div className="cs-in-use-v-divider" />

            {/* Step 3: Stick it to the Center */}
            <div className="cs-in-use-step">
              <div className="cs-in-use-img-box">
                <picture>
                  <source srcSet={inUseStep3Webp} type="image/webp" />
                  <img
                    src={inUseStep3Png}
                    alt="Step 3: Stick it to the Center - Attach the cap to the center for a stable workplace"
                    className="cs-in-use-img"
                  />
                </picture>
              </div>
              <div className="cs-step-content">
                <div className="cs-step-header">
                  <span className="cs-badge cs-badge-cyan">3</span>
                  <h3 className="cs-step-title">Stick it to the Center</h3>
                </div>
                <p className="cs-step-text">
                  Attach the cap to the center for a stable workplace
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom Showcase: Cat Sticker + Outdoor Garden Photo + Olive Card */}
      <section className="cs-palette-section cs-bottom-showcase-section">
        <div className="cs-bottom-showcase-stage">
          {/* Olive Card Bleeding to Right Viewport Edge */}
          <div className="cs-bottom-olive-container">
            {/* Top-Left Inverted Scoop Corner SVG */}
            <svg
              className="cs-scoop-curve-svg"
              viewBox="0 0 120 120"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M 0 0 C 70 0 120 50 120 120 L 120 0 Z" fill="#B6B8A0" />
            </svg>

            <div className="cs-bottom-olive-content">
              <div className="cs-bottom-title-row">
                <h2 className="cs-handwritten-title">360 Palette</h2>
                <span className="cs-handwritten-sub">/ Water Color Holder</span>
              </div>

              <div className="cs-bottom-paragraphs">
                <p>
                  A compact, jar-shaped color palette designed for artists on the go. Thoughtfully crafted, it features a water-holder cap, a built-in brush slot, and six dedicated compartments for color cubes.
                </p>
                <p>
                  The 360 Palette is more than just a tool—it's your all-in-one creative companion, designed to make painting anywhere effortless and intuitive.
                </p>
              </div>
            </div>
          </div>

          {/* Left-Bleeding Outdoor Photo with Pinned Cat Sticker */}
          <div className="cs-showcase-photo-wrap">
            {/* Cat Sticker Pinned Directly to Photo Top Edge */}
            <div className="cs-cat-sticker-wrap">
              <picture>
                <source srcSet={catSittingWebp} type="image/webp" />
                <img
                  src={catSittingPng}
                  alt="Curious tabby cat sticker"
                  className="cs-cat-sticker-img"
                />
              </picture>
            </div>

            {/* Outdoor Garden Photograph */}
            <picture>
              <source srcSet={showcasePhotoWebp} type="image/webp" />
              <img
                src={showcasePhotoPng}
                alt="360 Palette held in hands while watercolor painting in garden with roses"
                className="cs-showcase-outdoor-img"
              />
            </picture>
          </div>
        </div>
      </section>
    </div>
  )
}


