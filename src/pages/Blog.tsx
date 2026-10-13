import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section, NewsletterSignup } from '../components/Shared';

const categories = ['All', 'Announcements', 'Research', 'Product', 'Education', 'Company'];

const placeholderPosts = [
  {
    title: '[PLACEHOLDER] Introducing Stellas AI',
    date: '[PLACEHOLDER]',
    category: 'Announcements',
    excerpt: 'We are launching Stellas AI, an AI tutor and exam-prep platform for Ugandan students preparing for their UACE exams.',
    author: 'Tazon Team',
    readTime: '3 min read',
  },
  {
    title: '[PLACEHOLDER] Our approach to responsible AI in education',
    date: '[PLACEHOLDER]',
    category: 'Research',
    excerpt: 'How we think about building AI tools for students — safety, privacy, and impact.',
    author: 'Tazon Team',
    readTime: '5 min read',
  },
  {
    title: '[PLACEHOLDER] Building for low-bandwidth environments',
    date: '[PLACEHOLDER]',
    category: 'Research',
    excerpt: 'Why we design our AI systems to work well even with limited internet connectivity.',
    author: 'Tazon Team',
    readTime: '4 min read',
  },
  {
    title: '[PLACEHOLDER] Stellas for Teachers: tools for educators',
    date: '[PLACEHOLDER]',
    category: 'Product',
    excerpt: 'Introducing the Teachers side of Stellas AI — tools to track student progress and create custom assessments.',
    author: 'Tazon Team',
    readTime: '3 min read',
  },
  {
    title: '[PLACEHOLDER] Why we are building AI in Uganda',
    date: '[PLACEHOLDER]',
    category: 'Company',
    excerpt: 'Our mission, our approach, and why we believe the best AI for Africa must be built in Africa.',
    author: 'Kato Sadat',
    readTime: '6 min read',
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = placeholderPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
      <Section>
        <div className="card !p-8 sm:!p-12 fade-in">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-mono-label mb-3">{placeholderPosts[0].date} · {placeholderPosts[0].category}</p>
              <h2 className="font-headline text-2xl sm:text-3xl mb-4">{placeholderPosts[0].title}</h2>
              <p className="font-serif-body text-[var(--text-secondary)] mb-6">{placeholderPosts[0].excerpt}</p>
              <p className="font-mono-label mb-4">{placeholderPosts[0].author} · {placeholderPosts[0].readTime}</p>
              <button className="pill-btn">Read post →</button>
            </div>
            <div className="min-h-[200px] rounded-2xl bg-[var(--accent)]/5 flex items-center justify-center">
              <p className="font-mono-label">[PLACEHOLDER IMAGE]</p>
            </div>
          </div>
        </div>
      </Section>

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
          {filteredPosts.map((post, i) => (
            <button
              key={i}
              className="w-full text-left flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-[var(--border)] group hover:pl-2 transition-all duration-200"
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
            </button>
          ))}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-serif-body text-[var(--text-muted)]">No posts found.</p>
            </div>
          )}
        </div>

        {/* Pagination placeholder */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-full text-sm bg-[var(--text-primary)] text-[var(--bg-page)]">1</button>
            <button className="px-4 py-2 rounded-full text-sm border border-[var(--border)] text-[var(--text-secondary)]">2</button>
            <button className="px-4 py-2 rounded-full text-sm border border-[var(--border)] text-[var(--text-secondary)]">3</button>
          </div>
        </div>
      </Section>

      {/* Newsletter */}
      <Section className="!bg-[var(--bg-card)]">
        <NewsletterSignup />
      </Section>
    </div>
  );
}
