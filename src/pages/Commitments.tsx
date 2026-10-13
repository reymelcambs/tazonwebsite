import { Link } from 'react-router-dom';
import { Section, AfricanPatternSVG } from '../components/Shared';

export default function Commitments() {
  return (
    <div className="pt-28 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <AfricanPatternSVG className="absolute top-10 right-0 w-[300px] h-[300px] opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl fade-in">
            <p className="font-mono-label mb-4">Commitments</p>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              What we stand for.
            </h1>
            <p className="font-serif-body text-lg text-[var(--text-secondary)] leading-relaxed">
              We believe AI should serve people, not the other way around. These are the commitments that guide everything we build at Tazon.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <Section>
        <h2 className="font-headline text-3xl sm:text-4xl mb-10">Our values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Impact first', desc: 'We measure success by the positive change our work creates in people\'s lives, not by metrics alone.' },
            { title: 'Honesty', desc: 'We say what we mean. If something is in development, we say so. If we don\'t know, we say that too.' },
            { title: 'Community', desc: 'We build with and for the communities we serve. Their input shapes our research and products.' },
            { title: 'Accessibility', desc: 'Our tools should work for everyone — regardless of device, bandwidth, or background.' },
            { title: 'Transparency', desc: 'We share our methods, our limitations, and our progress openly.' },
            { title: 'Long-term thinking', desc: 'We build for Africa\'s long-term well-being, not short-term gains.' },
          ].map((v) => (
            <div key={v.title} className="card">
              <h3 className="font-headline text-lg mb-2">{v.title}</h3>
              <p className="font-serif-body text-sm text-[var(--text-secondary)]">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Responsible AI */}
      <Section id="responsible" className="!bg-[var(--bg-card)]">
        <div className="max-w-3xl">
          <h2 className="font-headline text-3xl sm:text-4xl mb-6">Responsible AI</h2>
          <div className="space-y-4 font-serif-body text-[var(--text-secondary)] leading-relaxed">
            <p>
              We take our responsibility seriously. AI systems can cause harm — through bias, through misuse, through unintended consequences. We are committed to building AI that minimizes harm and maximizes benefit.
            </p>
            <p>
              Our approach to responsible AI includes:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>Testing our systems with the communities they serve</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>Being transparent about what our AI can and cannot do</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>Designing for safety from the start, not as an afterthought</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>Listening to feedback and acting on it</span>
              </li>
            </ul>
            <p className="text-sm text-[var(--text-muted)]">
              [PLACEHOLDER: Detailed responsible AI policy to be published]
            </p>
          </div>
        </div>
      </Section>

      {/* Safety & Privacy */}
      <Section id="safety">
        <div className="max-w-3xl">
          <h2 className="font-headline text-3xl sm:text-4xl mb-6">Safety & privacy</h2>
          <div className="space-y-4 font-serif-body text-[var(--text-secondary)] leading-relaxed">
            <p>
              Stellas AI is used by students — many of them minors. We take their safety and privacy extremely seriously.
            </p>
            <p>
              Our commitments include:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>We do not sell student data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>We minimize data collection to what is necessary</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>We design content filters appropriate for students</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>We provide clear privacy notices in plain language</span>
              </li>
            </ul>
            <p className="text-sm text-[var(--text-muted)]">
              [PLACEHOLDER: Full privacy policy and safety guidelines to be published]
            </p>
          </div>
        </div>
      </Section>

      {/* Community & Education */}
      <Section id="community" className="!bg-[var(--bg-card)]">
        <div className="max-w-3xl">
          <h2 className="font-headline text-3xl sm:text-4xl mb-6">Community & education</h2>
          <div className="space-y-4 font-serif-body text-[var(--text-secondary)] leading-relaxed">
            <p>
              We believe AI research and products should benefit the communities they are built for. We are committed to:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>Working directly with schools, teachers, and students in Uganda</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>Sharing knowledge through open publications and educational resources</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>Building pathways for young Africans to enter AI research and engineering</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>Making our tools accessible and affordable</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Transparency */}
      <Section id="transparency">
        <div className="max-w-3xl">
          <h2 className="font-headline text-3xl sm:text-4xl mb-6">Transparency</h2>
          <div className="space-y-4 font-serif-body text-[var(--text-secondary)] leading-relaxed">
            <p>
              We will be open about what we build, how we build it, and what we still need to figure out. Transparency is not just a value — it is how we earn trust.
            </p>
            <p>
              We commit to:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>Publishing our research and methodology</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>Being honest about limitations and what is still in development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>Sharing updates regularly through our blog and newsletter</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">●</span>
                <span>Responding to questions from the public and press</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">Questions or feedback?</h2>
          <p className="font-serif-body text-[var(--text-secondary)] mb-6">
            We welcome conversations about our commitments. Reach out anytime.
          </p>
          <Link to="/contact" className="pill-btn">Contact us →</Link>
        </div>
      </Section>
    </div>
  );
}
