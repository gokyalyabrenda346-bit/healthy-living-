import pageCss from '@/styles/home.css?url'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Leaf, Heart, Sprout, Sun, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { categories, pageHead } from '@/lib/wellness'
import { ArticleGrid } from '@/components/wellness-content'
import { TikTokGallery } from '@/components/tiktok-gallery'
import salad from '@/assets/hero-breakfast.jpg'
import homeSoft from '@/assets/home-soft.jpg'

export const Route = createFileRoute('/')({ head: () => pageHead('Healthy living, one small step at a time', 'Discover everyday inspiration for healthy eating, joyful movement, mindfulness, and better rest with Healthy Living.', pageCss), component: Index })
function Index() {
  return <>
    <div className="photo-page">
    <img className="photo-bg" src={homeSoft} width={1024} height={1024} loading="lazy" alt="" aria-hidden="true" />
    <section className="hero"><img className="hero-image" src={salad} width={1600} height={1024} alt="A sunny kitchen table with fruit, smoothie bowls, and fresh herbs" fetchPriority="high" /><div className="site-width hero-inner"><span className="eyebrow hero-eyebrow"><Leaf size={13} /> A happier, healthier you</span><h1>Healthy living.<br />One small step<br /><em>at a time.</em></h1><p className="hero-description">Nourish your body. Move with joy. Find your balance.<br />Simple inspiration for a life that feels good.</p><div className="hero-actions"><Button asChild><Link to="/categories" search={{ category: 'all' }}>Explore healthy living <ArrowRight /></Link></Button><Button variant="outline" asChild><Link to="/about">Get to know us</Link></Button></div><p className="hero-note"><Check size={15} /> No perfection needed. Just a little progress.</p></div></section>
    <section className="values-band" aria-label="Our approach"><div className="site-width values-grid"><div className="value"><Sprout /><div><strong>Small habits, lasting change</strong><p>Healthy living that fits into your everyday</p></div></div><div className="value"><Heart /><div><strong>Good for body & mind</strong><p>A balanced approach to feeling your best</p></div></div><div className="value"><Sun /><div><strong>Made for real life</strong><p>Simple, approachable, and always human</p></div></div></div></section>
    <section className="site-width section"><div className="section-title-row"><div><span className="eyebrow">Your path to feeling good</span><h2>A little balance goes a long way.</h2><p className="section-subtitle">Explore the everyday essentials of a healthier, happier life.</p></div><Button variant="link" asChild><Link to="/categories" search={{ category: 'all' }}>All categories <ArrowRight /></Link></Button></div><div className="category-grid">{categories.slice(0,3).map(c => <Link className="category-card" key={c.id} to="/categories" search={{ category: c.id }}><img className="category-image" src={c.image} width={1024} height={768} loading="lazy" alt={c.name} /><div className="category-body"><span className="eyebrow">{c.label}</span><h3>{c.name}</h3><p>{c.description}</p><span className="card-link">Explore category <ArrowRight size={16} /></span></div></Link>)}</div></section>
    <section className="note-band"><span className="eyebrow justify-center"><Sprout size={16} /> A gentle reminder</span><h2 className="mt-3">You don’t have to change everything.</h2><p>A nourishing meal. A walk outside. A moment to breathe.<br />Sometimes, the smallest things make the biggest difference.</p><Button variant="outline" asChild><Link to="/categories" search={{ category: 'all' }}>Find your small step <ArrowRight /></Link></Button></section>
    <section className="site-width section"><div className="section-title-row"><div><span className="eyebrow">Fresh inspiration</span><h2>Good reads for better days.</h2></div><Button variant="link" asChild><Link to="/categories" search={{ category: 'all' }}>Explore all reads <ArrowRight /></Link></Button></div><ArticleGrid limit={3} /></section>
    <TikTokGallery />
    </div>
  </>
}
