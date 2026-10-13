import { Link } from 'react-router-dom';
import { Section, HandDrawnArc, AfricanPatternSVG } from '../components/Shared';

export default function StellasAI() {
  return (
    <div className="pt-28 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <AfricanPatternSVG className="absolute top-10 right-0 w-[400px] h-[400px] opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <HandDrawnArc className="w-64 sm:w-80 mx-auto mb-4 opacity-60" />
            <h1 className="font-serif-body text-5xl sm:text-6xl lg:text-7xl italic font-medium -mt-12 relative z-10">
              Stellas AI
            </h1>
            <p className="font-serif-body text-lg text-[var(--text-secondary)] mt-6 max-w-2xl mx-auto leading-relaxed">
              An AI tutor and exam-prep platform for Ugandan students. UNEB UACE past papers with detailed answers and marking schemes, aligned to the 2026 syllabus and the CBC 2025 curriculum.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://app.stellas-ai.com" target="_blank" rel="noopener noreferrer" className="pill-btn">
                Open the app →
              </a>
              <a href="https://stellas-ai.com" target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn-secondary">
                Visit stellas-ai.com →
              </a>
            </div>
            <p className="font-mono-label mt-6">Live at stellas-ai.com</p>
          </div>
        </div>
      </section>

      {/* For Students */}
      <Section id="students">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <p className="font-mono-label mb-3">For Students</p>
            <h2 className="font-headline text-3xl sm:text-4xl mb-6">
              Your AI study companion for UACE.
            </h2>
            <div className="space-y-4 font-serif-body text-[var(--text-secondary)]">
              <p>Stellas AI helps Ugandan students prepare for their UACE exams with:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">●</span>
                  <span>UNEB UACE past papers with detailed answers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">●</span>
                  <span>Marking schemes aligned to the 2026 syllabus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">●</span>
                  <span>Content aligned to the CBC 2025 curriculum</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">●</span>
                  <span>Personalized study support and explanations</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <a href="https://app.stellas-ai.com" target="_blank" rel="noopener noreferrer" className="pill-btn">
                Start studying →
              </a>
            </div>
          </div>
          <div className="fade-in">
            <div className="card min-h-[300px] flex items-center justify-center bg-[var(--accent)]/5">
              <div className="text-center">
                <p className="font-mono-label mb-2">[PLACEHOLDER]</p>
                <p className="font-serif-body text-sm text-[var(--text-muted)]">Screenshot of Stellas AI student interface</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* For Teachers */}
      <Section id="teachers" className="!bg-[var(--bg-card)]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in order-2 lg:order-1">
            <div className="card min-h-[300px] flex items-center justify-center bg-[var(--accent)]/5">
              <div className="text-center">
                <p className="font-mono-label mb-2">[PLACEHOLDER]</p>
                <p className="font-serif-body text-sm text-[var(--text-muted)]">Screenshot of Stellas AI teacher tools</p>
              </div>
            </div>
          </div>
          <div className="fade-in order-1 lg:order-2">
            <p className="font-mono-label mb-3">For Teachers</p>
            <h2 className="font-headline text-3xl sm:text-4xl mb-6">
              Tools built for educators.
            </h2>
            <div className="space-y-4 font-serif-body text-[var(--text-secondary)]">
              <p>Stellas AI has a dedicated Teachers side with tools designed for educators:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">●</span>
                  <span>Track student progress and performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">●</span>
                  <span>Create custom assessments and assignments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">●</span>
                  <span>Access marking schemes and curriculum resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">●</span>
                  <span>Integrate AI-assisted learning into your classroom</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <a href="https://stellas-ai.com" target="_blank" rel="noopener noreferrer" className="pill-btn">
                Teacher tools →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* UNEB & CBC Alignment */}
      <Section>
        <div className="max-w-3xl mx-auto text-center fade-in">
          <p className="font-mono-label mb-3">Curriculum alignment</p>
          <h2 className="font-headline text-3xl sm:text-4xl mb-6">
            Built for the Ugandan education system.
          </h2>
          <p className="font-serif-body text-[var(--text-secondary)] text-lg leading-relaxed">
            Stellas AI is aligned to the 2026 UNEB UACE syllabus and the Competency-Based Curriculum (CBC) 2025. All content is designed to match what students are actually learning in school, not generic international material.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="card text-center">
              <p className="font-headline text-2xl text-[var(--accent)] mb-2">2026</p>
              <p className="font-serif-body text-sm text-[var(--text-secondary)]">UNEB UACE syllabus alignment</p>
            </div>
            <div className="card text-center">
              <p className="font-headline text-2xl text-[var(--accent)] mb-2">CBC 2025</p>
              <p className="font-serif-body text-sm text-[var(--text-secondary)]">Competency-Based Curriculum</p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="!bg-[var(--bg-card)]">
        <h2 className="font-headline text-3xl sm:text-4xl mb-10">Frequently asked questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: 'What is Stellas AI?', a: 'Stellas AI is an AI tutor and exam-prep platform for Ugandan students. It provides UNEB UACE past papers with detailed answers and marking schemes, aligned to the 2026 syllabus and the CBC 2025 curriculum.' },
            { q: 'Is Stellas AI free?', a: '[PLACEHOLDER — pricing details to be added]' },
            { q: 'Which subjects does Stellas AI cover?', a: '[PLACEHOLDER — subject list to be added]' },
            { q: 'How do teachers use Stellas AI?', a: 'Teachers can access the Teachers side of Stellas AI to track student progress, create custom assessments, and integrate AI-assisted learning into their classrooms.' },
            { q: 'Who built Stellas AI?', a: 'Stellas AI is built by Tazon, an incorporated technology company in Uganda. It is our first product, designed to serve Ugandan students directly.' },
          ].map((faq, i) => (
            <details key={i} className="card !p-0 !bg-transparent group">
              <summary className="flex items-center justify-between cursor-pointer py-4 px-6 font-medium text-[var(--text-primary)] list-none">
                {faq.q}
                <svg className="w-5 h-5 text-[var(--text-muted)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 font-serif-body text-[var(--text-secondary)]">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl mb-4">Ready to start?</h2>
          <p className="font-serif-body text-[var(--text-secondary)] mb-8">
            Open Stellas AI and start preparing for your exams today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://app.stellas-ai.com" target="_blank" rel="noopener noreferrer" className="pill-btn">
              Open the app →
            </a>
            <Link to="/research" className="pill-btn pill-btn-secondary">
              Learn about our research →
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
