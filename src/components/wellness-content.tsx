import { ArrowRight } from 'lucide-react'
import { articles, categories } from '@/lib/wellness'

export function PageBanner({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-banner"><div className="site-width"><span className="eyebrow">{eyebrow}</span><h1 className="page-title">{title}</h1><p>{description}</p></div></section>
}
export function ArticleGrid({ category = 'all', limit }: { category?: string; limit?: number }) {
  const filtered = articles.filter(a => category === 'all' || a.category === category).slice(0, limit)
  return <div className="article-grid">{filtered.map(a => <article key={a.id}><div className="article-image-frame"><img src={a.image} width={1024} height={768} loading="lazy" alt={categories.find(c => c.id === a.category)?.name || 'Healthy living'} /></div><div className="article-meta"><span>{categories.find(c => c.id === a.category)?.name}</span><span>{a.time}</span></div><h3>{a.title}</h3><details><summary>Read the story <ArrowRight size={15} /></summary><p>{a.body}</p></details></article>)}</div>
}