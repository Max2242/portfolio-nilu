import { useEffect, useState } from 'react'

// Photography Image Imports (WebP with PNG Fallback)
import heritageLakeWebp from '../../assets/photography/heritage-lake-haveli.webp'
import heritageLakePng from '../../assets/photography/heritage-lake-haveli.png'
import sparrowsLedgeWebp from '../../assets/photography/sparrows-stone-ledge.webp'
import sparrowsLedgePng from '../../assets/photography/sparrows-stone-ledge.png'
import bazaarBellsWebp from '../../assets/photography/old-city-bazaar-bells.webp'
import bazaarBellsPng from '../../assets/photography/old-city-bazaar-bells.png'
import petalsPuddleWebp from '../../assets/photography/petals-rain-puddle.webp'
import petalsPuddlePng from '../../assets/photography/petals-rain-puddle.png'
import butterflyBlossomWebp from '../../assets/photography/butterfly-macro-blossom.webp'
import butterflyBlossomPng from '../../assets/photography/butterfly-macro-blossom.png'

import './photography.css'

interface PhotoItem {
  id: string
  title: string
  location: string
  category: string
  description: string
  orientation: 'landscape' | 'portrait'
  webp: string
  png: string
  alt: string
}

const landscapePhotos: PhotoItem[] = [
  {
    id: 'heritage-lake-haveli',
    title: 'Heritage by the Lake',
    location: 'Lake Pichola Ghats • Udaipur, Rajasthan',
    category: 'Architecture',
    description:
      'Warm afternoon sunlight casting golden tones across historic lakefront havelis and ornate chatris, with ripples reflecting centuries of Mewar architectural grandeur.',
    orientation: 'landscape',
    webp: heritageLakeWebp,
    png: heritageLakePng,
    alt: 'Golden lakefront havelis and traditional domes reflected in Lake Pichola, Udaipur',
  },
  {
    id: 'sparrows-stone-ledge',
    title: 'Urban Perch',
    location: 'Campus Courtyard • Ahmedabad',
    category: 'Wildlife & Minimalism',
    description:
      'A quiet morning moment observing house sparrows gathered in a disciplined row on a minimalist concrete ledge, framed by textured architectural walls.',
    orientation: 'landscape',
    webp: sparrowsLedgeWebp,
    png: sparrowsLedgePng,
    alt: 'Row of sparrows perched along a stone bench ledge outside a white textured building',
  },
  {
    id: 'old-city-bazaar-bells',
    title: 'Old City Bazaar',
    location: 'Walled City • Ahmedabad',
    category: 'Street & Culture',
    description:
      'Terracotta bells, woven baskets, and traditional earthen crafts strung between vintage balconies across a narrow, sun-drenched old-city alleyway.',
    orientation: 'landscape',
    webp: bazaarBellsWebp,
    png: bazaarBellsPng,
    alt: 'Narrow atmospheric street bazaar with hanging terracotta bells and vintage balconies',
  },
]

const portraitPhotos: PhotoItem[] = [
  {
    id: 'petals-rain-puddle',
    title: 'Petals in Rain Ripple',
    location: 'Monsoon Garden • Campus',
    category: 'Macro & Nature',
    description:
      'Delicate fallen yellow leaves and a central pink blossom floating on rainwater, reflecting the gentle ripples and overcast sky after a sudden monsoon shower.',
    orientation: 'portrait',
    webp: petalsPuddleWebp,
    png: petalsPuddlePng,
    alt: 'Rainwater puddle reflecting yellow leaves and a vibrant pink flower blossom on wet ground',
  },
  {
    id: 'butterfly-macro-blossom',
    title: 'Butterfly on Blossom',
    location: 'Botanical Garden • Ahmedabad',
    category: 'Macro Study',
    description:
      'Close-up study of a Common Pierrot butterfly resting gracefully on fresh flower buds, highlighting intricate black, white, and bright orange wing patterns.',
    orientation: 'portrait',
    webp: butterflyBlossomWebp,
    png: butterflyBlossomPng,
    alt: 'Macro photograph of a patterned butterfly perched gracefully on budding green flora',
  },
]

// All photos flattened for lightbox modal indexing
const allPhotos: PhotoItem[] = [...landscapePhotos, ...portraitPhotos]

function PhotographyPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)

  const activePhoto = selectedPhotoIndex !== null ? allPhotos[selectedPhotoIndex] : null

  // Keyboard navigation for lightbox modal
  useEffect(() => {
    if (selectedPhotoIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhotoIndex(null)
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % allPhotos.length : null))
      } else if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev - 1 + allPhotos.length) % allPhotos.length : null
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedPhotoIndex])

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index)
  }

  const closeLightbox = () => {
    setSelectedPhotoIndex(null)
  }

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % allPhotos.length : null))
  }

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedPhotoIndex((prev) =>
      prev !== null ? (prev - 1 + allPhotos.length) % allPhotos.length : null
    )
  }

  return (
    <div className="photography-page-wrapper" aria-label="Photography Portfolio">
      {/* Header bar */}
      <header className="photography-header">
        <div className="photography-title-group">
          <h1 className="photography-heading">Photography</h1>
          <span className="photography-subhead">Visual Studies & Moments</span>
        </div>
        <div className="photography-hint" aria-hidden="true">
          <span className="hint-dot" />
          <span>Click any photo to enlarge</span>
        </div>
      </header>

      {/* Editorial Photography Gallery (Figma Node 1-1027 Layout) */}
      <main className="photography-gallery" role="region" aria-label="Curated Photography Gallery">
        {/* Row 1: 3 Landscape Photographs */}
        <div className="gallery-row-landscape" role="group" aria-label="Landscape Studies">
          {landscapePhotos.map((photo, index) => (
            <article
              key={photo.id}
              className="photo-card is-landscape"
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
              aria-label={`View photo: ${photo.title}, ${photo.location}`}
            >
              <div className="photo-img-wrap">
                <picture>
                  <source srcSet={photo.webp} type="image/webp" />
                  <img
                    src={photo.png}
                    alt={photo.alt}
                    className="photo-img"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </picture>
              </div>

              <div className="photo-overlay-badge" aria-hidden="true">
                <h2 className="photo-badge-title">{photo.title}</h2>
                <p className="photo-badge-location">{photo.location}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Row 2: 2 Portrait Photographs */}
        <div className="gallery-row-portrait" role="group" aria-label="Portrait & Macro Studies">
          {portraitPhotos.map((photo, index) => {
            const overallIndex = landscapePhotos.length + index
            return (
              <div key={photo.id} className="portrait-slot">
                <article
                  className="photo-card is-portrait"
                  onClick={() => openLightbox(overallIndex)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      openLightbox(overallIndex)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-haspopup="dialog"
                  aria-label={`View photo: ${photo.title}, ${photo.location}`}
                >
                  <div className="photo-img-wrap">
                    <picture>
                      <source srcSet={photo.webp} type="image/webp" />
                      <img
                        src={photo.png}
                        alt={photo.alt}
                        className="photo-img"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>

                  <div className="photo-overlay-badge" aria-hidden="true">
                    <h2 className="photo-badge-title">{photo.title}</h2>
                    <p className="photo-badge-location">{photo.location}</p>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </main>

      {/* Interactive Lightbox Modal */}
      {activePhoto && (
        <div
          className="photo-lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
        >
          <div className="photo-lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="photo-lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Close photo preview"
            >
              ×
            </button>

            <div className="photo-lightbox-media">
              <button
                type="button"
                className="photo-lightbox-nav-btn prev"
                onClick={prevPhoto}
                aria-label="Previous photo"
              >
                ‹
              </button>

              <picture>
                <source srcSet={activePhoto.webp} type="image/webp" />
                <img src={activePhoto.png} alt={activePhoto.alt} className="photo-lightbox-img" />
              </picture>

              <button
                type="button"
                className="photo-lightbox-nav-btn next"
                onClick={nextPhoto}
                aria-label="Next photo"
              >
                ›
              </button>
            </div>

            <div className="photo-lightbox-info">
              <div className="photo-lightbox-top-row">
                <span className="photo-lightbox-category">{activePhoto.category}</span>
                <span className="photo-lightbox-counter">
                  {(selectedPhotoIndex ?? 0) + 1} / {allPhotos.length}
                </span>
              </div>
              <h2 className="photo-lightbox-title">{activePhoto.title}</h2>
              <p className="photo-lightbox-location">{activePhoto.location}</p>
              <p className="photo-lightbox-desc">{activePhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotographyPage
