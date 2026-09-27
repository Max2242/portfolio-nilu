import { useEffect, useRef, useState } from 'react'

// Memory Photo Imports (WebP & PNG)
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
  aspectRatio: number
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
  // --- 1. Landscape Memories Series (1 to 7) ---
  {
    id: 'spirit-trophy-stage',
    title: 'Spirit of the Game Trophy 2025',
    subtitle: 'Championship Stage & National League',
    tag: 'Spirit Trophy 2025',
    description: 'First time at NCUC 2025 and won the award.',
    webp: spiritTrophyPng,
    png: spiritTrophyPng,
    alt: 'Ultimate Chakra team celebrating on stage with gold medals and the golden Spirit Trophy 2025',
    aspectRatio: 1.931,
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
    aspectRatio: 1.756,
    desktopStyle: {
      left: '22.6%',
      top: '9.2%',
      width: '15.5%',
      zIndex: 12,
      rotate: '-1.5deg',
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
    aspectRatio: 1.908,
    desktopStyle: {
      left: '7.8%',
      top: '35.4%',
      width: '13.0%',
      zIndex: 12,
      rotate: '1deg',
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
    aspectRatio: 2.05,
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
    aspectRatio: 1.169,
    desktopStyle: {
      left: '44.1%',
      top: '79.2%',
      width: '8.0%',
      zIndex: 12,
      rotate: '1deg',
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
    aspectRatio: 1.919,
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
    aspectRatio: 1.5,
    desktopStyle: {
      left: '72.5%',
      top: '18.5%',
      width: '13.2%',
      zIndex: 13,
      rotate: '-1.5deg',
    },
  },

  // --- 2. Portrait Memories Series (8 to 12) ---
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
    aspectRatio: 0.714,
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
    aspectRatio: 0.708,
    desktopStyle: {
      left: '17.6%',
      top: '20.2%',
      width: '6.6%',
      zIndex: 11,
      rotate: '-2deg',
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
    aspectRatio: 0.758,
    desktopStyle: {
      left: '16.2%',
      top: '47.6%',
      width: '7.3%',
      zIndex: 14,
      rotate: '-1deg',
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
    aspectRatio: 0.813,
    desktopStyle: {
      left: '52.4%',
      top: '76.8%',
      width: '6.9%',
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
    aspectRatio: 0.938,
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
  const [isClosing, setIsClosing] = useState(false)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const backdropRef = useRef<HTMLDivElement | null>(null)
  const hasSmartAnimatedRef = useRef(false)
  const originRectRef = useRef<{
    x: number
    y: number
    width: number
    height: number
    rotate: string
  } | null>(null)

  const activeMemory = selectedMemoryIndex !== null ? memoriesData[selectedMemoryIndex] : null

  // Capture origin coordinates on canvas for smooth 900ms smart animate
  const openLightbox = (index: number, e?: React.MouseEvent | React.KeyboardEvent) => {
    const rotate = memoriesData[index].desktopStyle.rotate || '0deg'
    let rect: DOMRect | null = null

    if (e && e.currentTarget) {
      const targetEl = e.currentTarget as HTMLElement
      rect = targetEl.getBoundingClientRect()
    } else {
      const el = document.querySelector(`[data-memory-id="${memoriesData[index].id}"]`)
      if (el) {
        rect = el.getBoundingClientRect()
      }
    }

    if (rect) {
      originRectRef.current = {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
        rotate,
      }
    } else {
      originRectRef.current = null
    }

    hasSmartAnimatedRef.current = false
    setIsClosing(false)
    setSelectedMemoryIndex(index)
  }

  // Update origin reference when navigating between memories inside modal
  const updateOriginForIndex = (index: number) => {
    const el = document.querySelector(`[data-memory-id="${memoriesData[index].id}"]`)
    if (el) {
      const rect = el.getBoundingClientRect()
      originRectRef.current = {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
        rotate: memoriesData[index].desktopStyle.rotate || '0deg',
      }
    }
  }

  // 900ms FLIP Smart Animate on modal mount
  useEffect(() => {
    if (selectedMemoryIndex === null || isClosing) return

    // Don't re-FLIP from canvas if already open and navigating
    if (hasSmartAnimatedRef.current) return

    const dialog = dialogRef.current
    const backdrop = backdropRef.current
    const origin = originRectRef.current

    if (!dialog) return

    if (!origin) {
      dialog.style.opacity = '1'
      dialog.style.transform = 'translate3d(0, 0, 0) scale(1) rotate(0deg)'
      if (backdrop) backdrop.style.opacity = '1'
      hasSmartAnimatedRef.current = true
      return
    }

    // Measure target dialog
    const targetRect = dialog.getBoundingClientRect()
    const originCenterX = origin.x + origin.width / 2
    const originCenterY = origin.y + origin.height / 2
    const targetCenterX = targetRect.left + targetRect.width / 2
    const targetCenterY = targetRect.top + targetRect.height / 2

    const deltaX = originCenterX - targetCenterX
    const deltaY = originCenterY - targetCenterY
    const scale = origin.width / targetRect.width

    // INVERT: Position dialog exactly where the clicked thumbnail is
    dialog.style.transition = 'none'
    dialog.style.transformOrigin = 'center center'
    dialog.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scale}) rotate(${origin.rotate})`
    dialog.style.opacity = '0.9'

    if (backdrop) {
      backdrop.style.transition = 'none'
      backdrop.style.opacity = '0'
    }

    // PLAY: Animate smoothly to center card frame over 900ms
    const id1 = requestAnimationFrame(() => {
      const id2 = requestAnimationFrame(() => {
        if (dialog) {
          dialog.style.transition =
            'transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 900ms cubic-bezier(0.16, 1, 0.3, 1)'
          dialog.style.transform = 'translate3d(0, 0, 0) scale(1) rotate(0deg)'
          dialog.style.opacity = '1'
        }
        if (backdrop) {
          backdrop.style.transition = 'opacity 900ms cubic-bezier(0.16, 1, 0.3, 1)'
          backdrop.style.opacity = '1'
        }
        hasSmartAnimatedRef.current = true
      })
      return () => cancelAnimationFrame(id2)
    })

    return () => cancelAnimationFrame(id1)
  }, [selectedMemoryIndex, isClosing])

  // 900ms Reverse Smart Animate on close
  const closeLightbox = () => {
    if (isClosing || selectedMemoryIndex === null) return

    const dialog = dialogRef.current
    const backdrop = backdropRef.current
    const origin = originRectRef.current

    if (dialog && origin) {
      setIsClosing(true)
      const targetRect = dialog.getBoundingClientRect()
      const originCenterX = origin.x + origin.width / 2
      const originCenterY = origin.y + origin.height / 2
      const targetCenterX = targetRect.left + targetRect.width / 2
      const targetCenterY = targetRect.top + targetRect.height / 2

      const deltaX = originCenterX - targetCenterX
      const deltaY = originCenterY - targetCenterY
      const scale = origin.width / targetRect.width

      dialog.style.transition =
        'transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 900ms cubic-bezier(0.16, 1, 0.3, 1)'
      dialog.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scale}) rotate(${origin.rotate})`
      dialog.style.opacity = '0'

      if (backdrop) {
        backdrop.style.transition = 'opacity 900ms cubic-bezier(0.16, 1, 0.3, 1)'
        backdrop.style.opacity = '0'
      }

      setTimeout(() => {
        setSelectedMemoryIndex(null)
        setIsClosing(false)
        hasSmartAnimatedRef.current = false
      }, 900)
    } else {
      setSelectedMemoryIndex(null)
      hasSmartAnimatedRef.current = false
    }
  }

  const nextMemory = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedMemoryIndex((prev) => {
      if (prev === null) return null
      const nextIdx = (prev + 1) % memoriesData.length
      updateOriginForIndex(nextIdx)
      return nextIdx
    })
  }

  const prevMemory = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedMemoryIndex((prev) => {
      if (prev === null) return null
      const prevIdx = (prev - 1 + memoriesData.length) % memoriesData.length
      updateOriginForIndex(prevIdx)
      return prevIdx
    })
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedMemoryIndex === null || isClosing) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowRight') {
        setSelectedMemoryIndex((prev) => {
          if (prev === null) return null
          const nextIdx = (prev + 1) % memoriesData.length
          updateOriginForIndex(nextIdx)
          return nextIdx
        })
      } else if (e.key === 'ArrowLeft') {
        setSelectedMemoryIndex((prev) => {
          if (prev === null) return null
          const prevIdx = (prev - 1 + memoriesData.length) % memoriesData.length
          updateOriginForIndex(prevIdx)
          return prevIdx
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedMemoryIndex, isClosing])

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
              data-memory-id={item.id}
              className={`scrapbook-polaroid ${item.isCenterpiece ? 'is-centerpiece' : ''}`}
              style={{
                left: item.desktopStyle.left,
                top: item.desktopStyle.top,
                width: item.desktopStyle.width,
                height: item.desktopStyle.height || 'auto',
                zIndex: item.desktopStyle.zIndex,
                transform: `rotate(${item.desktopStyle.rotate})`,
              }}
              onClick={(e) => openLightbox(index, e)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openLightbox(index, e)
                }
              }}
              tabIndex={0}
              role="button"
              aria-haspopup="dialog"
              aria-label={`View photo: ${item.title}`}
            >
              <div className="polaroid-img-wrap">
                <picture>
                  {/* <source srcSet={item.webp} type="image/webp" /> */}
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
            data-memory-id={item.id}
            className={`mobile-card ${index % 2 === 0 ? 'tilt-left' : 'tilt-right'}`}
            onClick={(e) => openLightbox(index, e)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                openLightbox(index, e)
              }
            }}
            tabIndex={0}
            role="button"
            aria-haspopup="dialog"
            aria-label={`View memory: ${item.title}`}
          >
            <div className="mobile-card-img-wrap">
              <picture>
                {/* <source srcSet={item.webp} type="image/webp" /> */}
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

      {/* Interactive Lightbox Modal - Figma Node 144:8 Card Frame */}
      {activeMemory && (
        <div
          ref={backdropRef}
          className="lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activeMemory.title}
        >
          <div
            ref={dialogRef}
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Close photo preview"
            >
              ×
            </button>

            <div className="lightbox-media">
              {/* Floating Navigation Buttons directly on the image */}
              <button
                type="button"
                className="lightbox-floating-nav-btn prev"
                onClick={prevMemory}
                aria-label="Previous memory"
              >
                ‹
              </button>

              <picture>
                {/* <source srcSet={activeMemory.webp} type="image/webp" /> */}
                <img src={activeMemory.png} alt={activeMemory.alt} className="lightbox-img" />
              </picture>

              <button
                type="button"
                className="lightbox-floating-nav-btn next"
                onClick={nextMemory}
                aria-label="Next memory"
              >
                ›
              </button>
            </div>

            <div className="lightbox-info">
              <h2 className="lightbox-title">{activeMemory.tag}</h2>
              <p className="lightbox-desc">{activeMemory.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UltimatePage
