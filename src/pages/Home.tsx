import { Link } from 'react-router-dom';
import { Section, ReleaseCard, IndexRow, NewsletterSignup, FocusCard, TeamCard, HandDrawnArc, AfricanPatternSVG } from '../components/Shared';

export default function Home() {
  return (
    <div className="pt-20">
      {/* ============================================
          1. HERO
          ============================================ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <AfricanPatternSVG className="absolute top-20 right-0 w-[500px] h-[500px] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Headline */}
            <div className="fade-in">
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]">
                AI{' '}
                <Link to="/research" className="relative text-[var(--text-muted)] link-underline">
                  research
                </Link>{' '}
                and{' '}
                <Link to="/products/stellas-ai" className="relative text-[var(--text-muted)] link-underline">
                  products
                </Link>{' '}
                built in Africa, for Africa
              </h1>
            </div>
            {/* Right: Description */}
            <div className="fade-in">
              <p className="font-serif-body text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
                Tazon is an incorporated technology company in Uganda dedicated to the positive impact of AI. We build research-driven products that serve students, educators, and communities across the continent.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/products/stellas-ai" className="pill-btn">
                  Try Stellas AI →
                </Link>
                <Link to="/research" className="pill-btn pill-btn-secondary">
                  Our research →
                </Link>
              </div>
            </div>
          </div>
          {/* Bottom peek panel */}
          <div className="mt-16 fade-in">
            <div className="card bg-[var(--bg-card)] p-8 sm:p-12 flex items-center justify-center min-h-[200px] relative overflow-hidden">
              <AfricanPatternSVG className="absolute inset-0 w-full h-full opacity-20" />
              <div className="text-center relative z-10">
                <p className="font-mono-label mb-2">Featured</p>
                <p className="font-headline text-2xl sm:text-3xl">Stellas AI — live now</p>
                <p className="font-serif-body text-[var(--text-secondary)] mt-2">AI tutor and exam-prep for Ugandan students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          2. FEATURED PRODUCT — Stellas AI
          ============================================ */}
      <Section className="!bg-[var(--bg-card)] !rounded-none">
        <div className="text-center relative">
          <HandDrawnArc className="w-64 sm:w-80 mx-auto mb-4 opacity-60" />
          <h2 className="font-serif-body text-5xl sm:text-6xl lg:text-7xl italic font-medium -mt-16 relative z-10">
            Stellas AI
          </h2>
          <p className="font-serif-body text-lg text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto">
            An AI tutor and exam-prep platform for Ugandan students. UNEB UACE past papers with detailed answers and marking schemes, aligned to the 2026 syllabus and the CBC 2025 curriculum.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/products/stellas-ai" className="pill-btn">
              Read more →
            </Link>
            <a href="https://app.stellas-ai.com" target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn-secondary">
              Open the app →
            </a>
          </div>
        </div>
      </Section>

      {/* ============================================
          3. LATEST RELEASES
          ============================================ */}
      <Section>
        <h2 className="font-headline text-3xl sm:text-4xl mb-10">Latest releases</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ReleaseCard
            title="Introducing Stellas AI"
            description="An AI-powered tutor for Ugandan students preparing for their UACE exams. Past papers, marking schemes, and personalized study support."
            date="[PLACEHOLDER]"
            category="Product"
            details="View product"
            detailsHref="/products/stellas-ai"
            ctaHref="/news"
          />
          <ReleaseCard
            title="Stellas for Teachers"
            description="Tools for educators to track student progress, create custom assessments, and integrate Stellas AI into their classrooms."
            date="[PLACEHOLDER]"
            category="Education"
            details="Learn more"
            detailsHref="/products/stellas-ai#teachers"
            ctaHref="/news"
          />
          <ReleaseCard
            title="Tazon Labs: our model is in development"
            description="We are building our own AI model at Tazon Labs. Follow along for updates as we progress."
            date="[PLACEHOLDER]"
            category="Research"
            details="Follow updates"
            detailsHref="/research#labs"
            ctaHref="/research#labs"
          />
        </div>
      </Section>

      {/* ============================================
          4. MISSION + INDEX LIST
          ============================================ */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="fade-in">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl leading-tight">
              At Tazon, we build AI to serve Africa's long-term well-being.
            </h2>
          </div>
          <div className="fade-in">
            <IndexRow title="Our research focus areas" category="Research" href="/research" />
            <IndexRow title="Stellas AI and the UACE" category="Education" href="/products/stellas-ai" />
            <IndexRow title="Our commitments" category="Commitments" href="/commitments" />
            <IndexRow title="Tazon Labs update" category="Announcements" href="/research#labs" />
            <IndexRow title="Responsible AI at Tazon" category="Responsible AI" href="/commitments#responsible" />
            <IndexRow title="Build with Tazon Studio" category="Services" href="/studio" />
          </div>
        </div>
      </Section>

      {/* ============================================
          5. TAZON LABS TEASER
          ============================================ */}
      <Section className="!bg-[var(--bg-card)]">
        <div className="max-w-2xl mx-auto text-center fade-in">
          <p className="font-mono-label mb-3">Tazon Labs</p>
          <h2 className="font-headline text-3xl sm:text-4xl mb-4">
            Our model is in development.
          </h2>
          <p className="font-serif-body text-[var(--text-secondary)] mb-8">
            We are building our own AI model at Tazon Labs. We will share updates as we make progress. Sign up to be notified.
          </p>
          <NewsletterSignup compact />
        </div>
      </Section>

      {/* ============================================
          6. RESEARCH FOCUS AREAS
          ============================================ */}
      <Section>
        <h2 className="font-headline text-3xl sm:text-4xl mb-10">Research focus areas</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FocusCard
            title="African Languages"
            description="Building AI that understands and generates African languages, starting with Luganda and Swahili."
            href="/research#languages"
          />
          <FocusCard
            title="Education AI"
            description="AI tools that improve learning outcomes for students across Uganda and East Africa."
            href="/research#education"
          />
          <FocusCard
            title="Low-resource & Low-bandwidth AI"
            description="Models and systems designed to work well with limited data, compute, and internet connectivity."
            href="/research#low-resource"
          />
          <FocusCard
            title="Responsible AI"
            description="Ensuring our work is safe, transparent, and serves the communities we build for."
            href="/research#responsible"
          />
        </div>
      </Section>

      {/* ============================================
          7. TEAM STRIP
          ============================================ */}
      <Section>
        <h2 className="font-headline text-3xl sm:text-4xl mb-10">The people behind Tazon</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <TeamCard name="Kato Sadat" role="CEO & Founder" initials="KS" bio="[PLACEHOLDER: Full bio]" />
          <TeamCard name="[PLACEHOLDER]" role="CTO" initials="TM" bio="[PLACEHOLDER]" />
          <TeamCard name="[PLACEHOLDER]" role="Head of Research" initials="HR" bio="[PLACEHOLDER]" />
          <TeamCard name="[PLACEHOLDER]" role="Lead Engineer" initials="LE" bio="[PLACEHOLDER]" />
          <TeamCard name="[PLACEHOLDER]" role="Product Designer" initials="PD" bio="[PLACEHOLDER]" />
        </div>
        <div className="mt-8 text-center">
          <Link to="/team" className="pill-btn pill-btn-secondary">
            Meet the full team →
          </Link>
        </div>
      </Section>

      {/* ============================================
          8. DAILY GRIND PODCAST STRIP
          ============================================ */}
      <Section className="!bg-[var(--bg-card)]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <p className="font-mono-label mb-3">Podcast</p>
            <h2 className="font-headline text-3xl sm:text-4xl mb-4">Daily Grind</h2>
            <p className="font-serif-body text-[var(--text-secondary)] mb-6">
              A podcast by Tazon CEO Kato Sadat. Conversations about technology, entrepreneurship, and building in Africa.
            </p>
            <div className="flex gap-4 mb-6">
              <a href="https://www.youtube.com/@dailygrind-ug" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
              <a href="https://www.tiktok.com/@daily._.grind" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15.7 6.34 6.34 0 0 0 9.49 22a6.34 6.34 0 0 0 6.34-6.34V9.01a8.26 8.26 0 0 0 4.84 1.55V7.12a4.82 4.82 0 0 1-1.08-.43z"/></svg>
                TikTok
              </a>
              <a href="https://www.instagram.com/daily_grind._podcast/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                Instagram
              </a>
            </div>
            <Link to="/media" className="pill-btn pill-btn-secondary">
              Listen now →
            </Link>
          </div>
          <div className="fade-in space-y-4">
            {/* Latest episodes placeholder */}
            {['[PLACEHOLDER] Latest Episode', '[PLACEHOLDER] Episode', '[PLACEHOLDER] Episode'].map((ep, i) => (
              <div key={i} className="card !p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-sm">{ep}</p>
                  <p className="font-mono-label mt-1">[PLACEHOLDER DATE]</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          9. NEWS
          ============================================ */}
      <Section>
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-headline text-3xl sm:text-4xl">News</h2>
          <Link to="/news" className="text-sm text-[var(--accent)] link-underline">All posts →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: '[PLACEHOLDER] Introducing Stellas AI', date: '[PLACEHOLDER]', category: 'Announcements' },
            { title: '[PLACEHOLDER] Our approach to responsible AI', date: '[PLACEHOLDER]', category: 'Research' },
            { title: '[PLACEHOLDER] Building for low-bandwidth environments', date: '[PLACEHOLDER]', category: 'Research' },
          ].map((post, i) => (
            <Link to="/news" key={i} className="card block group">
              <div className="w-full h-32 rounded-xl bg-[var(--accent)]/5 mb-4 flex items-center justify-center">
                <span className="font-mono-label">[PLACEHOLDER IMAGE]</span>
              </div>
              <p className="font-mono-label mb-2">{post.date} · {post.category}</p>
              <h3 className="font-medium group-hover:text-[var(--accent)] transition-colors">{post.title}</h3>
            </Link>
          ))}
        </div>
      </Section>

      {/* ============================================
          10. NEWSLETTER
          ============================================ */}
      <Section id="newsletter">
        <NewsletterSignup />
      </Section>
    </div>
  );
}
