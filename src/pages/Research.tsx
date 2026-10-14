import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { Section, AfricanPatternSVG, NewsletterSignup } from '../components/Shared';
import { loadResearchPapers } from '../lib/content';

const researchTeams = [
  {
    id: 'alignment',
    title: 'Alignment',
    description: 'The Alignment team works to understand the risks of AI models and develop ways to ensure that future ones remain helpful, honest, and harmless — especially in African contexts where AI systems may encounter languages, cultures, and use cases that were not part of their training data.',
  },
  {
    id: 'economics',
    title: 'Economics',
    description: 'The Economics team studies how AI is reshaping the economy across Africa, including work, productivity, and economic opportunity. We focus on ensuring AI benefits are shared broadly and do not deepen existing inequalities.',
  },
  {
    id: 'frontier-red-team',
    title: 'Frontier Red Team',
    description: 'The Frontier Red Team analyzes the implications of frontier AI models for cybersecurity, biosecurity, and autonomous systems — with particular attention to risks that may affect African nations and communities disproportionately.',
  },
  {
    id: 'interpretability',
    title: 'Interpretability',
    description: 'The mission of the Interpretability team is to understand how large language models work internally, as a foundation for AI safety and positive outcomes. We develop techniques to make AI decision-making transparent and accountable.',
  },
  {
    id: 'societal-impacts',
    title: 'Societal Impacts',
    description: 'Societal Impacts is a technical research team that explores how AI is used in the real world across Africa. We study deployment patterns, unintended consequences, and opportunities for positive social change.',
  },
];

function PublicationsSection() {
  const papers = useMemo(() => loadResearchPapers(), []);
  
  return (
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
      
      {/* Publications list */}
      {papers.length > 0 ? (
        <div className="space-y-6">
          {papers.map((paper) => (
            <Link key={paper.slug} to={`/research/${paper.slug}`} className="card block group fade-in">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 w-full sm:w-48 h-32 sm:h-auto rounded-xl bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent)]/5 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-10 h-10 mx-auto mb-2 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    <p className="font-mono-label text-xs">Research Paper</p>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-mono-label mb-2">{paper.date} · {paper.status}</p>
                  <h3 className="font-headline text-xl sm:text-2xl mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {paper.title}
                  </h3>
                  {paper.subtitle && (
                    <p className="font-serif-body text-sm text-[var(--text-secondary)] mb-4 line-clamp-3">
                      {paper.subtitle}
                    </p>
                  )}
                  {paper.keywords && paper.keywords.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.keywords.slice(0, 4).map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-full text-xs bg-[var(--bg-page)] border border-[var(--border)] text-[var(--text-muted)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="inline-flex items-center gap-2 text-sm text-[var(--accent)] font-medium group-hover:gap-3 transition-all">
                    Read full paper <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="card text-center py-12">
          <p className="font-serif-body text-sm text-[var(--text-muted)]">
            Publications will appear here as they are released.
          </p>
        </div>
      )}
    </Section>
  );
}

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
              Research.
            </h1>
            <p className="font-serif-body text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
              Our research teams investigate the safety, inner workings, and societal impacts of AI models — so that artificial intelligence has a positive impact as it becomes increasingly capable.
            </p>
          </div>
        </div>
      </section>

      {/* Research teams overview */}
      <Section>
        <h2 className="font-headline text-3xl sm:text-4xl mb-3">Research teams</h2>
        <p className="font-serif-body text-[var(--text-secondary)] mb-10 max-w-2xl">
          Our work is organized into five core research teams, each addressing a critical dimension of safe and beneficial AI.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchTeams.map((team) => (
            <a
              key={team.id}
              href={`#${team.id}`}
              className="card block group"
            >
              <h3 className="font-headline text-lg mb-2 group-hover:text-[var(--accent)] transition-colors">{team.title}</h3>
              <p className="font-serif-body text-sm text-[var(--text-secondary)] line-clamp-3">{team.description}</p>
            </a>
          ))}
        </div>
      </Section>

      {/* Detailed team sections */}
      {researchTeams.map((team, i) => (
        <Section key={team.id} id={team.id} className={i % 2 === 1 ? '!bg-[var(--bg-card)]' : ''}>
          <div className="max-w-3xl">
            <p className="font-mono-label mb-3">Research Team</p>
            <h2 className="font-headline text-3xl sm:text-4xl mb-6">{team.title}</h2>
            <p className="font-serif-body text-lg text-[var(--text-secondary)] leading-relaxed">
              {team.description}
            </p>
          </div>
        </Section>
      ))}

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
      <PublicationsSection />

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
