import pageCss from '@/styles/gallery.css?url'
import { createFileRoute } from '@tanstack/react-router'
import { PageBanner } from '@/components/wellness-content'
import { pageHead } from '@/lib/wellness'
import market from '@/assets/gallery-market.jpg'
import stretch from '@/assets/gallery-stretch.jpg'
import hydrate from '@/assets/gallery-hydrate.jpg'
import cycling from '@/assets/gallery-cycling.jpg'
import salad from '@/assets/gallery-salad.jpg'
import hike from '@/assets/gallery-hike.jpg'
import bowl from '@/assets/gallery-breakfast-bowl.jpg'
import garden from '@/assets/gallery-garden.jpg'

const photos = [
  { src: market, title: 'Fresh from the market', text: 'Colourful vegetables make every plate brighter.' },
  { src: stretch, title: 'Morning stretch', text: 'A few slow minutes to wake up the body.' },
  { src: hydrate, title: 'Stay hydrated', text: 'Water with lemon and mint, sipped through the day.' },
  { src: cycling, title: 'Move together', text: 'Exercise feels lighter with good company.' },
  { src: salad, title: 'Make a colourful bowl', text: 'Tossing a salad is the easiest way to eat more greens.' },
  { src: hike, title: 'Walk among the trees', text: 'A sunrise trail clears the head and lifts the heart.' },
  { src: bowl, title: 'A hearty breakfast', text: 'Oats, fruit and nuts keep you full all morning.' },
  { src: garden, title: 'Grow your own', text: 'Picking fresh herbs connects food to the earth.' },
]

export const Route = createFileRoute('/gallery')({ head: () => pageHead('Gallery', 'A photo gallery of everyday healthy living moments: fresh food, movement, hydration, and time together.', pageCss), component: Gallery })

function Gallery() {
  return <main>
    <PageBanner eyebrow="Gallery" title="Healthy living, in pictures." description="Small, everyday moments that inspire a healthier, happier life." />
    <section className="site-width section"><div className="gallery-grid">{photos.map(p => <figure className="gallery-item" key={p.title}><div className="gallery-frame"><img src={p.src} width={1024} height={1024} loading="lazy" alt={p.title} /></div><figcaption><h3>{p.title}</h3><p>{p.text}</p></figcaption></figure>)}</div></section>
  </main>
}
