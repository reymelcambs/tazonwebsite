import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section, AfricanPatternSVG } from '../components/Shared';

const clients = [
  'McDonald\'s', 'Brown University', 'Unilever', 'CLEAR',
  'Godfather\'s Pizza', 'Sound.com', 'Mersive', 'REISS',
  'Microscope Central', 'DDC', 'Lavi Industries', 'Manhattan View Hotel',
];

const caseStudies = [
  {
    title: 'Central Pro Supply',
    description: 'Rebuilding Central Pro Supply\'s digital identity to reflect brand evolution and partner-first solutions.',
    tag: 'Website Transformation',
    gradient: 'from-[#B85C38]/20 via-[#D4845F]/10 to-transparent',
  },
  {
    title: 'Godfather\'s Pizza',
    description: 'Reimagining Godfather\'s Pizza digital experience to reflect brand flavor and drive customer engagement.',
    tag: 'Digital Presence',
    gradient: 'from-[#1A1A1A]/10 via-[#4A4A4A]/5 to-transparent',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We map your current digital experience, identify where growth is being lost, and surface the gaps between your website and your revenue goals.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Action Plan',
    description: 'We discuss tailored approaches and ideas that will move your initiatives forward.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Your Quote',
    description: 'We provide transparent pricing and timelines so you can plan confidently.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

export default function Studio() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="pt-28 pb-16">
      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative overflow-hidden">
        <AfricanPatternSVG className="absolute top-20 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl fade-in">
            <p className="font-mono-label mb-4">Tazon Studio · Web Design & Development</p>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-8">
              Your website is your most powerful and most{' '}
              <span className="text-[var(--text-muted)]">underused</span>{' '}
              growth asset.
            </h1>
            <p className="font-serif-body text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              Companies that prioritize their website experience generate{' '}
              <span className="font-medium text-[var(--text-primary)]">60% higher profits</span>{' '}
              than their competitors. From the first meeting to the final launch, every decision we make is tied to one question: how does this help you grow?
            </p>
            <p className="font-serif-body text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl mt-4">
              We build websites, customer loyalty, and marketing automation as one connected revenue system.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="pill-btn">Let's talk →</a>
              <a href="#case-studies" className="pill-btn pill-btn-secondary">View case studies →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CLIENT LOGOS STRIP
          ============================================ */}
      <Section>
        <p className="font-mono-label mb-6 text-center">Trusted by teams building for growth</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((client) => (
            <div
              key={client}
              className="h-20 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center px-4 hover:border-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-all duration-200"
            >
              <span className="font-medium text-xs sm:text-sm text-[var(--text-muted)] text-center leading-tight">
                {client}
              </span>
            </div>
          ))}
        </div>
        <p className="font-serif-body text-xs text-[var(--text-muted)] text-center mt-6">
          [PLACEHOLDER: Replace with actual client logos when available]
        </p>
      </Section>

      {/* ============================================
          CASE STUDIES
          ============================================ */}
      <Section id="case-studies" className="!bg-[var(--bg-card)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="font-mono-label mb-3">Proven Results</p>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl leading-tight">
              What Growth Looks Like<br />for Our Clients
            </h2>
          </div>
          <button className="pill-btn pill-btn-secondary self-start sm:self-end">
            View all case studies →
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <div key={study.title} className="group cursor-pointer">
              {/* Image card with gradient */}
              <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${study.gradient} mb-5`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[var(--bg-page)]/80 backdrop-blur flex items-center justify-center">
                      <span className="font-headline text-2xl text-[var(--accent)]">
                        {study.title.charAt(0)}
                      </span>
                    </div>
                    <p className="font-mono-label">[PLACEHOLDER IMAGE]</p>
                  </div>
                </div>
                {/* Decorative pattern */}
                <svg className="absolute bottom-0 right-0 w-32 h-32 opacity-30" viewBox="0 0 100 100" fill="none">
                  <circle cx="80" cy="80" r="40" stroke="var(--accent)" strokeWidth="0.5" />
                  <circle cx="80" cy="80" r="25" stroke="var(--accent)" strokeWidth="0.5" />
                  <path d="M20 80 Q50 50 80 20" stroke="var(--text-muted)" strokeWidth="0.5" fill="none" />
                </svg>
              </div>
              <p className="font-mono-label mb-2">{study.tag}</p>
              <h3 className="font-headline text-xl sm:text-2xl mb-2 group-hover:text-[var(--accent)] transition-colors">
                {study.title}
              </h3>
              <p className="font-serif-body text-sm text-[var(--text-secondary)]">
                {study.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============================================
          PROCESS — Discovery, Action Plan, Quote
          ============================================ */}
      <Section>
        <div className="max-w-3xl mb-12">
          <p className="font-mono-label mb-3">The Process</p>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Here's What Happens<br />Once We Connect
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {process.map((step) => (
            <div key={step.step} className="group">
              {/* Image card */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] mb-5 group-hover:border-[var(--accent)] transition-all duration-300">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--accent)]/10" />
                
                {/* Icon centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6 group-hover:bg-[var(--accent)] group-hover:text-[var(--bg-page)] transition-all duration-300">
                    {step.icon}
                  </div>
                  <p className="font-mono-label mb-2">Step {step.step}</p>
                  <h3 className="font-headline text-2xl text-center">{step.title}</h3>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-12 h-12 opacity-20">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M0 0 L48 0 L48 48" stroke="var(--accent)" strokeWidth="1" fill="none" />
                    <path d="M8 0 L48 0 L48 40" stroke="var(--accent)" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>
              </div>

              <p className="font-serif-body text-sm text-[var(--text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============================================
          SERVICES (compact)
          ============================================ */}
      <Section className="!bg-[var(--bg-card)]">
        <h2 className="font-headline text-3xl sm:text-4xl mb-10">What we build</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Website Transformation', desc: 'Turn your existing site into a revenue-driving asset with strategic redesign.' },
            { title: 'Web Development', desc: 'Fast, accessible, mobile-first websites built with modern technology.' },
            { title: 'AI Integration', desc: 'Add AI features to your products or build new AI-powered tools.' },
          ].map((s) => (
            <div key={s.title} className="card">
              <h3 className="font-headline text-lg mb-2">{s.title}</h3>
              <p className="font-serif-body text-sm text-[var(--text-secondary)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============================================
          CONTACT FORM
          ============================================ */}
      <Section id="contact">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="fade-in">
            <p className="font-mono-label mb-3">Get in Touch</p>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Let's Talk.
            </h2>
            <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-8">
              Tell us about your project. We will map your current digital experience, identify where growth is being lost, and surface the gaps between your website and your revenue goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-headline text-sm text-[var(--accent)]">01</span>
                </div>
                <p className="font-serif-body text-sm text-[var(--text-secondary)]">Discovery questionnaire</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-headline text-sm text-[var(--accent)]">02</span>
                </div>
                <p className="font-serif-body text-sm text-[var(--text-secondary)]">Tailored action plan</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-headline text-sm text-[var(--accent)]">03</span>
                </div>
                <p className="font-serif-body text-sm text-[var(--text-secondary)]">Transparent quote</p>
              </div>
            </div>
          </div>

          <div className="fade-in">
            {formSubmitted ? (
              <div className="card text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-headline text-2xl mb-2">Thank you!</p>
                <p className="font-serif-body text-[var(--text-secondary)]">
                  We have received your message and will get back to you soon.
                </p>
                <p className="font-serif-body text-xs text-[var(--text-muted)] mt-4">
                  (Integration note: Connect this form to Formspree or Resend for real submissions.)
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
                className="card space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name <span className="text-[var(--accent)]">*</span></label>
                    <input id="firstName" type="text" required className="w-full px-4 py-3 rounded-xl bg-[var(--bg-page)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name <span className="text-[var(--accent)]">*</span></label>
                    <input id="lastName" type="text" required className="w-full px-4 py-3 rounded-xl bg-[var(--bg-page)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Business Email <span className="text-[var(--accent)]">*</span></label>
                  <input id="email" type="email" required className="w-full px-4 py-3 rounded-xl bg-[var(--bg-page)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <input id="phone" type="tel" className="w-full px-4 py-3 rounded-xl bg-[var(--bg-page)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
                    <input id="company" type="text" className="w-full px-4 py-3 rounded-xl bg-[var(--bg-page)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium mb-1">Website URL</label>
                  <input id="website" type="url" placeholder="https://" className="w-full px-4 py-3 rounded-xl bg-[var(--bg-page)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
                </div>
                <div>
                  <label htmlFor="goals" className="block text-sm font-medium mb-1">What are you looking to achieve?</label>
                  <textarea id="goals" rows={4} className="w-full px-4 py-3 rounded-xl bg-[var(--bg-page)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none" />
                </div>
                <div>
                  <label htmlFor="source" className="block text-sm font-medium mb-1">How did you hear about us?</label>
                  <select id="source" className="w-full px-4 py-3 rounded-xl bg-[var(--bg-page)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors">
                    <option value="">Select an option</option>
                    <option value="search">Search engine</option>
                    <option value="social">Social media</option>
                    <option value="referral">Referral</option>
                    <option value="event">Event or conference</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button type="submit" className="pill-btn w-full justify-center mt-2">Let's Talk →</button>
                <p className="text-xs text-[var(--text-muted)] text-center">
                  Form integration: Connect to Formspree or Resend for live submissions.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
