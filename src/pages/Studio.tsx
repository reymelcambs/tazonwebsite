import { useState } from 'react';
import { Section } from '../components/Shared';

export default function Studio() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="pt-28 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl fade-in">
          <p className="font-mono-label mb-4">Tazon Studio</p>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Web design & development.
          </h1>
          <p className="font-serif-body text-lg text-[var(--text-secondary)] leading-relaxed">
            Tazon Studio is our web design and development service. We build fast, accessible, and beautiful websites for organizations across Africa.
          </p>
        </div>
      </section>

      {/* Services */}
      <Section>
        <h2 className="font-headline text-3xl sm:text-4xl mb-10">What we do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Web Design', desc: 'Clean, editorial-style websites that tell your story and engage your audience.' },
            { title: 'Web Development', desc: 'Fast, accessible, mobile-first websites built with modern technology.' },
            { title: 'AI Integration', desc: 'Adding AI features to your existing products or building new AI-powered tools.' },
          ].map((s) => (
            <div key={s.title} className="card">
              <h3 className="font-headline text-lg mb-2">{s.title}</h3>
              <p className="font-serif-body text-sm text-[var(--text-secondary)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="!bg-[var(--bg-card)]">
        <h2 className="font-headline text-3xl sm:text-4xl mb-10">Our process</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Discover', desc: 'We learn about your goals, audience, and constraints.' },
            { step: '02', title: 'Design', desc: 'We create wireframes and visual designs for your review.' },
            { step: '03', title: 'Build', desc: 'We develop your site with performance and accessibility in mind.' },
            { step: '04', title: 'Launch', desc: 'We deploy, test, and hand over with documentation.' },
          ].map((p) => (
            <div key={p.step}>
              <p className="font-mono-label mb-2">{p.step}</p>
              <h3 className="font-headline text-lg mb-2">{p.title}</h3>
              <p className="font-serif-body text-sm text-[var(--text-secondary)]">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Sample work */}
      <Section>
        <h2 className="font-headline text-3xl sm:text-4xl mb-10">Sample work</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card">
              <div className="w-full h-48 rounded-xl bg-[var(--accent)]/5 flex items-center justify-center mb-4">
                <p className="font-mono-label">[PLACEHOLDER: Project screenshot {i}]</p>
              </div>
              <h3 className="font-medium">[PLACEHOLDER: Project name]</h3>
              <p className="font-serif-body text-sm text-[var(--text-secondary)] mt-1">[PLACEHOLDER: Brief description]</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Inquiry form */}
      <Section className="!bg-[var(--bg-card)]">
        <div className="max-w-xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl mb-4 text-center">Start a project</h2>
          <p className="font-serif-body text-[var(--text-secondary)] mb-8 text-center">
            Tell us about your project and we will get back to you.
          </p>
          {formSubmitted ? (
            <div className="card text-center">
              <p className="font-medium text-[var(--accent)]">Thank you! We will be in touch.</p>
              <p className="font-serif-body text-sm text-[var(--text-secondary)] mt-2">
                (Integration note: Connect this form to Formspree or Resend for real submissions.)
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input id="name" type="text" required className="w-full px-4 py-3 rounded-xl bg-[var(--bg-page)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input id="email" type="email" required className="w-full px-4 py-3 rounded-xl bg-[var(--bg-page)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]" />
              </div>
              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-1">Tell us about your project</label>
                <textarea id="project" rows={4} required className="w-full px-4 py-3 rounded-xl bg-[var(--bg-page)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] resize-none" />
              </div>
              <button type="submit" className="pill-btn w-full justify-center">Send inquiry →</button>
              <p className="text-xs text-[var(--text-muted)] text-center">
                Form integration: Connect to Formspree or Resend for live submissions.
              </p>
            </form>
          )}
        </div>
      </Section>
    </div>
  );
}
