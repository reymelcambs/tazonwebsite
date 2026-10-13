import { Link } from 'react-router-dom';

const footerColumns = [
  {
    title: 'Products',
    links: [
      { label: 'Stellas AI', href: '/products/stellas-ai' },
      { label: 'For Students', href: '/products/stellas-ai#students' },
      { label: 'For Teachers', href: '/products/stellas-ai#teachers' },
      { label: 'Tazon Labs', href: '/research#labs' },
      { label: 'Open the app', href: 'https://app.stellas-ai.com', external: true },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Education', href: '/products/stellas-ai' },
      { label: 'Schools', href: '/products/stellas-ai' },
      { label: 'Teachers', href: '/products/stellas-ai#teachers' },
      { label: 'Exam prep', href: '/products/stellas-ai' },
      { label: 'Web design', href: '/studio' },
      { label: 'Web development', href: '/studio' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Daily Grind', href: 'https://www.youtube.com/@dailygrind-ug', external: true },
      { label: 'Newsletter', href: '/' },
      { label: 'Press kit', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Tazon', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Research', href: '/research' },
      { label: 'Commitments', href: '/commitments' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#E8E6E0] mt-20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section */}
        <div className="mb-12">
          <span className="font-headline text-4xl sm:text-5xl tracking-tight">Tazon</span>
          <p className="mt-3 text-[#9A9A9A] font-serif-body text-sm max-w-md">
            AI research and products built in Africa, for Africa.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono-label text-[#9A9A9A] mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#B8B6B0] hover:text-[#D4845F] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-[#B8B6B0] hover:text-[#D4845F] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-[#333] mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#7A7A7A]">
            © {new Date().getFullYear()} Tazon Incorporated. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@dailygrind-ug"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-[#7A7A7A] hover:text-[#D4845F] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@daily._.grind"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-[#7A7A7A] hover:text-[#D4845F] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15.7 6.34 6.34 0 0 0 9.49 22a6.34 6.34 0 0 0 6.34-6.34V9.01a8.26 8.26 0 0 0 4.84 1.55V7.12a4.82 4.82 0 0 1-1.08-.43z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/daily_grind._podcast/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#7A7A7A] hover:text-[#D4845F] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
