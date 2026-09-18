import { useEffect, useState, useMemo } from 'react'

// Photography Image Imports (WebP with PNG Fallback)
// Row 1 (Landscape)
import heritageLakeWebp from '../../assets/photography/heritage-lake-haveli.webp'
import heritageLakePng from '../../assets/photography/heritage-lake-haveli.png'
import sparrowsLedgeWebp from '../../assets/photography/sparrows-stone-ledge.webp'
import sparrowsLedgePng from '../../assets/photography/sparrows-stone-ledge.png'
import bazaarBellsWebp from '../../assets/photography/old-city-bazaar-bells.webp'
import bazaarBellsPng from '../../assets/photography/old-city-bazaar-bells.png'

// Row 2 (Portrait)
import petalsPuddleWebp from '../../assets/photography/petals-rain-puddle.webp'
import petalsPuddlePng from '../../assets/photography/petals-rain-puddle.png'
import butterflyBlossomWebp from '../../assets/photography/butterfly-macro-blossom.webp'
import butterflyBlossomPng from '../../assets/photography/butterfly-macro-blossom.png'
import goldenWaspWebp from '../../assets/photography/golden-wasp-macro.webp'
import goldenWaspPng from '../../assets/photography/golden-wasp-macro.png'

// Row 3 (Landscape)
import puppyPurpleWebp from '../../assets/photography/puppy-purple-foliage.webp'
import puppyPurplePng from '../../assets/photography/puppy-purple-foliage.png'
import bambooSunlightWebp from '../../assets/photography/bamboo-grove-sunlight.webp'
import bambooSunlightPng from '../../assets/photography/bamboo-grove-sunlight.png'
import chameleonLedgeWebp from '../../assets/photography/chameleon-stone-ledge.webp'
import chameleonLedgePng from '../../assets/photography/chameleon-stone-ledge.png'

// Row 4 (Portrait)
import fortFlagWebp from '../../assets/photography/fort-courtyard-flag.webp'
import fortFlagPng from '../../assets/photography/fort-courtyard-flag.png'
import haveliJharokhaWebp from '../../assets/photography/ornate-haveli-jharokha.webp'
import haveliJharokhaPng from '../../assets/photography/ornate-haveli-jharokha.png'
import elderlyShutterWebp from '../../assets/photography/elderly-man-shutter.webp'
import elderlyShutterPng from '../../assets/photography/elderly-man-shutter.png'

// Row 5 (Landscape)
import elderStreetWebp from '../../assets/photography/elder-street-chair.webp'
import elderStreetPng from '../../assets/photography/elder-street-chair.png'
import artisanWorkshopWebp from '../../assets/photography/artisan-glass-workshop.webp'
import artisanWorkshopPng from '../../assets/photography/artisan-glass-workshop.png'
import childHammockWebp from '../../assets/photography/child-colorful-hammock.webp'
import childHammockPng from '../../assets/photography/child-colorful-hammock.png'

// Row 6 (Portrait)
import plumeriaWaterWebp from '../../assets/photography/fallen-plumeria-water.webp'
import plumeriaWaterPng from '../../assets/photography/fallen-plumeria-water.png'
import floralHandsWebp from '../../assets/photography/floral-dress-hands.webp'
import floralHandsPng from '../../assets/photography/floral-dress-hands.png'
import coffeeCupWebp from '../../assets/photography/overhead-coffee-cup.webp'
import coffeeCupPng from '../../assets/photography/overhead-coffee-cup.png'

// Row 7 (Landscape)
import brutalistCanopyWebp from '../../assets/photography/brutalist-concrete-canopy.webp'
import brutalistCanopyPng from '../../assets/photography/brutalist-concrete-canopy.png'
import houndFloorWebp from '../../assets/photography/hound-slumber-floor.webp'
import houndFloorPng from '../../assets/photography/hound-slumber-floor.png'
import threeYouthsWebp from '../../assets/photography/three-youths-wall.webp'
import threeYouthsPng from '../../assets/photography/three-youths-wall.png'

// Row 8 (Landscape)
import festivalCrowdWebp from '../../assets/photography/festival-procession-crowd.webp'
import festivalCrowdPng from '../../assets/photography/festival-procession-crowd.png'
import jeepJungleWebp from '../../assets/photography/reclaimed-jeep-jungle.webp'
import jeepJunglePng from '../../assets/photography/reclaimed-jeep-jungle.png'
import lotusPuddleWebp from '../../assets/photography/lotus-muddy-puddle.webp'
import lotusPuddlePng from '../../assets/photography/lotus-muddy-puddle.png'

import './photography.css'

export interface PhotoItem {
  id: string
  title: string
  location: string
  category: 'Architecture' | 'Nature & Wildlife' | 'Street & People' | 'Macro & Still Life'
  description: string
  orientation: 'landscape' | 'portrait'
  row: number
  col: number
  webp: string
  png: string
  alt: string
}

const allPhotos: PhotoItem[] = [
  // --- ROW 1 (Landscape) ---
  {
    id: 'heritage-lake-haveli',
    title: 'Heritage by the Lake',
    location: 'Lake Pichola Ghats • Udaipur, Rajasthan',
    category: 'Architecture',
    description:
      'Warm afternoon sunlight casting golden tones across historic lakefront havelis and ornate chatris, with ripples reflecting centuries of Mewar architectural grandeur.',
    orientation: 'landscape',
    row: 1,
    col: 1,
    webp: heritageLakeWebp,
    png: heritageLakePng,
    alt: 'Golden lakefront havelis and traditional domes reflected in Lake Pichola, Udaipur',
  },
  {
    id: 'sparrows-stone-ledge',
    title: 'Urban Perch',
    location: 'Campus Courtyard • Ahmedabad',
    category: 'Nature & Wildlife',
    description:
      'A quiet morning moment observing house sparrows gathered in a disciplined row on a minimalist concrete ledge, framed by textured architectural walls.',
    orientation: 'landscape',
    row: 1,
    col: 2,
    webp: sparrowsLedgeWebp,
    png: sparrowsLedgePng,
    alt: 'Row of sparrows perched along a stone bench ledge outside a white textured building',
  },
  {
    id: 'old-city-bazaar-bells',
    title: 'Old City Bazaar',
    location: 'Walled City • Ahmedabad',
    category: 'Street & People',
    description:
      'Terracotta bells, woven baskets, and traditional earthen crafts strung between vintage balconies across a narrow, sun-drenched old-city alleyway.',
    orientation: 'landscape',
    row: 1,
    col: 3,
    webp: bazaarBellsWebp,
    png: bazaarBellsPng,
    alt: 'Narrow atmospheric street bazaar with hanging terracotta bells and vintage balconies',
  },

  // --- ROW 2 (Portrait) ---
  {
    id: 'petals-rain-puddle',
    title: 'Petals in Rain Ripple',
    location: 'Monsoon Garden • Campus',
    category: 'Macro & Still Life',
    description:
      'Delicate fallen yellow leaves and a central pink blossom floating on rainwater, reflecting the gentle ripples and overcast sky after a sudden monsoon shower.',
    orientation: 'portrait',
    row: 2,
    col: 1,
    webp: petalsPuddleWebp,
    png: petalsPuddlePng,
    alt: 'Rainwater puddle reflecting yellow leaves and a vibrant pink flower blossom on wet ground',
  },
  {
    id: 'butterfly-macro-blossom',
    title: 'Butterfly on Blossom',
    location: 'Botanical Garden • Ahmedabad',
    category: 'Macro & Still Life',
    description:
      'Close-up study of a Common Pierrot butterfly resting gracefully on fresh flower buds, highlighting intricate black, white, and bright orange wing patterns.',
    orientation: 'portrait',
    row: 2,
    col: 2,
    webp: butterflyBlossomWebp,
    png: butterflyBlossomPng,
    alt: 'Macro photograph of a patterned butterfly perched gracefully on budding green flora',
  },
  {
    id: 'golden-wasp-macro',
    title: 'Golden Hornet on Slate',
    location: 'Field Sanctuary • Gandhinagar',
    category: 'Nature & Wildlife',
    description:
      'Intricate macro exploration of a golden wasp resting poised on deep dark slate stone, revealing delicate wing veins and amber armored segments.',
    orientation: 'portrait',
    row: 2,
    col: 3,
    webp: goldenWaspWebp,
    png: goldenWaspPng,
    alt: 'Macro photography of an amber golden hornet on dark textured stone',
  },

  // --- ROW 3 (Landscape) ---
  {
    id: 'puppy-purple-foliage',
    title: 'Slumber in Purple Flora',
    location: 'Botanical Nursery • Ahmedabad',
    category: 'Nature & Wildlife',
    description:
      'A tender morning moment capturing a pale sleeping pup curled peacefully amidst a dense blanket of rich purple and burgundy foliage.',
    orientation: 'landscape',
    row: 3,
    col: 1,
    webp: puppyPurpleWebp,
    png: puppyPurplePng,
    alt: 'White puppy resting peacefully nestled within dense purple garden leaves',
  },
  {
    id: 'bamboo-grove-sunlight',
    title: 'Golden Canopy Bamboo',
    location: 'Sabarmati Riverfront • Ahmedabad',
    category: 'Nature & Wildlife',
    description:
      'Warm rays of low-angled afternoon sunlight filtering through slender bamboo culms, casting geometric shadows and vibrant amber illumination.',
    orientation: 'landscape',
    row: 3,
    col: 2,
    webp: bambooSunlightWebp,
    png: bambooSunlightPng,
    alt: 'Sunlight filtering through lush green and amber bamboo foliage in a quiet grove',
  },
  {
    id: 'chameleon-stone-ledge',
    title: 'The Sentinel Chameleon',
    location: 'Old Garden Wall • Ahmedabad',
    category: 'Nature & Wildlife',
    description:
      'An Indian chameleon poised patiently along a cracked concrete garden wall, basking beneath the emerald leaf canopy with serene focus.',
    orientation: 'landscape',
    row: 3,
    col: 3,
    webp: chameleonLedgeWebp,
    png: chameleonLedgePng,
    alt: 'Chameleon perched alertly along a stone wall ledge beneath foliage',
  },

  // --- ROW 4 (Portrait) ---
  {
    id: 'fort-courtyard-flag',
    title: 'Citadel Skyward',
    location: 'Mehrangarh Ramparts • Jodhpur',
    category: 'Architecture',
    description:
      'A striking upward low-angle perspective looking through monumental red sandstone courtyard arches towards a saffron flag fluttering in the deep blue sky.',
    orientation: 'portrait',
    row: 4,
    col: 1,
    webp: fortFlagWebp,
    png: fortFlagPng,
    alt: 'Dramatic low-angle view of majestic fort courtyard walls and towers rising against sky',
  },
  {
    id: 'ornate-haveli-jharokha',
    title: 'The Peacock Jharokha',
    location: 'City Palace Facade • Udaipur',
    category: 'Architecture',
    description:
      'Masterful heritage craft showcased in an overhanging stone balcony (jharokha) inlaid with glass mosaic and intricate peacock and lotus carvings.',
    orientation: 'portrait',
    row: 4,
    col: 2,
    webp: haveliJharokhaWebp,
    png: haveliJharokhaPng,
    alt: 'Exquisitely carved heritage Rajasthani jharokha balcony with glass mosaic peacocks',
  },
  {
    id: 'elderly-man-shutter',
    title: 'Patience at the Shutter',
    location: 'Old Bazaar • Pushkar',
    category: 'Street & People',
    description:
      'An elderly local resident in traditional dhoti and warm jacket seated peacefully outside a weathered corrugated shopfront in late afternoon amber light.',
    orientation: 'portrait',
    row: 4,
    col: 3,
    webp: elderlyShutterWebp,
    png: elderlyShutterPng,
    alt: 'Elderly man resting outside a closed rolling shop shutter in warm evening sunlight',
  },

  // --- ROW 5 (Landscape) ---
  {
    id: 'elder-street-chair',
    title: 'Streetcorner Pause',
    location: 'Heritage Quarter • Jaipur',
    category: 'Street & People',
    description:
      'An elder in crisp white traditional kurta and turban seated thoughtfully on a wooden chair outside an open street bazaar during midday bustle.',
    orientation: 'landscape',
    row: 5,
    col: 1,
    webp: elderStreetWebp,
    png: elderStreetPng,
    alt: 'Elderly man in white turban seated on a wooden chair along a sunlit market street',
  },
  {
    id: 'artisan-glass-workshop',
    title: 'The Alchemist Workshop',
    location: 'Old City Alley • Ahmedabad',
    category: 'Street & People',
    description:
      'A shopkeeper seated cross-legged on a wooden platform within his atmospheric store, surrounded by vintage glass bottles and glistening sunlight.',
    orientation: 'landscape',
    row: 5,
    col: 2,
    webp: artisanWorkshopWebp,
    png: artisanWorkshopPng,
    alt: 'Shopkeeper sitting cross-legged inside traditional workshop surrounded by glass jars',
  },
  {
    id: 'child-colorful-hammock',
    title: 'Colors of Childhood',
    location: 'Artisan Settlement • Gandhinagar',
    category: 'Street & People',
    description:
      'A curious, wide-eyed toddler resting comfortably inside a bright, rainbow-striped cloth sling suspended securely across an open courtyard.',
    orientation: 'landscape',
    row: 5,
    col: 3,
    webp: childHammockWebp,
    png: childHammockPng,
    alt: 'Young child swinging in a colorful striped cloth hammock suspended between walls',
  },

  // --- ROW 6 (Portrait) ---
  {
    id: 'fallen-plumeria-water',
    title: 'Floating Plumeria',
    location: 'Adalaj Stepwell Garden • Gandhinagar',
    category: 'Macro & Still Life',
    description:
      'A single pristine white frangipani blossom with delicate pink tip floating on calm rainwater, mirrored in crystal-clear reflection.',
    orientation: 'portrait',
    row: 6,
    col: 1,
    webp: plumeriaWaterWebp,
    png: plumeriaWaterPng,
    alt: 'Fallen white and pink plumeria flower floating peacefully on reflective rainwater pool',
  },
  {
    id: 'floral-dress-hands',
    title: 'Resting Indigo Hands',
    location: 'Textile Studio • Ahmedabad',
    category: 'Macro & Still Life',
    description:
      'A serene, painterly portrait focusing on clasped hands with traditional silver rings and bracelets resting against handcrafted floral block-printed cotton.',
    orientation: 'portrait',
    row: 6,
    col: 2,
    webp: floralHandsWebp,
    png: floralHandsPng,
    alt: 'Close-up of gentle hands resting over traditional blue floral printed fabric',
  },
  {
    id: 'overhead-coffee-cup',
    title: 'Warmth in Ceramic',
    location: 'Artisan Café • CEPT Campus',
    category: 'Macro & Still Life',
    description:
      'A meditative top-down view of open palms cradling a warm, rustic ceramic cup with rich crema and aromatic coffee notes.',
    orientation: 'portrait',
    row: 6,
    col: 3,
    webp: coffeeCupWebp,
    png: coffeeCupPng,
    alt: 'Top-down view of hands holding a warm handcrafted ceramic cup with coffee foam',
  },

  // --- ROW 7 (Landscape) ---
  {
    id: 'brutalist-concrete-canopy',
    title: 'Concrete & Canopy',
    location: 'Louis Kahn CEPT Enclave • Ahmedabad',
    category: 'Architecture',
    description:
      'Iconic modernist exposed brick and concrete architecture emerging organically through a dense, timeless canopy of mature neem and banyan trees.',
    orientation: 'landscape',
    row: 7,
    col: 1,
    webp: brutalistCanopyWebp,
    png: brutalistCanopyPng,
    alt: 'Modernist brutalist concrete campus building enveloped in lush green forest canopy',
  },
  {
    id: 'hound-slumber-floor',
    title: 'Grey Tile Contours',
    location: 'Design Studio Courtyard • Ahmedabad',
    category: 'Nature & Wildlife',
    description:
      'Top-down geometric composition of a slender golden-tan hound curled gracefully in repose on cool, dark slate floor tiles.',
    orientation: 'landscape',
    row: 7,
    col: 2,
    webp: houndFloorWebp,
    png: houndFloorPng,
    alt: 'Overhead view of a sleeping tan dog curled gracefully on grey stone floor tiles',
  },
  {
    id: 'three-youths-wall',
    title: 'Brotherhood on the Corner',
    location: 'Pol Neighborhood • Ahmedabad',
    category: 'Street & People',
    description:
      'A candid portrait of three young companions standing casually against a textured earthen wall in the warm evening dusk of the historic pols.',
    orientation: 'landscape',
    row: 7,
    col: 3,
    webp: threeYouthsWebp,
    png: threeYouthsPng,
    alt: 'Three young men standing together against a wall in warm evening street light',
  },

  // --- ROW 8 (Landscape) ---
  {
    id: 'festival-procession-crowd',
    title: 'Rhythm of the Procession',
    location: 'Uttarayan Festivities • Old City',
    category: 'Street & People',
    description:
      'Vibrant communal energy captured during festival celebrations as crowds in colorful attire traverse the historic street lanes under festive skies.',
    orientation: 'landscape',
    row: 8,
    col: 1,
    webp: festivalCrowdWebp,
    png: festivalCrowdPng,
    alt: 'Crowd of people gathered in celebration along a historic market lane during festival',
  },
  {
    id: 'reclaimed-jeep-jungle',
    title: 'Nature Reclaiming Steel',
    location: 'Forest Trail • Gir Foothills',
    category: 'Nature & Wildlife',
    description:
      'An abandoned vintage safari vehicle nestled within a dense jungle hollow, steadily enveloped by climbing vines, moss, and monsoon greenery.',
    orientation: 'landscape',
    row: 8,
    col: 2,
    webp: jeepJungleWebp,
    png: jeepJunglePng,
    alt: 'Vintage off-road vehicle overgrown with lush green vines and foliage in a dense forest',
  },
  {
    id: 'lotus-muddy-puddle',
    title: 'The Whimsical Puddle',
    location: 'Monsoon Lane • Sanand',
    category: 'Macro & Still Life',
    description:
      'A playful and unexpected sight of a bright pink reversible octopus plush floating resiliently in a calm rain puddle, reflecting overcast skies.',
    orientation: 'landscape',
    row: 8,
    col: 3,
    webp: lotusPuddleWebp,
    png: lotusPuddlePng,
    alt: 'Cute pink plush toy floating in a clear rainwater puddle reflecting the sky',
  },
]

// Group photos by their 8 Figma rows
const figmaRows = [
  { rowNum: 1, type: 'landscape' as const, photos: allPhotos.slice(0, 3) },
  { rowNum: 2, type: 'portrait' as const, photos: allPhotos.slice(3, 6) },
  { rowNum: 3, type: 'landscape' as const, photos: allPhotos.slice(6, 9) },
  { rowNum: 4, type: 'portrait' as const, photos: allPhotos.slice(9, 12) },
  { rowNum: 5, type: 'landscape' as const, photos: allPhotos.slice(12, 15) },
  { rowNum: 6, type: 'portrait' as const, photos: allPhotos.slice(15, 18) },
  { rowNum: 7, type: 'landscape' as const, photos: allPhotos.slice(18, 21) },
  { rowNum: 8, type: 'landscape' as const, photos: allPhotos.slice(21, 24) },
]

const categories = [
  'All',
  'Architecture',
  'Nature & Wildlife',
  'Street & People',
  'Macro & Still Life',
] as const

type CategoryFilter = (typeof categories)[number]

function PhotographyPage() {
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All')

  // Find currently active photo object and index within allPhotos
  const activePhotoIndex = useMemo(() => {
    if (!selectedPhotoId) return null
    const idx = allPhotos.findIndex((p) => p.id === selectedPhotoId)
    return idx >= 0 ? idx : null
  }, [selectedPhotoId])

  const activePhoto = activePhotoIndex !== null ? allPhotos[activePhotoIndex] : null

  // Keyboard navigation for lightbox modal
  useEffect(() => {
    if (activePhotoIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhotoId(null)
      } else if (e.key === 'ArrowRight') {
        const nextIdx = (activePhotoIndex + 1) % allPhotos.length
        setSelectedPhotoId(allPhotos[nextIdx].id)
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = (activePhotoIndex - 1 + allPhotos.length) % allPhotos.length
        setSelectedPhotoId(allPhotos[prevIdx].id)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activePhotoIndex])

  const openLightbox = (id: string) => {
    setSelectedPhotoId(id)
  }

  const closeLightbox = () => {
    setSelectedPhotoId(null)
  }

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activePhotoIndex === null) return
    const nextIdx = (activePhotoIndex + 1) % allPhotos.length
    setSelectedPhotoId(allPhotos[nextIdx].id)
  }

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activePhotoIndex === null) return
    const prevIdx = (activePhotoIndex - 1 + allPhotos.length) % allPhotos.length
    setSelectedPhotoId(allPhotos[prevIdx].id)
  }

  // Filtered rows vs full editorial rows
  const isFiltering = activeFilter !== 'All'
  const filteredPhotos = useMemo(() => {
    if (!isFiltering) return allPhotos
    return allPhotos.filter((p) => p.category === activeFilter)
  }, [activeFilter, isFiltering])

  return (
    <div className="photography-page-wrapper" aria-label="Photography Portfolio">
      {/* Editorial Header bar */}
      <header className="photography-header">
        <div className="photography-title-group">
          <h1 className="photography-heading">Photography</h1>
          <span className="photography-subhead">Visual Studies • 24 Curated Frames</span>
        </div>

        {/* Filter Pills */}
        <nav className="photography-filter-nav" aria-label="Filter photography categories">
          {categories.map((cat) => {
            const count = cat === 'All' ? allPhotos.length : allPhotos.filter((p) => p.category === cat).length
            const isSelected = activeFilter === cat
            return (
              <button
                key={cat}
                type="button"
                className={`filter-pill-btn ${isSelected ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={isSelected}
              >
                <span>{cat}</span>
                <span className="pill-count">{count}</span>
              </button>
            )
          })}
        </nav>

        <div className="photography-hint" aria-hidden="true">
          <span className="hint-dot" />
          <span>Scroll to explore all 24 pictures</span>
        </div>
      </header>

      {/* Editorial Photography Gallery (Figma Node 1-1027 1900x3906 Layout) */}
      <main className="photography-gallery" role="region" aria-label="Curated Photography Gallery">
        {!isFiltering ? (
          // Default: Exact 8-Row Figma Editorial Structure
          figmaRows.map((row) => (
            <section
              key={`row-${row.rowNum}`}
              className={`gallery-row ${row.type === 'landscape' ? 'gallery-row-landscape' : 'gallery-row-portrait'}`}
              aria-label={`Row ${row.rowNum}: ${row.type} collection`}
            >
              {row.photos.map((photo) => (
                <div
                  key={photo.id}
                  className={`photo-slot ${row.type === 'portrait' ? 'portrait-slot' : 'landscape-slot'}`}
                >
                  <article
                    className={`photo-card ${photo.orientation === 'landscape' ? 'is-landscape' : 'is-portrait'}`}
                    onClick={() => openLightbox(photo.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        openLightbox(photo.id)
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
                          loading={photo.row <= 2 ? 'eager' : 'lazy'}
                          decoding="async"
                        />
                      </picture>
                    </div>

                    <div className="photo-overlay-badge" aria-hidden="true">
                      <span className="photo-badge-cat">{photo.category}</span>
                      <h2 className="photo-badge-title">{photo.title}</h2>
                      <p className="photo-badge-location">{photo.location}</p>
                    </div>
                  </article>
                </div>
              ))}
            </section>
          ))
        ) : (
          // Filtered view: Responsive Grid
          <section className="gallery-filtered-grid" aria-label={`Filtered: ${activeFilter}`}>
            {filteredPhotos.map((photo) => (
              <article
                key={photo.id}
                className={`photo-card ${photo.orientation === 'landscape' ? 'is-landscape' : 'is-portrait'}`}
                onClick={() => openLightbox(photo.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openLightbox(photo.id)
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
                  <span className="photo-badge-cat">{photo.category}</span>
                  <h2 className="photo-badge-title">{photo.title}</h2>
                  <p className="photo-badge-location">{photo.location}</p>
                </div>
              </article>
            ))}
          </section>
        )}
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
                  {(activePhotoIndex ?? 0) + 1} / {allPhotos.length}
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
