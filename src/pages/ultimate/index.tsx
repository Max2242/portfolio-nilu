import { useEffect, useState } from 'react'

// Memory Photo Imports (WebP & PNG)
import spiritTrophyWebp from '../../assets/ultimate/spirit-trophy-stage.webp'
import spiritTrophyPng from '../../assets/ultimate/spirit-trophy-stage.png'
import firstJerseyWebp from '../../assets/ultimate/first-jersey-tiedye.webp'
import firstJerseyPng from '../../assets/ultimate/first-jersey-tiedye.png'
import mumbaiCoachingWebp from '../../assets/ultimate/mumbai-coaching.webp'
import mumbaiCoachingPng from '../../assets/ultimate/mumbai-coaching.png'
import audaSelfieWebp from '../../assets/ultimate/auda-track-selfie.webp'
import audaSelfiePng from '../../assets/ultimate/auda-track-selfie.png'
import audaRunnersWebp from '../../assets/ultimate/auda-practice-runners.webp'
import audaRunnersPng from '../../assets/ultimate/auda-practice-runners.png'
import nightTourneyWebp from '../../assets/ultimate/night-tournament.webp'
import nightTourneyPng from '../../assets/ultimate/night-tournament.png'
import puppyCuddleWebp from '../../assets/ultimate/puppy-cuddle.webp'
import puppyCuddlePng from '../../assets/ultimate/puppy-cuddle.png'
import teammatesHugWebp from '../../assets/ultimate/teammates-hug.webp'
import teammatesHugPng from '../../assets/ultimate/teammates-hug.png'
import ultimateChakraTeamWebp from '../../assets/ultimate/ultimate-chakra-team.webp'
import ultimateChakraTeamPng from '../../assets/ultimate/ultimate-chakra-team.png'
import chakraHighfiveWebp from '../../assets/ultimate/chakra-highfive.webp'
import chakraHighfivePng from '../../assets/ultimate/chakra-highfive.png'
import awardCeremonyWebp from '../../assets/ultimate/award-ceremony.webp'
import awardCeremonyPng from '../../assets/ultimate/award-ceremony.png'
import fourFriendsWebp from '../../assets/ultimate/four-friends.webp'
import fourFriendsPng from '../../assets/ultimate/four-friends.png'

// Transparent Doodle Annotation Imports
import doodleUltimateChakra from '../../assets/ultimate/doodle-ultimate-chakra.webp'
import doodleFirstJersey from '../../assets/ultimate/doodle-first-jersey.webp'
import doodleSpiritTrophy from '../../assets/ultimate/doodle-spirit-trophy.webp'
import doodleAudaPractice from '../../assets/ultimate/doodle-auda-practice.webp'
import doodleMumbaiCoaching from '../../assets/ultimate/doodle-mumbai-coaching.webp'

import './ultimate.css'

interface MemoryItem {
  id: string
  title: string
  subtitle: string
  tag: string
  description: string
  webp: string
  png: string
  alt: string
  isCenterpiece?: boolean
  desktopStyle: {
    left: string
    top: string
    width: string
    height?: string
    zIndex: number
    rotate: string
  }
}

const memoriesData: MemoryItem[] = [
  {
    id: 'spirit-trophy-stage',
    title: 'Spirit of the Game Trophy 2025',
    subtitle: 'Championship Stage & National League',
    tag: 'Spirit Trophy 2025',
    description:
      'The crowning moment for Ultimate Chakra. Winning the Spirit Trophy 2025 celebrating competitive excellence, mutual respect, integrity, and pure love of the sport.',
    webp: spiritTrophyWebp,
    png: spiritTrophyPng,
    alt: 'Ultimate Chakra team celebrating on stage with gold medals and the golden Spirit Trophy 2025',
    isCenterpiece: true,
    desktopStyle: {
      left: '23.8%',
      top: '25.6%',
      width: '51.8%',
      height: '47.2%',
      zIndex: 10,
      rotate: '0deg',
    },
  },
  {
    id: 'night-tournament',
    title: 'Under the Stadium Floodlights',
    subtitle: 'Night League Showdown',
    tag: 'Night Tournament',
    description:
      'Late-night tournament showdown under glowing floodlights with high energy, glowing discs, and unmatched team sideline cheers.',
    webp: nightTourneyWebp,
    png: nightTourneyPng,
    alt: 'Team posing on pitch under stadium lights at night tournament holding discs',
    desktopStyle: {
      left: '22.6%',
      top: '9.2%',
      width: '15.5%',
      zIndex: 12,
      rotate: '-1.5deg',
    },
  },
  {
    id: 'puppy-cuddle',
    title: 'Team Mascot Love',
    subtitle: 'Sideline Supporter',
    tag: 'Puppy Cuddles',
    description:
      'Wholesome sideline puppy cuddles between intense bracket rounds. The unofficial four-legged mascot of our championship run.',
    webp: puppyCuddleWebp,
    png: puppyCuddlePng,
    alt: 'Teammate in tournament jersey holding and hugging a cute puppy mascot',
    desktopStyle: {
      left: '38.4%',
      top: '11.8%',
      width: '5.8%',
      zIndex: 13,
      rotate: '2deg',
    },
  },
  {
    id: 'teammates-hug',
    title: 'Golden Hour Victory',
    subtitle: 'Teammate Bond',
    tag: 'Golden Hour',
    description:
      'Celebrating another hard-earned practice victory under the warm afternoon sun. The bond that makes this team a true family.',
    webp: teammatesHugWebp,
    png: teammatesHugPng,
    alt: 'Two teammates sharing a warm embrace and smile on the practice field lawn',
    desktopStyle: {
      left: '17.6%',
      top: '20.2%',
      width: '6.6%',
      zIndex: 11,
      rotate: '-2deg',
    },
  },
  {
    id: 'ultimate-chakra-team',
    title: 'Ultimate Chakra Squad',
    subtitle: 'Home Turf Line-Up',
    tag: 'Ultimate Chakra',
    description:
      'Full squad gathered on home turf before departure for the tournament season. Dedicated, passionate, and ready to fly.',
    webp: ultimateChakraTeamWebp,
    png: ultimateChakraTeamPng,
    alt: 'Ultimate Chakra squad standing together on campus lawn in front of tree and building',
    desktopStyle: {
      left: '7.8%',
      top: '35.4%',
      width: '13.0%',
      zIndex: 12,
      rotate: '1deg',
    },
  },
  {
    id: 'chakra-highfive',
    title: 'Endzone Celebration',
    subtitle: 'Point Scored',
    tag: 'Spirit & Action',
    description:
      'A celebratory high-five right after an athletic layout catch in the endzone. Pure energy and shared joy on the pitch.',
    webp: chakraHighfiveWebp,
    png: chakraHighfivePng,
    alt: 'Two players high-fiving on the field after scoring a disc point',
    desktopStyle: {
      left: '16.2%',
      top: '47.6%',
      width: '7.3%',
      zIndex: 14,
      rotate: '-1deg',
    },
  },
  {
    id: 'first-jersey-tiedye',
    title: 'First Jersey of the Team',
    subtitle: 'Campus Lawn Unveiling',
    tag: 'First Jersey of the team',
    description:
      'The day our custom blue tie-dye swirl jerseys arrived! Standing proudly on campus in the colors that started our club legacy.',
    webp: firstJerseyWebp,
    png: firstJerseyPng,
    alt: 'Ultimate Chakra team lined up on lawn in their first custom blue tie-dye swirl jerseys',
    desktopStyle: {
      left: '15.7%',
      top: '67.6%',
      width: '21.8%',
      zIndex: 15,
      rotate: '-0.8deg',
    },
  },
  {
    id: 'award-ceremony',
    title: 'Podium & Trophy Ceremony',
    subtitle: 'Stage Recognition',
    tag: 'Award Ceremony',
    description:
      'Receiving honors, tournament medals, and certificates on stage from the tournament directors.',
    webp: awardCeremonyWebp,
    png: awardCeremonyPng,
    alt: 'Teammates receiving medals and trophy during official podium ceremony on stage',
    desktopStyle: {
      left: '44.1%',
      top: '79.2%',
      width: '8.0%',
      zIndex: 12,
      rotate: '1deg',
    },
  },
  {
    id: 'four-friends',
    title: 'Chakra Core Friends',
    subtitle: 'Celebration Banquet',
    tag: 'Friends & Family',
    description:
      'Dressed up for the post-season banquet and celebrating friendships made through countless practices, road trips, and championships.',
    webp: fourFriendsWebp,
    png: fourFriendsPng,
    alt: 'Friends smiling together in blue and white printed outfits at post-tournament celebration',
    desktopStyle: {
      left: '52.4%',
      top: '76.8%',
      width: '6.9%',
      zIndex: 13,
      rotate: '-1.5deg',
    },
  },
  {
    id: 'mumbai-coaching',
    title: 'Coaching Session at Mumbai',
    subtitle: 'Advanced Clinic & Intensive Drills',
    tag: 'Coaching Session at Mumbai',
    description:
      'Road trip to Mumbai for elite coaching, disc handlers workshop, and vertical stack masterclasses in vibrant pink and teal kits.',
    webp: mumbaiCoachingWebp,
    png: mumbaiCoachingPng,
    alt: 'Team posing together on grass in pink and teal jerseys holding frisbee at Mumbai coaching session',
    desktopStyle: {
      left: '67.5%',
      top: '67.6%',
      width: '17.4%',
      zIndex: 14,
      rotate: '1.2deg',
    },
  },
  {
    id: 'auda-track-selfie',
    title: 'AUDA Track Conditioning',
    subtitle: 'Sprint Ladders & Conditioning',
    tag: 'AUDA Practice with AU',
    description:
      'Early morning conditioning, sprint ladders, and endurance circuits at the AUDA running track with Ahmedabad University teammates.',
    webp: audaSelfieWebp,
    png: audaSelfiePng,
    alt: 'Large smiling group selfie of teammates on running track under bright sunny morning',
    desktopStyle: {
      left: '72.5%',
      top: '18.5%',
      width: '13.2%',
      zIndex: 13,
      rotate: '-1.5deg',
    },
  },
  {
    id: 'auda-practice-runners',
    title: 'Deep Cut Disc Chasing',
    subtitle: 'Practice Drills on Turf',
    tag: 'Chasing the Huck',
    description:
      'Explosive deep cuts and tracking the flying disc across the field during practice drill reps.',
    webp: audaRunnersWebp,
    png: audaRunnersPng,
    alt: 'Player sprinting across green field chasing flying white frisbee disc in the air',
    desktopStyle: {
      left: '75.5%',
      top: '35.2%',
      width: '7.9%',
      zIndex: 11,
      rotate: '1.8deg',
    },
  },
]

interface DoodleItem {
  id: string
  img: string
  alt: string
  desktopStyle: {
    left: string
    top: string
    width: string
  }
}

const doodleItems: DoodleItem[] = [
  {
    id: 'doodle-ultimate-chakra',
    img: doodleUltimateChakra,
    alt: 'Ultimate Chakra handwritten doodle note with arching arrow',
    desktopStyle: {
      left: '4.2%',
      top: '52.0%',
      width: '12.0%',
    },
  },
  {
    id: 'doodle-first-jersey',
    img: doodleFirstJersey,
    alt: 'First Jersey of the team handwritten annotation with curved arrow',
    desktopStyle: {
      left: '2.5%',
      top: '78.5%',
      width: '15.5%',
    },
  },
  {
    id: 'doodle-spirit-trophy',
    img: doodleSpiritTrophy,
    alt: 'Spirit Trophy 2025 handwritten annotation with curved spiral arrow pointing to trophy',
    desktopStyle: {
      left: '54.0%',
      top: '64.0%',
      width: '15.0%',
    },
  },
  {
    id: 'doodle-auda-practice',
    img: doodleAudaPractice,
    alt: 'AUDA Practice with AU handwritten annotation with high arching arrow',
    desktopStyle: {
      left: '81.5%',
      top: '11.5%',
      width: '16.5%',
    },
  },
  {
    id: 'doodle-mumbai-coaching',
    img: doodleMumbaiCoaching,
    alt: 'Coaching Session at Mumbai handwritten annotation with curved loop arrow',
    desktopStyle: {
      left: '82.0%',
      top: '68.0%',
      width: '16.5%',
    },
  },
]

function UltimatePage() {
  const [selectedMemoryIndex, setSelectedMemoryIndex] = useState<number | null>(null)

  const activeMemory = selectedMemoryIndex !== null ? memoriesData[selectedMemoryIndex] : null

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedMemoryIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMemoryIndex(null)
      } else if (e.key === 'ArrowRight') {
        setSelectedMemoryIndex((prev) => (prev !== null ? (prev + 1) % memoriesData.length : null))
      } else if (e.key === 'ArrowLeft') {
        setSelectedMemoryIndex((prev) =>
          prev !== null ? (prev - 1 + memoriesData.length) % memoriesData.length : null
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedMemoryIndex])

  const openLightbox = (index: number) => {
    setSelectedMemoryIndex(index)
  }

  const closeLightbox = () => {
    setSelectedMemoryIndex(null)
  }

  const nextMemory = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedMemoryIndex((prev) => (prev !== null ? (prev + 1) % memoriesData.length : null))
  }

  const prevMemory = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedMemoryIndex((prev) =>
      prev !== null ? (prev - 1 + memoriesData.length) % memoriesData.length : null
    )
  }

  return (
    <div className="ultimate-page-wrapper" aria-label="Ultimate Frisbee Scrapbook">
      {/* Header bar */}
      <header className="scrapbook-header">
        <div className="scrapbook-title-group">
          <h1 className="scrapbook-heading">Ultimate Chakra</h1>
          <span className="scrapbook-subhead">Spirit of the Game • 2025</span>
        </div>
        <div className="scrapbook-hint" aria-hidden="true">
          <span className="hint-dot" />
          <span>Click any photo to explore memory</span>
        </div>
      </header>

      {/* Desktop Canvas (1900 x 1080 Proportional Collage) */}
      <div className="scrapbook-canvas-container" aria-label="Interactive Scrapbook Canvas">
        <div className="scrapbook-canvas" role="region" aria-label="Frisbee Memories Scrapboard">
          {/* Photos */}
          {memoriesData.map((item, index) => (
            <article
              key={item.id}
              className={`scrapbook-polaroid ${item.isCenterpiece ? 'is-centerpiece' : ''}`}
              style={{
                left: item.desktopStyle.left,
                top: item.desktopStyle.top,
                width: item.desktopStyle.width,
                height: item.desktopStyle.height || 'auto',
                zIndex: item.desktopStyle.zIndex,
                transform: `rotate(${item.desktopStyle.rotate})`,
              }}
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openLightbox(index)
                }
              }}
              tabIndex={0}
              role="button"
              aria-haspopup="dialog"
              aria-label={`View photo: ${item.title}`}
            >
              <div className="polaroid-img-wrap">
                <picture>
                  <source srcSet={item.webp} type="image/webp" />
                  <img
                    src={item.png}
                    alt={item.alt}
                    className="polaroid-img"
                    loading={item.isCenterpiece ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </picture>
              </div>

              <div className="polaroid-hover-badge" aria-hidden="true">
                <span className="badge-tag">{item.tag}</span>
                <svg className="badge-expand-icon" viewBox="0 0 24 24">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
              </div>
            </article>
          ))}

          {/* Transparent Doodle Annotations & Curved Arrows */}
          {doodleItems.map((doodle) => (
            <div
              key={doodle.id}
              className="doodle-annotation"
              style={{
                left: doodle.desktopStyle.left,
                top: doodle.desktopStyle.top,
                width: doodle.desktopStyle.width,
              }}
              aria-hidden="true"
            >
              <img src={doodle.img} alt={doodle.alt} className="doodle-img-asset" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile & Tablet Responsive Feed (< 1024px) */}
      <div className="scrapbook-mobile-feed" role="feed" aria-label="Mobile Scrapbook Feed">
        {memoriesData.map((item, index) => (
          <article
            key={`mobile-${item.id}`}
            className={`mobile-card ${index % 2 === 0 ? 'tilt-left' : 'tilt-right'}`}
            onClick={() => openLightbox(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                openLightbox(index)
              }
            }}
            tabIndex={0}
            role="button"
            aria-haspopup="dialog"
            aria-label={`View memory: ${item.title}`}
          >
            <div className="mobile-card-img-wrap">
              <picture>
                <source srcSet={item.webp} type="image/webp" />
                <img
                  src={item.png}
                  alt={item.alt}
                  className="mobile-card-img"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="mobile-card-meta">
              <span className="mobile-card-tag">{item.tag}</span>
              <h2 className="mobile-card-title">{item.title}</h2>
              <p className="mobile-card-desc">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Lightbox Modal */}
      {activeMemory && (
        <div
          className="lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activeMemory.title}
        >
          <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Close photo preview"
            >
              ×
            </button>

            <div className="lightbox-media">
              <button
                type="button"
                className="lightbox-nav-btn prev"
                onClick={prevMemory}
                aria-label="Previous memory"
              >
                ‹
              </button>

              <picture>
                <source srcSet={activeMemory.webp} type="image/webp" />
                <img src={activeMemory.png} alt={activeMemory.alt} className="lightbox-img" />
              </picture>

              <button
                type="button"
                className="lightbox-nav-btn next"
                onClick={nextMemory}
                aria-label="Next memory"
              >
                ›
              </button>
            </div>

            <div className="lightbox-info">
              <div className="lightbox-tag-row">
                <span className="lightbox-handwritten-tag">{activeMemory.tag}</span>
                <span className="lightbox-counter">
                  {(selectedMemoryIndex ?? 0) + 1} / {memoriesData.length}
                </span>
              </div>
              <h2 className="lightbox-title">{activeMemory.title}</h2>
              <p className="lightbox-desc">{activeMemory.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UltimatePage
