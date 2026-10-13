import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Navigation structure
const navItems = [
  {
    label: 'Research',
    href: '/research',
    links: [
      { label: 'Overview', href: '/research' },
      { label: 'Alignment', href: '/research#alignment' },
      { label: 'Economics', href: '/research#economics' },
      { label: 'Interpretability', href: '/research#interpretability' },
      { label: 'Societal Impacts', href: '/research#societal-impacts' },
      { label: 'Frontier Red Team', href: '/research#frontier-red-team' },
      { label: 'Publications', href: '/research#publications' },
    ],
  },
  {
    label: 'Products',
    href: '/products/stellas-ai',
    links: [
      { label: 'Stellas AI', href: '/products/stellas-ai' },
      { label: 'For Students', href: '/products/stellas-ai#students' },
      { label: 'For Teachers', href: '/products/stellas-ai#teachers' },
      { label: 'Tazon Labs', href: '/research#labs' },
    ],
  },
  {
    label: 'Commitments',
    href: '/commitments',
    links: [
      { label: 'Our values', href: '/commitments' },
      { label: 'Responsible AI', href: '/commitments#responsible' },
      { label: 'Safety & privacy', href: '/commitments#safety' },
      { label: 'Community & education', href: '/commitments#community' },
      { label: 'Transparency', href: '/commitments#transparency' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
    links: [],
  },
  {
    label: 'Team',
    href: '/team',
    links: [],
  },
  {
    label: 'Studio',
    href: '/studio',
    links: [],
  },
  {
    label: 'Daily Grind',
    href: 'EXTERNAL',
    links: [],
    external: true,
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [stellasDropdown, setStellasDropdown] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileOpen(false);
        setStellasDropdown(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2 backdrop-blur-md bg-[var(--bg-page)]/90 border-b border-[var(--border)]'
          : 'py-4 bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-[var(--text-primary)] no-underline"
          aria-label="Tazon home"
        >
          <span className={`font-headline transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
            {scrolled ? 'T' : 'Tazon'}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef} aria-label="Main navigation">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.external ? (
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); window.open('https://www.youtube.com/@dailygrind-ug', '_blank'); }}
                  className="px-3 py-2 rounded-full text-sm font-medium transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  title="Opens in new tab"
                >
                  {item.label}
                </a>
              ) : item.links.length > 0 ? (
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    openDropdown === item.label
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg
                    className={`w-3 h-3 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown panel */}
              {item.links.length > 0 && openDropdown === item.label && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[var(--bg-card)] rounded-2xl shadow-lg border border-[var(--border)] p-2 animate-[fadeIn_0.15s_ease]"
                  role="menu"
                >
                  {item.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block px-4 py-2.5 text-sm font-serif-body text-[var(--text-secondary)] hover:text-[var(--accent)] rounded-xl hover:bg-[var(--bg-page)] transition-colors"
                      role="menuitem"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side: CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          {/* Try Stellas CTA with split dropdown */}
          <div className="hidden sm:flex items-center relative">
            <Link to="/products/stellas-ai" className="pill-btn text-sm !py-2 !px-4">
              Try Stellas
            </Link>
            <button
              onClick={() => setStellasDropdown(!stellasDropdown)}
              className="ml-1 p-2 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] hover:bg-[var(--accent)] transition-colors"
              aria-label="Stellas options"
              aria-expanded={stellasDropdown}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {stellasDropdown && (
              <div className="absolute top-full right-0 mt-2 w-44 bg-[var(--bg-card)] rounded-2xl shadow-lg border border-[var(--border)] p-2 z-50">
                <a href="https://app.stellas-ai.com" className="block px-4 py-2.5 text-sm font-serif-body text-[var(--text-secondary)] hover:text-[var(--accent)] rounded-xl hover:bg-[var(--bg-page)] transition-colors" target="_blank" rel="noopener">
                  Student app
                </a>
                <a href="https://stellas-ai.com" className="block px-4 py-2.5 text-sm font-serif-body text-[var(--text-secondary)] hover:text-[var(--accent)] rounded-xl hover:bg-[var(--bg-page)] transition-colors" target="_blank" rel="noopener">
                  Teacher tools
                </a>
              </div>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[var(--bg-page)] z-40 overflow-y-auto animate-[fadeIn_0.2s_ease]">
          <nav className="px-6 py-8" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-[var(--border)]">
                {item.external ? (
                  <a
                    href="https://www.youtube.com/@dailygrind-ug"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-4 text-lg font-medium text-[var(--text-primary)]"
                  >
                    {item.label} ↗
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-4 text-lg font-medium text-[var(--text-primary)]"
                  >
                    {item.label}
                  </Link>
                )}
                {item.links.length > 0 && (
                  <div className="pb-3 pl-4">
                    {item.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="block py-2 text-sm font-serif-body text-[var(--text-muted)]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6">
              <a href="https://app.stellas-ai.com" className="pill-btn w-full justify-center" target="_blank" rel="noopener">
                Try Stellas →
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
