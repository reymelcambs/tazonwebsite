import matter from 'gray-matter';
import { marked } from 'marked';

// Configure marked for safe rendering
marked.setOptions({
  gfm: true,
  breaks: false,
});

// Types
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  author: string;
  readTime: string;
  content: string;
  featured?: boolean;
}

export interface ResearchPaper {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  status: string;
  scope: string;
  authors: string;
  keywords: string[];
  content: string;
}

// Load all blog posts
export function loadBlogPosts(): BlogPost[] {
  const modules = import.meta.glob('/content/blog/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  
  const posts: BlogPost[] = Object.entries(modules).map(([path, raw]) => {
    const { data, content } = matter(raw);
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    // Calculate read time (average 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
    
    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      category: data.category || 'Uncategorized',
      excerpt: data.excerpt || content.substring(0, 200).replace(/[#*\n]/g, ' ').trim() + '...',
      author: data.author || 'Tazon Team',
      readTime: data.readTime || readTime,
      content: marked(content) as string,
      featured: data.featured || false,
    };
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Load a single blog post by slug
export function loadBlogPost(slug: string): BlogPost | null {
  const posts = loadBlogPosts();
  return posts.find(p => p.slug === slug) || null;
}

// Load all research papers
export function loadResearchPapers(): ResearchPaper[] {
  const modules = import.meta.glob('/content/research/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  
  return Object.entries(modules).map(([path, raw]) => {
    const { data, content } = matter(raw);
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    return {
      slug,
      title: data.title || 'Untitled',
      subtitle: data.subtitle || '',
      date: data.date || '',
      status: data.status || '',
      scope: data.scope || '',
      authors: data.authors || '',
      keywords: data.keywords || [],
      content: marked(content) as string,
    };
  });
}

// Load a single research paper by slug
export function loadResearchPaper(slug: string): ResearchPaper | null {
  const papers = loadResearchPapers();
  return papers.find(p => p.slug === slug) || null;
}
