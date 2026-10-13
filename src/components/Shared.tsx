import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

/* ============================================
   SHARED UI COMPONENTS
   Reusable building blocks for the Tazon site
   ============================================ */

// Abstract SVG art - African textile-inspired geometry
export function AfricanPatternSVG({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 200 Q100 100 200 150 Q300 200 350 100" stroke="var(--accent)" strokeWidth="2" opacity="0.3" fill="none" />
      <path d="M30 250 Q130 150 230 200 Q330 250 380 150" stroke="var(--accent)" strokeWidth="1.5" opacity="0.2" fill="none" />
      <path d="M70 300 Q170 200 270 250 Q370 300 400 200" stroke="var(--text-muted)" strokeWidth="1" opacity="0.15" fill="none" />
      <circle cx="200" cy="200" r="60" stroke="var(--accent)" strokeWidth="1" opacity="0.1" fill="none" />
      <circle cx="200" cy="200" r="90" stroke="var(--accent)" strokeWidth="0.5" opacity="0.08" fill="none" />
      {/* Diamond pattern */}
      <path d="M180 180 L200 160 L220 180 L200 200 Z" stroke="var(--accent)" strokeWidth="1" opacity="0.2" fill="none" />
      <path d="M160 200 L200 160 L240 200 L200 240 Z" stroke="var(--text-muted)" strokeWidth="0.5" opacity="0.1" fill="none" />
    </svg>
  );
}

// Hand-drawn arc for Stellas AI section
export function HandDrawnArc({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M50 180 Q100 160 150 140 Q200 120 250 100 Q300 80 350 90 Q400 100 450 120"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M60 185 Q110 165 160 145 Q210 125 260 105 Q310 85 360 95 Q410 105 455 125"
        stroke="var(--text-muted)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.2"
      />
    </svg>
  );
}

// Section wrapper with fade-in
export function Section({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`fade-in py-16 sm:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

// Mono label
export function MonoLabel({ children }: { children: ReactNode }) {
  return <span className="font-mono-label">{children}</span>;
}

// Hairline divider
export function Divider() {
  return <hr className="hairline my-6" />;
}

// Release card for "Latest releases"
export function ReleaseCard({
  title,
  description,
  date,
  category,
  details,
  detailsHref,
  ctaText = 'Read announcement →',
  ctaHref,
}: {
  title: string;
  description: string;
  date: string;
  category: string;
  details: string;
  detailsHref: string;
  ctaText?: string;
  ctaHref: string;
}) {
  return (
    <div className="card flex flex-col h-full">
      <h3 className="font-headline text-xl sm:text-2xl mb-3">{title}</h3>
      <p className="font-serif-body text-[var(--text-secondary)] text-sm mb-6 flex-1">{description}</p>
      <div className="mt-auto">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center py-2 border-b border-[var(--border)]">
            <MonoLabel>Date</MonoLabel>
            <span className="text-sm text-[var(--text-secondary)]">{date}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[var(--border)]">
            <MonoLabel>Category</MonoLabel>
            <span className="text-sm text-[var(--text-secondary)]">{category}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <MonoLabel>Details</MonoLabel>
            <Link to={detailsHref} className="text-sm text-[var(--accent)] link-underline">{details}</Link>
          </div>
        </div>
        <Link to={ctaHref} className="pill-btn text-sm w-full justify-center">
          {ctaText}
        </Link>
      </div>
    </div>
  );
}

// Index list row
export function IndexRow({ title, category, href }: { title: string; category: string; href: string }) {
  return (
    <Link
      to={href}
      className="flex items-center justify-between py-4 border-b border-[var(--border)] group hover:pl-2 transition-all duration-200"
    >
      <span className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
        {title}
      </span>
      <span className="font-mono-label text-[var(--text-muted)]">{category}</span>
    </Link>
  );
}

// Newsletter signup
export function NewsletterSignup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${compact ? '' : 'max-w-xl mx-auto text-center'}`}>
      {!compact && (
        <h3 className="font-headline text-2xl sm:text-3xl mb-3">Stay in the loop</h3>
      )}
      {!compact && (
        <p className="font-serif-body text-[var(--text-secondary)] mb-6">
          Updates on our research, products, and the work we do.
        </p>
      )}
      <form className={`flex ${compact ? 'flex-row' : 'flex-col sm:flex-row'} gap-3`} onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Your email"
          required
          aria-label="Email address"
          className="flex-1 px-4 py-3 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
        />
        <button type="submit" className="pill-btn whitespace-nowrap">
          Subscribe →
        </button>
      </form>
      <p className="text-xs text-[var(--text-muted)] mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  );
}

// Research focus area card
export function FocusCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link to={href} className="card block group">
      <h3 className="font-headline text-lg mb-2 group-hover:text-[var(--accent)] transition-colors">{title}</h3>
      <p className="font-serif-body text-sm text-[var(--text-secondary)]">{description}</p>
    </Link>
  );
}

// Team member card with placeholder initials
export function TeamCard({ name, role, initials, bio }: { name: string; role: string; initials: string; bio?: string }) {
  return (
    <div className="card text-center group cursor-default">
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
        <span className="font-headline text-2xl text-[var(--accent)]">{initials}</span>
      </div>
      <h4 className="font-medium text-[var(--text-primary)]">{name}</h4>
      <p className="font-mono-label mt-1">{role}</p>
      {bio && (
        <p className="font-serif-body text-xs text-[var(--text-muted)] mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
          {bio}
        </p>
      )}
    </div>
  );
}
