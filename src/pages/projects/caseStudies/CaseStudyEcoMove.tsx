import React from 'react'

import heroScrapbookPng from '../../../assets/projects/casestudies/ecomove/hero-scrapbook.png'
import heroScrapbookWebp from '../../../assets/projects/casestudies/ecomove/hero-scrapbook.webp'
import motorbikeRiderPng from '../../../assets/projects/casestudies/ecomove/motorbike-rider.png'
import motorbikeRiderWebp from '../../../assets/projects/casestudies/ecomove/motorbike-rider.webp'
import lightbulbCharacterPng from '../../../assets/projects/casestudies/ecomove/lightbulb-character.png'
import lightbulbCharacterWebp from '../../../assets/projects/casestudies/ecomove/lightbulb-character.webp'
import rutujaPortraitPng from '../../../assets/projects/casestudies/ecomove/rutuja-portrait.png'
import rutujaPortraitWebp from '../../../assets/projects/casestudies/ecomove/rutuja-portrait.webp'
import wireframePaperPng from '../../../assets/projects/casestudies/ecomove/wireframe-paper.png'
import wireframePaperWebp from '../../../assets/projects/casestudies/ecomove/wireframe-paper.webp'
import wireframeLowfiPng from '../../../assets/projects/casestudies/ecomove/wireframe-lowfi.png'
import wireframeLowfiWebp from '../../../assets/projects/casestudies/ecomove/wireframe-lowfi.webp'
import wireframeHifiPng from '../../../assets/projects/casestudies/ecomove/wireframe-hifi.png'
import wireframeHifiWebp from '../../../assets/projects/casestudies/ecomove/wireframe-hifi.webp'
import phoneShowcaseFanPng from '../../../assets/projects/casestudies/ecomove/phone-showcase-fan.png'

/**
 * Pure vector quotation mark matching Figma's exact double-comma glyph
 */
const PurpleQuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="52"
    height="40"
    viewBox="0 0 66 52"
    fill="#9084AA"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M14.5 50.5C6.5 50.5 0 44 0 36C0 23.5 10 11.5 25 3.5L28.5 8C18.5 13.5 13.5 20.5 12.5 26.5C14.5 25.5 17 25 19.5 25C26.5 25 32 30.5 32 37.5C32 44.5 26.5 50.5 19.5 50.5H14.5Z" />
    <path d="M48.5 50.5C40.5 50.5 34 44 34 36C34 23.5 44 11.5 59 3.5L62.5 8C52.5 13.5 47.5 20.5 46.5 26.5C48.5 25.5 51 25 53.5 25C60.5 25 66 30.5 66 37.5C66 44.5 60.5 50.5 53.5 50.5H48.5Z" />
  </svg>
)

/**
 * Pure vector badge glyphs matching the triangle, star, and square in Figma
 */
const CardBadgeGlyphs: React.FC = () => (
  <svg
    width="48"
    height="44"
    viewBox="0 0 48 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Rounded Triangle */}
    <path
      d="M24 4C24.8 2.6 26.8 2.6 27.6 4L34.5 16C35.3 17.4 34.3 19.2 32.7 19.2H18.9C17.3 19.2 16.3 17.4 17.1 16L24 4Z"
      fill="#C9C3CD"
    />
    {/* 8-point flower / badge at bottom left */}
    <g fill="#C9C3CD">
      <circle cx="15.5" cy="32.5" r="7.5" />
      <rect x="11.5" y="25" width="8" height="15" rx="2" transform="rotate(45 15.5 32.5)" />
      <rect x="11.5" y="25" width="8" height="15" rx="2" transform="rotate(-45 15.5 32.5)" />
    </g>
    {/* Rounded Square */}
    <rect x="27" y="25.5" width="14" height="14" rx="4" fill="#C9C3CD" />
  </svg>
)

/**
 * Pure vector directional arrow connecting the wireframe steps
 */
const FlowArrow: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="38"
    height="16"
    viewBox="0 0 38 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1 8H35M35 8L27 1.5M35 8L27 14.5"
      stroke="#9084AA"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const CaseStudyEcoMove: React.FC = () => {
  return (
    <div className="cs-article-container cs-ecomove-page" id="casestudy-ecomove">
      {/* 1. Hero Scrapbook Paper Collage */}
      <section className="cs-ecomove-hero-section">
        <div className="cs-hero-scrapbook-wrap">
          <picture>
            <source srcSet={heroScrapbookWebp} type="image/webp" />
            <img
              src={heroScrapbookPng}
              alt="EcoMove Scrapbook Paper Collage - Duration: 3 weeks"
              className="cs-hero-scrapbook-img"
            />
          </picture>
        </div>
      </section>

      {/* 2. Main Title & Core Problem with Motorbike Illustration */}
      <section className="cs-ecomove-section cs-ecomove-hero-sec">
        <h1 className="cs-ecomove-main-title">
          EcoMove — Rewarding Sustainable Travel to Campus
        </h1>

        <div className="cs-ecomove-hero-row">
          <div className="cs-ecomove-hero-lead-col">
            <p className="cs-ecomove-lead-text">
              Transportation is one of the biggest contributors to urban air pollution, yet
              sustainable alternatives like walking, cycling, and carpooling remain inconvenient,
              unrewarding, and easy to ignore.{' '}
              <span className="cs-ecomove-lead-highlight">
                Students default to private vehicles not out of apathy, but because there's no incentive to choose otherwise.
              </span>
            </p>
          </div>

          <div className="cs-ecomove-hero-visual-col">
            <picture>
              <source srcSet={motorbikeRiderWebp} type="image/webp" />
              <img
                src={motorbikeRiderPng}
                alt="Commuter on motorcycle with sustainable travel backdrop"
                className="cs-ecomove-motorbike-img"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* 3. Understanding the Gap */}
      <section className="cs-ecomove-section cs-ecomove-gap-sec">
        <div className="cs-ecomove-split-header">
          <h2 className="cs-ecomove-heading">Understanding the Gap</h2>
          <div className="cs-ecomove-header-quote-group">
            <PurpleQuoteIcon className="cs-ecomove-quote-mark-icon" />
            <div className="cs-ecomove-v-divider" />
            <p className="cs-ecomove-subheading">
              I started by asking why sustainable mobility isn't the default, and
              traced it back from pollution to habit to incentive.
            </p>
          </div>
        </div>

        <div className="cs-ecomove-gap-body">
          <div className="cs-ecomove-gap-visual">
            <picture>
              <source srcSet={lightbulbCharacterWebp} type="image/webp" />
              <img
                src={lightbulbCharacterPng}
                alt="Smiling lightbulb character with glasses illustration"
                className="cs-ecomove-lightbulb-img"
              />
            </picture>
          </div>

          <div className="cs-ecomove-cards-stack">
            <div className="cs-ecomove-card">
              <p className="cs-ecomove-card-text">
                <strong>Convenience wins by default</strong>, private vehicles solve traffic
                and parking stress even when people are aware of the pollution cost
              </p>
              <div className="cs-ecomove-card-badge">
                <CardBadgeGlyphs />
              </div>
            </div>

            <div className="cs-ecomove-card">
              <p className="cs-ecomove-card-text">
                Sustainable choices (walking, cycling) feel like a <strong>sacrifice, not a reward</strong>,
                so there's no pull toward them
              </p>
              <div className="cs-ecomove-card-badge">
                <CardBadgeGlyphs />
              </div>
            </div>

            <div className="cs-ecomove-card">
              <p className="cs-ecomove-card-text">
                Competitor apps like Betterpoint and MyBky show that <strong>point-based incentives</strong>
                {' '}can successfully shift daily commuting behavior
              </p>
              <div className="cs-ecomove-card-badge">
                <CardBadgeGlyphs />
              </div>
            </div>

            <div className="cs-ecomove-card">
              <p className="cs-ecomove-card-text">
                Students respond strongly to <strong>social recognition</strong>, leaderboards,
                rankings, and small tangible perks matter more than abstract environmental impact
              </p>
              <div className="cs-ecomove-card-badge">
                <CardBadgeGlyphs />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Who I'm Designing For (Persona) */}
      <section className="cs-ecomove-section cs-ecomove-persona-sec">
        <h2 className="cs-ecomove-heading">Who I'm Designing For</h2>
        <p className="cs-ecomove-persona-intro">
          I started by asking why sustainable mobility isn't the default, and traced it
          back from pollution to habit to incentive.
        </p>

        <div className="cs-ecomove-persona-split">
          {/* Left: Persona Details */}
          <div className="cs-ecomove-persona-details">
            <div className="cs-ecomove-persona-header">
              <span className="cs-ecomove-persona-label">Persona, trimmed:</span>
              <h3 className="cs-ecomove-persona-name">Rutuja, 20 ( College Student)</h3>
            </div>
            <p className="cs-ecomove-persona-context">
              Commutes 15 minutes by bike; frustrated by traffic and campus parking.
            </p>

            <div className="cs-ecomove-persona-h-divider" />

            <div className="cs-ecomove-persona-columns">
              <div className="cs-ecomove-persona-col">
                <h4 className="cs-ecomove-persona-col-title">Pain points:</h4>
                <ul className="cs-ecomove-bullet-list">
                  <li>Traffic and parking stress make her daily commute exhausting</li>
                  <li>Walking or cycling feels like extra effort with no real payoff</li>
                </ul>
              </div>

              <div className="cs-ecomove-persona-v-divider" />

              <div className="cs-ecomove-persona-col">
                <h4 className="cs-ecomove-persona-col-title">Motivations:</h4>
                <ul className="cs-ecomove-bullet-list">
                  <li>Wants recognition, competitive, checks leader boards</li>
                  <li>Responds to small, tangible rewards (free coffee, canteen perks)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Rutuja Portrait + Quote Box */}
          <div className="cs-ecomove-persona-visual-col">
            <picture>
              <source srcSet={rutujaPortraitWebp} type="image/webp" />
              <img
                src={rutujaPortraitPng}
                alt="Portrait sketch of Rutuja"
                className="cs-ecomove-rutuja-portrait"
              />
            </picture>

            <div className="cs-ecomove-rutuja-quote-box">
              <span className="cs-ecomove-quote-decor">“</span>
              <p className="cs-ecomove-rutuja-quote-text">
                Rutuja doesn’t need convincing that pollution is a problem, she needs{' '}
                <strong className="cs-ecomove-quote-accent">a reason to act</strong> on it every day.
              </p>
              <div className="cs-ecomove-quote-dots">...</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. From Sketch to Screen */}
      <section className="cs-ecomove-section cs-ecomove-wireframes-sec">
        <div className="cs-ecomove-split-header">
          <h2 className="cs-ecomove-heading cs-heading-two-lines">
            From Sketch<br />to Screen
          </h2>
          <div className="cs-ecomove-v-divider" />
          <p className="cs-ecomove-subheading">
            Started on paper to work through navigation and information hierarchy
            before touching Figma, card-based layout, tabbed menu, and a progress
            indicator toward the next reward.
          </p>
        </div>

        <div className="cs-ecomove-stages-row">
          {/* Stage 1: Paper Sketch */}
          <div className="cs-ecomove-stage-col">
            <div className="cs-ecomove-stage-visual">
              <picture>
                <source srcSet={wireframePaperWebp} type="image/webp" />
                <img
                  src={wireframePaperPng}
                  alt="Paper wireframe sketch showing navigation sidebar"
                  className="cs-ecomove-sketch-img"
                />
              </picture>
            </div>
            <h3 className="cs-ecomove-stage-title">Paper Sketch</h3>
            <p className="cs-ecomove-stage-desc">Exploring the layout</p>
          </div>

          {/* Connector Arrow 1 */}
          <div className="cs-ecomove-stage-arrow-wrap">
            <FlowArrow className="cs-ecomove-stage-arrow" />
          </div>

          {/* Stage 2: Low Fidelity */}
          <div className="cs-ecomove-stage-col">
            <div className="cs-ecomove-stage-visual">
              <picture>
                <source srcSet={wireframeLowfiWebp} type="image/webp" />
                <img
                  src={wireframeLowfiPng}
                  alt="Low Fidelity mobile wireframe mockup"
                  className="cs-ecomove-mockup-img"
                />
              </picture>
            </div>
            <h3 className="cs-ecomove-stage-title">Low Fidelity Wire frame</h3>
            <p className="cs-ecomove-stage-desc">
              Validating hierarchy, spacing and interaction flow.
            </p>
          </div>

          {/* Connector Arrow 2 */}
          <div className="cs-ecomove-stage-arrow-wrap">
            <FlowArrow className="cs-ecomove-stage-arrow" />
          </div>

          {/* Stage 3: High Fidelity */}
          <div className="cs-ecomove-stage-col">
            <div className="cs-ecomove-stage-visual">
              <picture>
                <source srcSet={wireframeHifiWebp} type="image/webp" />
                <img
                  src={wireframeHifiPng}
                  alt="High Fidelity mobile UI screen mockup"
                  className="cs-ecomove-mockup-img"
                />
              </picture>
            </div>
            <h3 className="cs-ecomove-stage-title">High Fidelity Wire frame</h3>
            <p className="cs-ecomove-stage-desc">Bringing the experience to life.</p>
          </div>
        </div>
      </section>

      {/* 6. Final Showcase: Left Purple Text Card + Right Half Phone Mockups */}
      <div className="cs-ecomove-showcase-bleed-wrap">
        <section className="cs-ecomove-showcase-inner">
          <div className="cs-ecomove-showcase-purple-card">
            <div className="cs-ecomove-showcase-text-content">
              <h2 className="cs-ecomove-handwritten-title">ECOMOVE</h2>
              <p className="cs-ecomove-showcase-quote">
                EcoMove motivates students to choose sustainable travel, walking, cycling,
                riding, or carpooling, over polluting transport. Every trip logged saves CO₂,
                earns points, and unlocks rewards like extra library days, canteen perks, and
                discounts. A leader board turns individual choices into a visible, collective
                push toward cleaner air."
              </p>
            </div>
          </div>

          <div className="cs-ecomove-showcase-fan-wrap">
            <img
              src={phoneShowcaseFanPng}
              alt="EcoMove mobile application screen showcase fanned collage"
              className="cs-ecomove-phone-fan-img"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
