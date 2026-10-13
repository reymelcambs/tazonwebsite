import { Link } from 'react-router-dom';
import { Section, TeamCard } from '../components/Shared';

const teamMembers = [
  { name: 'Kato Sadat', role: 'CEO & Founder', initials: 'KS', bio: '[PLACEHOLDER: Full bio for Kato Sadat, CEO of Tazon]' },
  { name: '[PLACEHOLDER]', role: 'CTO', initials: 'TM', bio: '[PLACEHOLDER]' },
  { name: '[PLACEHOLDER]', role: 'Head of Research', initials: 'HR', bio: '[PLACEHOLDER]' },
  { name: '[PLACEHOLDER]', role: 'Lead Engineer', initials: 'LE', bio: '[PLACEHOLDER]' },
  { name: '[PLACEHOLDER]', role: 'Product Designer', initials: 'PD', bio: '[PLACEHOLDER]' },
  { name: '[PLACEHOLDER]', role: 'ML Engineer', initials: 'ML', bio: '[PLACEHOLDER]' },
  { name: '[PLACEHOLDER]', role: 'Content & Education', initials: 'CE', bio: '[PLACEHOLDER]' },
  { name: '[PLACEHOLDER]', role: 'Operations', initials: 'OP', bio: '[PLACEHOLDER]' },
];

export default function Team() {
  return (
    <div className="pt-28 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl fade-in">
          <p className="font-mono-label mb-4">Team</p>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            The people behind Tazon.
          </h1>
          <p className="font-serif-body text-lg text-[var(--text-secondary)] leading-relaxed">
            We are a team of researchers, engineers, designers, and educators building AI in Uganda. Our work spans AI research, education technology, and responsible product development.
          </p>
        </div>
      </section>

      {/* Team grid - creative staggered layout */}
      <Section>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className={`card group ${i % 3 === 1 ? 'sm:mt-8' : ''} ${i % 5 === 0 ? 'lg:mt-4' : ''}`}
            >
              <div className="w-full aspect-square rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--accent)]/20 transition-colors">
                <span className="font-headline text-3xl sm:text-4xl text-[var(--accent)]">{member.initials}</span>
              </div>
              <h3 className="font-medium text-[var(--text-primary)] text-sm sm:text-base">{member.name}</h3>
              <p className="font-mono-label mt-1">{member.role}</p>
              <p className="font-serif-body text-xs text-[var(--text-muted)] mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Join us */}
      <Section className="!bg-[var(--bg-card)]">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl mb-4">Join the team</h2>
          <p className="font-serif-body text-[var(--text-secondary)] mb-6">
            We are always looking for talented people who want to build AI that matters. If you are passionate about AI research, education, or building for Africa, we would love to hear from you.
          </p>
          <p className="font-serif-body text-sm text-[var(--text-muted)] mb-8">
            [PLACEHOLDER: Current open positions will be listed here]
          </p>
          <Link to="/contact" className="pill-btn">Get in touch →</Link>
        </div>
      </Section>
    </div>
  );
}
