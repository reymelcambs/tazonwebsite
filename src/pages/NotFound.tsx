import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="pt-28 pb-16 min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-mono-label mb-4">404</p>
        <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl mb-6">
          Page not found.
        </h1>
        <p className="font-serif-body text-lg text-[var(--text-secondary)] max-w-md mx-auto mb-8">
          The page you are looking for does not exist or has been moved. Let us get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="pill-btn">Go home →</Link>
          <Link to="/news" className="pill-btn pill-btn-secondary">Read our news →</Link>
        </div>
      </div>
    </div>
  );
}
