import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Section, NewsletterSignup } from '../components/Shared';
import { loadBlogPosts } from '../lib/content';

const categories = ['All', 'Announcements', 'Research', 'Product', 'Education', 'Company'];

export default function Blog() {
  const posts = useMemo(() => loadBlogPosts(), []);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured || activeCategory !== 'All' || searchQuery);

  return (
    <div className="pt-28 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl fade-in">
          <p className="font-mono-label mb-4">Blog</p>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            The Tazon Blog.
          </h1>
          <p className="font-serif-body text-lg text-[var(--text-secondary)] leading-relaxed">
            Thoughts, updates, and stories from our work building AI in Africa. Research notes, product launches, and reflections on what we are learning.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featuredPost && (
        <Section>
          <Link to={`/blog/${featuredPost.slug}`} className="card !p-8 sm:!p-12 fade-in block group">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-mono-label mb-3">{featuredPost.date} · {featuredPost.category}</p>
                <h2 className="font-headline text-2xl sm:text-3xl mb-4 group-hover:text-[var(--accent)] transition-colors">{featuredPost.title}</h2>
                <p className="font-serif-body text-[var(--text-secondary)] mb-6">{featuredPost.excerpt}</p>
                <p className="font-mono-label mb-4">{featuredPost.author} · {featuredPost.readTime}</p>
                <span className="inline-flex items-center gap-2 text-sm text-[var(--accent)] font-medium group-hover:gap-3 transition-all">
                  Read post <span aria-hidden="true">→</span>
                </span>
              </div>
              <div className="min-h-[200px] rounded-2xl bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent)]/5 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-3 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  <p className="font-mono-label text-xs">Featured Post</p>
                </div>
              </div>
            </div>
          </Link>
        </Section>
      )}

      {/* Filters + Search */}
      <Section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeCategory === cat
                    ? 'bg-[var(--text-primary)] text-[var(--bg-page)]'
                    : 'border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="search"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] w-full sm:w-64"
            aria-label="Search posts"
          />
        </div>

        {/* Post list */}
        <div className="space-y-0">
          {regularPosts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-[var(--border)] group hover:pl-2 transition-all duration-200"
            >
              <div className="flex-1">
                <h3 className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-1">
                  {post.title}
                </h3>
                <p className="font-serif-body text-sm text-[var(--text-secondary)]">{post.excerpt}</p>
              </div>
              <div className="mt-2 sm:mt-0 sm:text-right flex-shrink-0">
                <p className="font-mono-label">{post.date}</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">{post.category}</p>
              </div>
            </Link>
          ))}
          {regularPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-serif-body text-[var(--text-muted)]">No posts found.</p>
            </div>
          )}
        </div>
      </Section>

      {/* Newsletter */}
      <Section className="!bg-[var(--bg-card)]">
        <NewsletterSignup />
      </Section>
    </div>
  );
}
