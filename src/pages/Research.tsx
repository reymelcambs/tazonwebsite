import { Link } from 'react-router-dom';
import { Section, FocusCard, NewsletterSignup, AfricanPatternSVG } from '../components/Shared';

export default function Research() {
  return (
    <div className="pt-28 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <AfricanPatternSVG className="absolute -top-10 -right-20 w-[400px] h-[400px] opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl fade-in">
            <p className="font-mono-label mb-4">Research</p>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              AI research built in Africa, for the world.
            </h1>
            <p className="font-serif-body text-lg text-[var(--text-secondary)] leading-relaxed">
              Our research focuses on building AI systems that work for African contexts — languages, education, low-resource environments, and responsible deployment. We believe the best AI for Africa must be built in Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <Section id="education">
        <h2 className="font-headline text-3xl sm:text-4xl mb-3">Focus areas</h2>
        <p className="font-serif-body text-[var(--text-secondary)] mb-10 max-w-2xl">
          Our research is organized around four core areas, each addressing a critical gap in AI for the continent.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <FocusCard
            title="Education AI"
            description="How can AI improve learning outcomes for students in Uganda and across East Africa? We build tools like Stellas AI and research effective pedagogical approaches for AI-assisted learning."
            href="/products/stellas-ai"
          />
          <FocusCard
            title="African Languages"
            description="Most AI systems do not understand African languages well. We are working on models and datasets for Luganda, Swahili, and other languages spoken across the continent."
            href="#"
          />
          <FocusCard
            title="Low-resource & Low-bandwidth AI"
            description="Not everyone has fast internet or powerful devices. We design AI systems that work well with limited data, compute, and connectivity — the reality for most of Africa."
            href="#"
          />
          <FocusCard
            title="Responsible AI"
            description="We research how to build AI safely and transparently, with the communities we serve involved in the process from the start."
            href="#"
          />
        </div>
      </Section>

      {/* Tazon Labs */}
      <Section id="labs" className="!bg-[var(--bg-card)]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono-label mb-3">Tazon Labs</p>
          <h2 className="font-headline text-3xl sm:text-4xl mb-4">Our model is in development.</h2>
          <p className="font-serif-body text-[var(--text-secondary)] mb-4">
            At Tazon Labs, we are building our own AI model. It is not yet released. We will share updates on our progress as we make them.
          </p>
          <p className="font-serif-body text-[var(--text-muted)] text-sm mb-8">
            In development. Follow for updates.
          </p>
          <NewsletterSignup compact />
        </div>
      </Section>

      {/* Publications */}
      <Section id="publications">
        <h2 className="font-headline text-3xl sm:text-4xl mb-3">Publications</h2>
        <p className="font-serif-body text-[var(--text-secondary)] mb-10">
          Our research papers, technical reports, and blog posts.
        </p>
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', 'Papers', 'Reports', 'Blog posts'].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Empty state */}
        <div className="card text-center py-16">
          <p className="font-serif-body text-[var(--text-muted)]">
            [PLACEHOLDER] Publications will appear here as they are released.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">Want to collaborate?</h2>
          <p className="font-serif-body text-[var(--text-secondary)] mb-6">
            We welcome partnerships with researchers, institutions, and organizations across Africa.
          </p>
          <Link to="/contact" className="pill-btn">Get in touch →</Link>
        </div>
      </Section>
    </div>
  );
}
