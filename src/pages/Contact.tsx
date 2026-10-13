import { useState } from 'react';
import { Section } from '../components/Shared';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-28 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl fade-in">
          <p className="font-mono-label mb-4">Contact</p>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Get in touch.
          </h1>
          <p className="font-serif-body text-lg text-[var(--text-secondary)] leading-relaxed">
            Have a question, partnership idea, or just want to say hello? We would love to hear from you.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="fade-in">
            {submitted ? (
              <div className="card text-center py-12">
                <p className="font-headline text-2xl text-[var(--accent)] mb-2">Thank you!</p>
                <p className="font-serif-body text-[var(--text-secondary)]">
                  We have received your message and will get back to you soon.
                </p>
                <p className="font-serif-body text-xs text-[var(--text-muted)] mt-4">
                  (Integration note: Connect this form to Formspree or Resend for real submissions.)
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium mb-1">Name</label>
                    <input id="contact-name" type="text" required className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium mb-1">Email</label>
                    <input id="contact-email" type="email" required className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium mb-1">Subject</label>
                  <select id="contact-subject" className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors">
                    <option value="">Select a topic</option>
                    <option value="general">General inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="research">Research collaboration</option>
                    <option value="studio">Tazon Studio (web services)</option>
                    <option value="press">Press / Media</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea id="contact-message" rows={5} required className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none" />
                </div>
                <button type="submit" className="pill-btn">Send message →</button>
                <p className="text-xs text-[var(--text-muted)]">
                  Form integration: Connect to Formspree or Resend for live submissions.
                </p>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="fade-in space-y-8">
            <div>
              <p className="font-mono-label mb-2">Company</p>
              <p className="font-serif-body text-[var(--text-secondary)]">
                Tazon Incorporated<br />
                Uganda
              </p>
            </div>
            <div>
              <p className="font-mono-label mb-2">Email</p>
              <p className="font-serif-body text-[var(--text-secondary)]">
                [PLACEHOLDER: contact email]
              </p>
            </div>
            <div>
              <p className="font-mono-label mb-2">Social</p>
              <div className="space-y-2">
                <a href="https://www.youtube.com/@dailygrind-ug" target="_blank" rel="noopener noreferrer" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">YouTube (Daily Grind)</a>
                <a href="https://www.tiktok.com/@daily._.grind" target="_blank" rel="noopener noreferrer" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">TikTok (Daily Grind)</a>
                <a href="https://www.instagram.com/daily_grind._podcast/" target="_blank" rel="noopener noreferrer" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Instagram (Daily Grind)</a>
              </div>
            </div>
            <div>
              <p className="font-mono-label mb-2">Products</p>
              <div className="space-y-2">
                <a href="https://stellas-ai.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Stellas AI → stellas-ai.com</a>
                <a href="https://app.stellas-ai.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Stellas AI App → app.stellas-ai.com</a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
