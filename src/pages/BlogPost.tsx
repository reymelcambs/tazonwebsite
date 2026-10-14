import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { loadBlogPost, loadBlogPosts } from '../lib/content';
import { Section } from '../components/Shared';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug) {
    return (
      <div className="pt-28 pb-16 min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl mb-4">Post not found</h1>
          <Link to="/blog" className="pill-btn">← Back to blog</Link>
        </div>
      </div>
    );
  }

  const post = loadBlogPost(slug);

  if (!post) {
    return (
      <div className="pt-28 pb-16 min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl mb-4">Post not found</h1>
          <p className="font-serif-body text-[var(--text-secondary)] mb-6">
            The post you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/blog" className="pill-btn">← Back to blog</Link>
        </div>
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  const allPosts = loadBlogPosts();
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="pt-28 pb-16">
      {/* Header */}
      <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 fade-in">
        <nav className="mb-8">
          <Link to="/blog" className="text-sm text-[var(--accent)] link-underline">← Back to Blog</Link>
        </nav>

        <p className="font-mono-label mb-4">{post.date} · {post.category}</p>
        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
          {post.title}
        </h1>
        <p className="font-serif-body text-lg text-[var(--text-secondary)] italic mb-6">
          {post.excerpt}
        </p>

        <div className="border-t border-b border-[var(--border)] py-4 my-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="font-mono-label w-20 flex-shrink-0">Author</span>
            <span className="font-serif-body text-[var(--text-secondary)]">{post.author}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2">
            <span className="font-mono-label w-20 flex-shrink-0">Read time</span>
            <span className="font-serif-body text-[var(--text-secondary)]">{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="prose prose-lg max-w-none font-serif-body text-[var(--text-secondary)] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <Section>
          <h2 className="font-headline text-2xl sm:text-3xl mb-8">Related posts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                to={`/blog/${related.slug}`}
                key={related.slug}
                className="card block group"
              >
                <p className="font-mono-label mb-2">{related.date} · {related.category}</p>
                <h3 className="font-headline text-lg mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {related.title}
                </h3>
                <p className="font-serif-body text-sm text-[var(--text-secondary)] line-clamp-2">
                  {related.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Newsletter CTA */}
      <Section className="!bg-[var(--bg-card)]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-headline text-2xl sm:text-3xl mb-3">Stay in the loop</h2>
          <p className="font-serif-body text-[var(--text-secondary)] mb-6">
            Get updates on our research, products, and work.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              required
              aria-label="Email address"
              className="flex-1 px-4 py-3 rounded-full bg-[var(--bg-page)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
            <button type="submit" className="pill-btn whitespace-nowrap">
              Subscribe →
            </button>
          </form>
        </div>
      </Section>
    </article>
  );
}
