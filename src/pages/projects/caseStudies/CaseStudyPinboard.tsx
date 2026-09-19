import React from 'react'

import heroScrapbookWebp from '../../../assets/projects/casestudies/pinboard/hero-scrapbook.webp'
import heroScrapbookPng from '../../../assets/projects/casestudies/pinboard/hero-scrapbook.png'
import chartDonut1Webp from '../../../assets/projects/casestudies/pinboard/chart-donut-1.webp'
import chartDonut1Png from '../../../assets/projects/casestudies/pinboard/chart-donut-1.png'
import chartDonut2Webp from '../../../assets/projects/casestudies/pinboard/chart-donut-2.webp'
import chartDonut2Png from '../../../assets/projects/casestudies/pinboard/chart-donut-2.png'
import avatarStudentWebp from '../../../assets/projects/casestudies/pinboard/avatar-student.webp'
import avatarStudentPng from '../../../assets/projects/casestudies/pinboard/avatar-student.png'
import avatarStaffWebp from '../../../assets/projects/casestudies/pinboard/avatar-staff.webp'
import avatarStaffPng from '../../../assets/projects/casestudies/pinboard/avatar-staff.png'
import photosMockupsWebp from '../../../assets/projects/casestudies/pinboard/photos-mockups.webp'
import photosMockupsPng from '../../../assets/projects/casestudies/pinboard/photos-mockups.png'
import photosFinalWebp from '../../../assets/projects/casestudies/pinboard/photos-final-prototype.webp'
import photosFinalPng from '../../../assets/projects/casestudies/pinboard/photos-final-prototype.png'
import renderStudioWebp from '../../../assets/projects/casestudies/pinboard/render-studio.webp'
import renderStudioPng from '../../../assets/projects/casestudies/pinboard/render-studio.png'
import catStretchingWebp from '../../../assets/projects/casestudies/pinboard/cat-stretching.webp'
import catStretchingPng from '../../../assets/projects/casestudies/pinboard/cat-stretching.png'

export const CaseStudyPinboard: React.FC = () => {
  return (
    <div className="cs-article-container" id="casestudy-pinboard">
      {/* 1. Hero Scrapbook Collage */}
      <section className="cs-hero-section">
        <div className="cs-hero-scrapbook-wrap">
          <picture>
            <source srcSet={heroScrapbookWebp} type="image/webp" />
            <img
              src={heroScrapbookPng}
              alt="ConverPinboard Scrapbook Collage - Duration 3 Weeks"
              className="cs-hero-scrapbook-img"
            />
          </picture>
        </div>
      </section>

      {/* 2. Objective & Research Survey */}
      <section className="cs-section">
        <div className="cs-heading-with-sub">
          <h2 className="cs-heading">Objective</h2>
          <div className="cs-v-divider cs-divider-teal" />
          <p className="cs-subheading">
            ...difficult to move, and 70% said they added visual clutter to the room.
            Both point to the same thing: the boards were adding cognitive load instead of reducing it.
          </p>
        </div>

        <div className="cs-donuts-grid">
          <div className="cs-donut-card">
            <picture>
              <source srcSet={chartDonut1Webp} type="image/webp" />
              <img
                src={chartDonut1Png}
                alt="Donut chart: 47.8% Burden to move, 34.8% Neutral, 17.4% Easy"
                className="cs-donut-img"
              />
            </picture>
            <div className="cs-callout-pill">
              <p>
                Nearly half of the respondents (about 50%) feel that moving the boards is burdensome
              </p>
            </div>
          </div>

          <div className="cs-donut-card">
            <picture>
              <source srcSet={chartDonut2Webp} type="image/webp" />
              <img
                src={chartDonut2Png}
                alt="Donut chart: 69.6% Visual Clutter, 26.1% Moderate, 4.3% Minimal"
                className="cs-donut-img"
              />
            </picture>
            <div className="cs-callout-pill">
              <p>
                Nearly, 70% of students feel pin boards clutter classrooms and increase
                cognitive load, reducing focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. For Whom (Personas) */}
      <section className="cs-section">
        <div className="cs-heading-with-sub">
          <h2 className="cs-heading">For Whom</h2>
          <div className="cs-v-divider cs-divider-teal" />
          <p className="cs-subheading">Designed to meet the needs of both students and educators.</p>
        </div>

        <div className="cs-personas-two-col">
          {/* Student Persona Card */}
          <div className="cs-persona-border-card cs-border-teal">
            <div className="cs-persona-top-row">
              <div className="cs-avatar-wrap">
                <picture>
                  <source srcSet={avatarStudentWebp} type="image/webp" />
                  <img src={avatarStudentPng} alt="Student avatar" className="cs-avatar-img" />
                </picture>
              </div>
              <div className="cs-persona-meta">
                <h3 className="cs-persona-role">Student</h3>
                <span className="cs-age-badge">Age 10-21</span>
              </div>
            </div>

            <div className="cs-persona-section-row">
              <div className="cs-persona-icon-col">🎯</div>
              <div className="cs-persona-content-col">
                <strong>Needs :</strong>
                <ul className="cs-persona-bullets">
                  <li>Display their work</li>
                  <li>Brainstorm Ideas</li>
                </ul>
              </div>
            </div>

            <div className="cs-persona-section-row">
              <div className="cs-persona-icon-col">⚠️</div>
              <div className="cs-persona-content-col">
                <strong>Pain points :</strong>
                <ul className="cs-persona-bullets">
                  <li>Takes space in the classroom</li>
                  <li>Alignment of the content</li>
                  <li>Tough to move</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Staff Persona Card */}
          <div className="cs-persona-border-card cs-border-orange">
            <div className="cs-persona-top-row">
              <div className="cs-avatar-wrap">
                <picture>
                  <source srcSet={avatarStaffWebp} type="image/webp" />
                  <img src={avatarStaffPng} alt="Staff avatar" className="cs-avatar-img" />
                </picture>
              </div>
              <div className="cs-persona-meta">
                <h3 className="cs-persona-role">Staff</h3>
                <span className="cs-age-badge">Age 25-30</span>
              </div>
            </div>

            <div className="cs-persona-section-row">
              <div className="cs-persona-icon-col">🎯</div>
              <div className="cs-persona-content-col">
                <strong>Needs :</strong>
                <ul className="cs-persona-bullets">
                  <li>Moving it from one place to other</li>
                </ul>
              </div>
            </div>

            <div className="cs-persona-section-row">
              <div className="cs-persona-icon-col">⚠️</div>
              <div className="cs-persona-content-col">
                <strong>Pain points :</strong>
                <ul className="cs-persona-bullets">
                  <li>Takes space in the classroom</li>
                  <li>Alignment of the content</li>
                  <li>Tough to move</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. User Journey (5 Steps) */}
      <section className="cs-section">
        <div className="cs-heading-with-sub">
          <h2 className="cs-heading">User Journey</h2>
          <div className="cs-v-divider cs-divider-teal" />
          <p className="cs-subheading">How do users generally use the board?</p>
        </div>

        <div className="cs-journey-five-steps">
          <div className="cs-journey-step-card">
            <span className="cs-journey-badge cs-badge-teal">01</span>
            <h4 className="cs-journey-step-title">PLAN LAYOUT</h4>
            <p className="cs-journey-step-desc">
              Student create a rough layout for the pinup
            </p>
          </div>

          <div className="cs-journey-step-card">
            <span className="cs-journey-badge cs-badge-green">02</span>
            <h4 className="cs-journey-step-title">PINS</h4>
            <p className="cs-journey-step-desc">Bring out the pins</p>
          </div>

          <div className="cs-journey-step-card">
            <span className="cs-journey-badge cs-badge-orange">03</span>
            <h4 className="cs-journey-step-title">HEIGHT ADJUST</h4>
            <p className="cs-journey-step-desc">
              They step on the base or a stool according to their height
            </p>
          </div>

          <div className="cs-journey-step-card">
            <span className="cs-journey-badge cs-badge-purple">04</span>
            <h4 className="cs-journey-step-title">ALIGNMENT</h4>
            <p className="cs-journey-step-desc">
              Ask their friends to check the alignment
            </p>
          </div>

          <div className="cs-journey-step-card">
            <span className="cs-journey-badge cs-badge-blue">05</span>
            <h4 className="cs-journey-step-title">PIN UP</h4>
            <p className="cs-journey-step-desc">Securely attach all design materials</p>
          </div>
        </div>
      </section>

      {/* 5. Mockup & Physical Testing */}
      <section className="cs-section">
        <h2 className="cs-heading">Mockup</h2>
        <div className="cs-prototype-strip">
          <picture>
            <source srcSet={photosMockupsWebp} type="image/webp" />
            <img
              src={photosMockupsPng}
              alt="4 physical prototype mockup folding stages"
              className="cs-strip-img"
            />
          </picture>
        </div>

        <div className="cs-critique-box">
          <h4 className="cs-critique-title">Problems:</h4>
          <ul className="cs-critique-list">
            <li>Hinges create multiple open gaps, making the setup less suitable for use as a table.</li>
            <li>Need to explore the right pulling mechanism and joinery for stable leg support.</li>
            <li>A solution is required to ensure the board remains securely vertical when not in use.</li>
          </ul>
        </div>

        <h2 className="cs-heading cs-mt-2">Final Prototype</h2>
        <div className="cs-prototype-strip">
          <picture>
            <source srcSet={photosFinalWebp} type="image/webp" />
            <img
              src={photosFinalPng}
              alt="4 final refined prototype joinery stages"
              className="cs-strip-img"
            />
          </picture>
        </div>

        <div className="cs-critique-box cs-critique-success">
          <h4 className="cs-critique-title">Changes made:</h4>
          <ul className="cs-critique-list">
            <li>Hinges create multiple open gaps therefore with sleek modular inbuilt joinery.</li>
            <li>A solution that ensures that the board remains securely vertical when not in use yet can be folded easily in a table.</li>
          </ul>
        </div>
      </section>

      {/* 6. Final Showcase in Blue Container */}
      <section className="cs-final-split-section cs-bg-cobalt">
        <div className="cs-final-image-col">
          <picture>
            <source srcSet={renderStudioWebp} type="image/webp" />
            <img
              src={renderStudioPng}
              alt="Convertible Pinboard deployed in modern educational studio"
              className="cs-studio-photo"
            />
          </picture>
        </div>

        <div className="cs-final-text-col">
          <h2 className="cs-handwritten-title cs-text-white">CONVERTIBLE PIN BOARD</h2>

          <p className="cs-final-desc cs-text-light">
            I tested the final prototype with 23 users. Most responded well to the dual-use
            function, one user called the re-usability "the best part," another said it felt
            less bulky once folded down.
          </p>

          <p className="cs-final-desc cs-text-light">
            But it wasn't a clean result. Several people found the folded-table position
            uncomfortable, especially anyone taller, the fold angle doesn't leave enough
            legroom underneath. That's the fix I'd prioritize next: adjusting the angle
            without losing the compactness that made the fold work in the first place.
          </p>

          <div className="cs-cat-bottom-right">
            <picture>
              <source srcSet={catStretchingWebp} type="image/webp" />
              <img src={catStretchingPng} alt="Cat stretching on blue floor" className="cs-cat-img" />
            </picture>
          </div>
        </div>
      </section>
    </div>
  )
}
