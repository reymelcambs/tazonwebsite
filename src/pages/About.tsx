import { Link } from 'react-router-dom';
import { Section, AfricanPatternSVG } from '../components/Shared';

export default function About() {
  return (
    <div className="pt-28 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <AfricanPatternSVG className="absolute top-10 right-0 w-[400px] h-[400px] opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl fade-in">
            <p className="font-mono-label mb-4">About</p>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              About Tazon.
            </h1>
            <p className="font-serif-body text-lg text-[var(--text-secondary)] leading-relaxed">
              Tazon (Tazon Incorporated) is an incorporated technology company in Uganda. Our mission is to pioneer the AI revolution in Africa through research and products with a positive impact on people.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="fade-in">
            <h2 className="font-headline text-3xl sm:text-4xl mb-6">What we do</h2>
            <div className="space-y-4 font-serif-body text-[var(--text-secondary)] leading-relaxed">
              <p>
                We work at the intersection of AI research and product development. Our tech team builds AI products — starting with Stellas AI, an exam-prep platform for Ugandan students — while our research labs work on foundational AI for African contexts.
              </p>
              <p>
                On the media side, our Daily Grind podcast, hosted by CEO Kato Sadat, explores technology and entrepreneurship in Africa.
              </p>
              <p>
                We also offer web design and development services through Tazon Studio.
              </p>
            </div>
          </div>
          <div className="fade-in space-y-6">
            <div className="card">
              <p className="font-mono-label mb-2">Product</p>
              <h3 className="font-medium mb-1">Stellas AI</h3>
              <p className="font-serif-body text-sm text-[var(--text-secondary)]">AI tutor and exam-prep for Ugandan students. Live at stellas-ai.com.</p>
            </div>
            <div className="card">
              <p className="font-mono-label mb-2">Research</p>
              <h3 className="font-medium mb-1">Tazon Labs</h3>
              <p className="font-serif-body text-sm text-[var(--text-secondary)]">Building our own AI model. In development.</p>
            </div>
            <div className="card">
              <p className="font-mono-label mb-2">Media</p>
              <h3 className="font-medium mb-1">Daily Grind</h3>
              <p className="font-serif-body text-sm text-[var(--text-secondary)]">Podcast by CEO Kato Sadat on tech and building in Africa.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Location */}
      <Section className="!bg-[var(--bg-card)]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl mb-4">Based in Uganda.</h2>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed">
            Tazon is headquartered in Uganda. We build for Uganda first, then for East Africa, then for the continent. We believe the best AI for Africa must be built by Africans, in Africa.
          </p>
        </div>
      </Section>

      {/* Careers / Privacy / Terms sections based on route */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl mb-6">Careers</h2>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-4">
            We are always looking for talented people who want to build AI that matters. Check our team page for current openings.
          </p>
          <p className="font-serif-body text-sm text-[var(--text-muted)]">
            [PLACEHOLDER: Current open positions will be listed here]
          </p>
        </div>
      </Section>

      <Section className="!bg-[var(--bg-card)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl mb-6">Privacy</h2>
          <div className="font-serif-body text-[var(--text-secondary)] leading-relaxed space-y-4">
            <p>
              At Tazon, we take privacy seriously. This is especially important because our primary product, Stellas AI, is used by students.
            </p>
            <p>
              Our privacy principles:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• We do not sell personal data</li>
              <li>• We minimize data collection to what is necessary</li>
              <li>• We provide clear, plain-language privacy notices</li>
              <li>• We design for student safety</li>
            </ul>
            <p className="text-sm text-[var(--text-muted)]">
              [PLACEHOLDER: Full privacy policy document to be published]
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl mb-6">Terms</h2>
          <div className="font-serif-body text-[var(--text-secondary)] leading-relaxed space-y-4">
            <p>
              These terms govern your use of Tazon's products and services, including Stellas AI and the Tazon website.
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              [PLACEHOLDER: Full terms of service document to be published]
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <Link to="/contact" className="pill-btn">Get in touch →</Link>
        </div>
      </Section>
    </div>
  );
}
