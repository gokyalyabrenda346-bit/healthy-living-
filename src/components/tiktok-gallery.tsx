import { useEffect } from 'react'
import { tiktokVideos } from '@/lib/wellness'

declare global {
  interface Window { tiktokEmbedLoaded?: boolean }
}

function loadTikTokScript() {
  if (window.tiktokEmbedLoaded) return
  window.tiktokEmbedLoaded = true
  const s = document.createElement('script')
  s.src = 'https://www.tiktok.com/embed.js'
  s.async = true
  document.body.appendChild(s)
}

export function TikTokGallery() {
  useEffect(() => { loadTikTokScript() }, [])
  if (tiktokVideos.length === 0) return null
  return (
    <section className="site-width section tiktok-section">
      <div className="section-title-row">
        <div>
          <span className="eyebrow">Watch &amp; move</span>
          <h2>Healthy living in motion.</h2>
          <p className="section-subtitle">Short clips to inspire your everyday — straight from TikTok.</p>
        </div>
      </div>
      <div className="tiktok-grid">
        {tiktokVideos.map((v) => {
          const id = v.url.match(/video\/(\d+)/)?.[1] ?? ''
          return (
            <div className="tiktok-card" key={v.url}>
              <blockquote className="tiktok-embed" cite={v.url} data-video-id={id} style={{ maxWidth: 605, minWidth: 288 }}>
                <section><a target="_blank" rel="noopener noreferrer" href={v.url}>{v.title}</a></section>
              </blockquote>
            </div>
          )
        })}
      </div>
    </section>
  )
}
