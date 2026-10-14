# Content Publishing Guide

This folder contains all blog posts and research papers for the Tazon website. Content is written in Markdown with YAML frontmatter.

## How to publish a new blog post

1. Create a new `.md` file in `content/blog/`
2. Name it with the date and slug: `YYYY-MM-DD-post-title.md`
3. Add frontmatter at the top (see template below)
4. Write your content in Markdown
5. Commit and push — the site will rebuild automatically

### Blog post template

```markdown
---
title: "Your post title"
date: "2026-10-15"
category: "Research"  # Options: Research, Product, Announcements, Education, Company
excerpt: "A brief summary that appears in post listings (1-2 sentences)"
author: "Author Name"
featured: false  # Set to true to feature on the blog homepage
---

## Your first heading

Your content here. Use standard Markdown:

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Lists, headings, etc.

## Another section

More content...
```

### Available categories

- `Research` — Research papers, technical notes, evaluation frameworks
- `Product` — Product updates, feature announcements
- `Announcements` — Company news, launches
- `Education` — Education-focused content, curriculum updates
- `Company` — Mission, values, team stories

## How to publish a research paper

Research papers go in `content/research/` with the same frontmatter structure, plus additional fields:

```markdown
---
title: "Paper title"
subtitle: "Paper subtitle or tagline"
date: "2026-10-13"
status: "Working draft"  # e.g., "Published", "Working draft", "Under review"
scope: "Ugandan O-Level and A-Level secondary education"
authors: "Author names or team"
keywords:
  - keyword1
  - keyword2
---

## Abstract

Your abstract here...

## 1. Introduction

Your content...
```

## Frontmatter fields

### Blog posts

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✓ | Post title |
| `date` | ✓ | Publication date (YYYY-MM-DD) |
| `category` | ✓ | Post category |
| `excerpt` | ✓ | Brief summary for listings |
| `author` | ✓ | Author name |
| `featured` | | Set to `true` to feature on homepage |
| `keywords` | | Array of keywords for SEO |

### Research papers

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✓ | Paper title |
| `subtitle` | | Paper subtitle |
| `date` | ✓ | Publication date |
| `status` | ✓ | Document status |
| `scope` | | Scope description |
| `authors` | ✓ | Author(s) |
| `keywords` | | Array of keywords |

## Markdown syntax

Use standard Markdown:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet list
- Item 2

1. Numbered list
2. Item 2

[Link text](https://example.com)

![Image alt](/images/image.jpg)

> Blockquote

`inline code`

```
code block
```
```

## Tips

- Keep excerpts concise (1-2 sentences)
- Use descriptive titles
- Add relevant keywords for SEO
- Set `featured: true` for important posts
- Date format must be YYYY-MM-DD
- File names should be lowercase with hyphens

## Examples

See existing posts:
- `content/blog/2026-10-13-stellas-ai-research-paper.md`
- `content/blog/2026-10-01-why-we-are-building-ai-in-uganda.md`
