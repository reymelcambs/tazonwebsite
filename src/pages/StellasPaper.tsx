import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { loadResearchPaper } from '../lib/content';
import { Section } from '../components/Shared';

export default function StellasPaper() {
  const { slug } = useParams<{ slug: string }>();
  const paperSlug = slug || 'stellas-ai-paper';
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paperSlug]);

  const paper = loadResearchPaper(paperSlug);

  if (!paper) {
    return (
      <div className="pt-28 pb-16 min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl mb-4">Paper not found</h1>
          <Link to="/research" className="pill-btn">← Back to Research</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-28 pb-16">
      {/* Paper Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 fade-in">
        <nav className="mb-8">
          <Link to="/research" className="text-sm text-[var(--accent)] link-underline">← Back to Research</Link>
        </nav>

        <p className="font-mono-label mb-4">Research Paper · {paper.status}</p>
        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
          {paper.title}
        </h1>
        {paper.subtitle && (
          <p className="font-serif-body text-lg text-[var(--text-secondary)] italic mb-6">
            {paper.subtitle}
          </p>
        )}

        {/* Meta table */}
        <div className="border-t border-b border-[var(--border)] py-4 my-8 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="font-mono-label w-40 flex-shrink-0">Prepared by</span>
            <span className="font-serif-body text-[var(--text-secondary)]">{paper.authors}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="font-mono-label w-40 flex-shrink-0">Date</span>
            <span className="font-serif-body text-[var(--text-secondary)]">{paper.date}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="font-mono-label w-40 flex-shrink-0">Scope</span>
            <span className="font-serif-body text-[var(--text-secondary)]">{paper.scope}</span>
          </div>
        </div>

        {/* Keywords */}
        {paper.keywords && paper.keywords.length > 0 && (
          <div className="mb-8">
            <p className="font-mono-label mb-2">Keywords</p>
            <div className="flex flex-wrap gap-2">
              {paper.keywords.map((kw) => (
                <span key={kw} className="px-3 py-1 rounded-full text-xs bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)]">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Paper Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="prose prose-lg max-w-none font-serif-body text-[var(--text-secondary)] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: paper.content }}
        />
      </div>

      {/* Citation */}
      <Section>
        <div className="max-w-3xl mx-auto card !bg-[var(--bg-card)]">
          <p className="font-mono-label mb-2">Cite this paper</p>
          <p className="font-serif-body text-sm text-[var(--text-secondary)]">
            {paper.authors}. ({new Date(paper.date).getFullYear()}). <em>{paper.title}</em>. {paper.status}, {paper.date}.
          </p>
        </div>
      </Section>
    </article>
  );
}
