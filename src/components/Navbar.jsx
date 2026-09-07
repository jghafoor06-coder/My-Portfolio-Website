import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import MobileMenu from './MobileMenu';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <a
          className="navbar-logo"
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          data-cursor="button"
        >
          Jahanzaib
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className={`navbar-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              onClick={() => handleNavClick(link.href)}
              data-cursor="button"
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contact"
            className="navbar-cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            data-cursor="button"
          >
            Let's Talk ↗
          </a>
        </div>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span style={{ width: '16px' }} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            links={navLinks}
            onClose={() => setMenuOpen(false)}
            onNavigate={handleNavClick}
          />
        )}
      </AnimatePresence>
    </>
  );
}
