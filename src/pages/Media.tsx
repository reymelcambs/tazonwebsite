import { Section } from '../components/Shared';

export default function Media() {
  return (
    <div className="pt-28 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl fade-in">
          <p className="font-mono-label mb-4">Podcast</p>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Daily Grind.
          </h1>
          <p className="font-serif-body text-lg text-[var(--text-secondary)] leading-relaxed">
            A podcast by Tazon CEO Kato Sadat. Conversations about technology, entrepreneurship, and building in Africa.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="https://www.youtube.com/@dailygrind-ug" target="_blank" rel="noopener noreferrer" className="pill-btn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              YouTube
            </a>
            <a href="https://www.tiktok.com/@daily._.grind" target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn-secondary">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15.7 6.34 6.34 0 0 0 9.49 22a6.34 6.34 0 0 0 6.34-6.34V9.01a8.26 8.26 0 0 0 4.84 1.55V7.12a4.82 4.82 0 0 1-1.08-.43z"/></svg>
              TikTok
            </a>
            <a href="https://www.instagram.com/daily_grind._podcast/" target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn-secondary">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Latest episodes */}
      <Section>
        <h2 className="font-headline text-3xl sm:text-4xl mb-10">Latest episodes</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="card flex items-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-medium">[PLACEHOLDER] Episode {i} title</h3>
                <p className="font-mono-label mt-1">[PLACEHOLDER DATE] · [PLACEHOLDER DURATION]</p>
                <p className="font-serif-body text-sm text-[var(--text-secondary)] mt-2">[PLACEHOLDER: Episode description]</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* About the host */}
      <Section className="!bg-[var(--bg-card)]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
            <span className="font-headline text-3xl text-[var(--accent)]">KS</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">Hosted by Kato Sadat</h2>
          <p className="font-serif-body text-[var(--text-secondary)]">
            CEO of Tazon. Kato hosts the Daily Grind podcast, exploring technology, entrepreneurship, and what it means to build in Africa.
          </p>
          <p className="font-serif-body text-sm text-[var(--text-muted)] mt-4">
            [PLACEHOLDER: Full bio for Kato Sadat]
          </p>
        </div>
      </Section>
    </div>
  );
}
