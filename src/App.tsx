import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import StellasAI from './pages/StellasAI';
import Commitments from './pages/Commitments';
import Blog from './pages/Blog';
import Team from './pages/Team';
import Studio from './pages/Studio';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function FadeObserver() {
  const location = useLocation();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    // Small delay to let new page content render
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-in:not(.visible)').forEach((el) => observer.observe(el));
    }, 50);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [location.pathname]);
  return null;
}

export default function App() {

  return (
    <HashRouter>
      <ScrollToTop />
      <FadeObserver />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/products/stellas-ai" element={<StellasAI />} />
          <Route path="/commitments" element={<Commitments />} />
          <Route path="/commitments/*" element={<Commitments />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<About />} />
          <Route path="/privacy" element={<About />} />
          <Route path="/terms" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
